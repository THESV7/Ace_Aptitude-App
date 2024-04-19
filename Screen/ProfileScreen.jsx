import React, { useCallback, useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import BackButton from '../Components/BackButton';
import { Ionicons, Entypo } from '@expo/vector-icons'; // Import Entypo icon
import { LinearGradient } from 'expo-linear-gradient';
import usegetAsyncStorage from '../Hooks/UserAuth/getAsyncStorageDetails';
import { useFocusEffect } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; // Import ImagePicker
import useUserProfileUpdate from '../Hooks/UserAuth/userProfileUpdate';
import StatsSection from '../ScreenSection/ProfileSections/components/StatsSection';
import BadgeSection from '../ScreenSection/ProfileSections/BadgeSection';
import useCustomNavigation from '../Hooks/Navigation/Navigate';
import useUserDetails from '../Hooks/UserAuth/userDetials';
import TextSkeleton from '../Components/SkeletonComponents/TextSkeleton';
import ImageSkeleton from '../Components/SkeletonComponents/ImageSkeleton';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const [userDetails, setUserDetails] = useState([]);
  const { handleUserAuthinticate } = usegetAsyncStorage();
  const { responseData, error, isLoading, uploadImage, clearData } = useUserProfileUpdate();
  const { data: userDetailsData, isUserLoading, getUserDetails, clear } = useUserDetails(); // Use the hook
  const { navigate } = useCustomNavigation()
  useFocusEffect(
    useCallback(() => {
      const getDetails = async () => {
        const userDetails = await handleUserAuthinticate();
        getUserDetails(userDetails._id); // Fetch user details using the hook
      };
      getDetails();
    }, [])
  );


  // const handleImageUpload = async () => {
  //   try {
  //     const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     if (permissionResult.granted === false) {
  //       console.log('Permission to access camera roll is required!');
  //       return;
  //     }

  //     const pickerResult = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       quality: 1,
  //       allowsEditing: true, // Enables built-in cropping UI (if available)
  //       aspect: [1, 1], // Aspect ratio for cropping
  //       accept: 'image/*', // Limit file types to images
  //     });

  //     if (!pickerResult.canceled) {
  //       const formData = new FormData();
  //       formData.append('file', {
  //         uri: pickerResult.assets[0].uri,
  //         type: 'image/jpeg', // Adjust the type based on your image format
  //         name: 'upload.jpg', // Adjust the file name if needed
  //       });
  //       formData.append('upload_preset', 'Profile_Image_upload'); // Replace with your Cloudinary upload preset

  //       const apiKey = '537622161437147'
  //       const apiSecret = 'pYnAsthvi-kY5FpXWzO3PTnNl-A'
  //       // Make an API call to Cloudinary to upload the image
  //       const response = await fetch(`https://api.cloudinary.com/v1_1/dmrjruik5/image/upload`, {
  //         method: 'POST',
  //         body: formData,
  //         headers: {
  //           'Content-Type': 'multipart/form-data',
  //         },
  //         auth: {
  //           username: apiKey,
  //           password: apiSecret,
  //         },
  //       });

  //       if (response.ok) {
  //         const cloudinaryResponse = await response.json();
  //         await uploadImage(cloudinaryResponse.secure_url)
  //       } else {
  //         console.error('Failed to upload to Cloudinary:', response);
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error uploading:', error);
  //   }
  // };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} overScrollMode="never">
        <View style={styles.container}>
          <LinearGradient colors={['#6674cc', '#f7f8fa']} locations={[0.20, 0.20]} style={styles.gradient}>
            <View style={styles.content}>
              <View style={[styles.header, { flex: 0 }]}>
                <View style={styles.headerContent}>
                  <View style={{ flex: 1 }}>
                    {/* <BackButton /> */}
                  </View>
                  <TouchableOpacity style={styles.settingsButton} onPress={() => navigate('Settings')}>
                    <Ionicons name="md-settings-outline" size={30} color="#6674CC" />
                  </TouchableOpacity>
                </View>
                <View>
                  {
                    isUserLoading ?
                      <ImageSkeleton />
                      :
                      <Image
                        source={{ uri: userDetailsData?.profileImage }} // Replace with your image source
                        style={styles.image}
                      />
                  }
                  {/* Add Expo edit icon */}
                  {/* <TouchableOpacity style={styles.editIcon} onPress={handleImageUpload}>
                    <Entypo name="edit" size={18} color="black" />
                  </TouchableOpacity> */}
                </View>
              </View>
              <View style={{ flex: 1 }}>
                <View style={{ flex: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                  <View>
                    {
                      isUserLoading ?
                        <TextSkeleton width={200} mb={10} />
                        :
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
                          <Text style={styles.name}>{userDetailsData?.Name}</Text>
                          <Text style={{ marginTop: 8 }}>{userDetailsData?.isVerified && <MaterialIcons name="verified" size={24} color="#6674cc" />}</Text>
                        </View>
                    }
                    {
                      isUserLoading ?
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                          <TextSkeleton width={150} />
                        </View>
                        :
                        <Text style={styles.email}>{userDetailsData?.email}</Text>
                    }

                  </View>
                  {/* {isUserLoading ?
                    <TextSkeleton width={120} height={50} />
                    : (
                      <TouchableOpacity style={styles.editButton} onPress={() => navigate('Edit Profile')}>
                        <Text style={styles.editText}>Edit Profile</Text>
                      </TouchableOpacity>
                    )} */}
                </View>
                <View>
                  <StatsSection />
                </View>
                <View>
                  <BadgeSection />
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:'20%' 
  },
  gradient: {
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
    borderColor: '#f7f8fa',
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
    textTransform: 'capitalize',
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
});
