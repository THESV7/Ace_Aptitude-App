import React, { useCallback, useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import BackButton from '../Components/BackButton';
import { Ionicons, Entypo } from '@expo/vector-icons'; // Import Entypo icon
import { LinearGradient } from 'expo-linear-gradient';
import usegetAsyncStorage from '../Hooks/UserAuth/getAsyncStorageDetails';
import { useFocusEffect } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker
import useUserProfileUpdate from '../Hooks/UserAuth/userProfileUpdate';
import useCustomNavigation from '../Hooks/Navigation/Navigate';
import useUpdateUserDetails from '../Hooks/UserAuth/userDetailsUpdate';
import CustomHeader from '../Components/CustomeHeader/CustomHeader';
import { CLOUD_NAME, API_KEY, API_SECRET } from '@env';

const EditProfileScreen = () => {

    const [userDetails, setUserDetails] = useState([]);
    const [Name, setName] = useState('');
    const { handleUserAuthinticate } = usegetAsyncStorage();
    const { responseData, error, isLoading, uploadImage, clearData } = useUserProfileUpdate();
    const { userDetailsUpdate, isUserUpdateLoading, Error } = useUpdateUserDetails()
    const { navigate } = useCustomNavigation()
    useFocusEffect(
        useCallback(() => {
            const getDetails = async () => {
                const userDetails = await handleUserAuthinticate();
                setUserDetails(userDetails);
            };
            getDetails();
        }, [isLoading])
    );

    useFocusEffect(
        useCallback(() => {
            const getDetails = async () => {
                const userDetails = await handleUserAuthinticate();
                setUserDetails(userDetails);
                setName(userDetails.Name)
            };
            getDetails();
        }, [isUserUpdateLoading])
    )



    const handleImageUpload = async () => {
        try {
            const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (permissionResult.granted === false) {
                console.log('Permission to access camera roll is required!');
                return;
            }

            const pickerResult = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 1,
                allowsEditing: true, // Enables built-in cropping UI (if available)
                aspect: [1, 1], // Aspect ratio for cropping
                accept: 'image/*', // Limit file types to images
            });

            if (!pickerResult.canceled) {
                const formData = new FormData();
                formData.append('file', {
                    uri: pickerResult.assets[0].uri,
                    type: 'image/jpeg', // Adjust the type based on your image format
                    name: 'upload.jpg', // Adjust the file name if needed
                });
                formData.append('upload_preset', 'Profile_Image_upload'); // Replace with your Cloudinary upload preset

                const apiKey = "537622161437147"
                const apiSecret = "pYnAsthvi-kY5FpXWzO3PTnNl-A"
                // Make an API call to Cloudinary to upload the image
                const response = await fetch(`https://api.cloudinary.com/v1_1/dmrjruik5/image/upload`, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    auth: {
                        username: apiKey,
                        password: apiSecret,
                    },
                });

                if (response.ok) {
                    const cloudinaryResponse = await response.json();
                    await uploadImage(cloudinaryResponse.secure_url)
                } else {
                    console.error('Failed to upload to Cloudinary:', response);
                }
            }
        } catch (error) {
            console.error('Error uploading:', error);
        }
    };

    const handleUpdateProfile = () => {
        const name = Name.toLowerCase()
        userDetailsUpdate(name)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style="auto" />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} overScrollMode="never">
                <View style={styles.container}>
                    <View style={styles.content}>
                        <View style={[styles.header, { flex: 0 }]}>
                            <CustomHeader title={'Edit Profile'} flexValue={2} />
                            <View style={{ borderColor: 'black', borderWidth: 2, borderStyle: 'dashed', borderRadius: 100, padding: 5 }}>
                                <Image
                                    source={{ uri: userDetails.profileImage }} // Replace with your image source
                                    style={styles.image}
                                />
                                {/* Add Expo edit icon */}
                                <TouchableOpacity style={styles.editIcon} onPress={handleImageUpload}>
                                    <Entypo name="edit" size={18} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20 }}>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 5 }}>Name</Text>
                                {/* Input for Name */}
                                <TextInput
                                    style={styles.inputField}
                                    value={Name}
                                    onChangeText={setName}
                                />
                            </View>
                            {/* Save button */}
                            <TouchableOpacity style={styles.saveButton} onPress={handleUpdateProfile}>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    header: {
        alignItems: 'center',
        position: 'relative', // Added position relative for absolute positioning
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    settingsButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e9e9ff',
        padding: 10,
        borderRadius: 10,
    },
    image: {
        width: 134,
        height: 134,
        resizeMode: 'contain',
        borderRadius: 100,
        borderWidth: 5,
        backgroundColor: '#E0E0E0'
    },
    editIcon: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: '#e9e9ff',
        padding: 7,
        borderRadius: 20,
    },
    name: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    email: {
        fontSize: 16,
        marginTop: 5,
        textAlign: 'center',
    },
    editButton: {
        marginTop: 10,
        backgroundColor: '#e9e9ff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 7,
    },
    editText: {
        fontSize: 16,
        color: '#6674CC',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    inputField: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 16,
        textTransform:'capitalize'
    },

    saveButton: {
        marginTop: 20,
        backgroundColor: '#6674cc',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 8,
    },
});
