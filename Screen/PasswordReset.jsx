import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../Components/CustomeHeader/CustomHeader';
import Button from '../Components/Button';
import useResetPassword from '../Hooks/UserAuth/resetPassword';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const PasswordReset = ({ route }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation()
    const { email } = route.params; // Extract email from route parameters
    const { loading, error, responseData, resetPassword, clear } = useResetPassword(); // Use the hook

    const handlePasswordReset = () => {
        // Check if passwords match
        if (newPassword !== confirmPassword) {
            // Handle error: Passwords don't match
            console.log("password not matched")
            return;
        }
        // Call the resetPassword function from the hook
        resetPassword(email, newPassword);
    };

    const handleStoreData = async () => {
        try {
          await AsyncStorage.setItem('user', JSON.stringify(responseData?.user));
          console.log('Successfully saved after the password reset');
        } catch (error) {
          console.log("Error", error);
        }
      };
    
    useFocusEffect(
        useCallback(() => {
          if (!loading && responseData) {
            handleStoreData()
            navigation.navigate('Tabs')
          }
    
          return () => { 
            clear();
            setNewPassword('')
            setConfirmPassword('')
          }
          
        }, [loading,responseData])
      )

    return (
        <SafeAreaView style={{ flex: 1,backgroundColor: 'white' }}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0 }}>
                    <CustomHeader title={'Password Reset'} flexValue={2.5} />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 25, gap: 20 }}>
                    <View style={{ flex: 0, gap: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: '#8b8b8a' }}>Please set a new password to reset your account.</Text>
                        <Text style={{ fontSize: 24, fontWeight: '700' }}>Reset Password and Sign In </Text>
                    </View>
                    <View style={{ flex: 0, gap: 25 }}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#8b8b8a', marginLeft: 4, marginBottom: 4 }}>New Password</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='New Password'
                                onChangeText={setNewPassword}
                                value={newPassword}
                                secureTextEntry={true}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#8b8b8a', marginLeft: 4, marginBottom: 4 }}>Confirm Password</Text>
                            <TextInput
                                style={styles.input}
                                placeholder='Confirm Password'
                                onChangeText={setConfirmPassword}
                                value={confirmPassword}
                                secureTextEntry={true}
                            />
                        </View>
                        <Button buttonText={'Reset Password'} onPress={handlePasswordReset} w={'100%'} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        elevation: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: '#e9e9ff',
        borderRadius: 15,
        fontSize: 16,
        fontWeight: '700',
    },
});

export default PasswordReset;
