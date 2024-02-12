import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useUserRegistration from '../Hooks/UserAuth/UserRegister';
import SuccessfulModal from '../Components/SuccessfulModal';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useCustomNavigation from '../Hooks/Navigation/Navigate';
import { useNavigation } from '@react-navigation/native';
import PasswordVisibilityToggle from '../Components/PasswordVisibilityToggle';

const SignUpScreen = () => {
  //States
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setComfirmpassword] = useState('');
  const [show, setShow] = useState(true);
  const [showConfirm, setShowConfirm] = useState(true);
  const [profileImage, setProfileImage] = useState('https://tse2.mm.bing.net/th?id=OIP.y5mF55TfUAReTXVp9kGY0AHaHa&pid=Api&P=0&h=180');
  const [formErrors, setFormErrors] = useState({});

  //API And HOOKS
  const { responseData, error, isLoading, registerUser } = useUserRegistration();
  const navigation = useNavigation();
  const { navigate } = useCustomNavigation();

  const handleStoreData = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(responseData.user));
      console.log('Successfully saved');
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if (!isLoading && responseData) {
      handleStoreData();
      const Email = email.toLowerCase();
      navigation.navigate('OtpVerify', { email: Email });
    }
  }, [responseData, isLoading]);

  const handleRegister = () => {
    const errors = {};
    if (!Name.trim()) {
      errors.name = 'Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    }
    if (!password.trim()) {
      errors.password = 'Password is required';
    }
    if (!confirmpassword.trim()) {
      errors.confirmpassword = 'Confirm Password is required';
    } else if (password !== confirmpassword) {
      errors.confirmpassword = 'Passwords do not match';
    }

    setFormErrors(errors);

    // If no errors, proceed with registration
    if (Object.keys(errors).length === 0) {
      const name = Name.toLowerCase();
      const Email = email.toLowerCase();
      registerUser(name, Email, password, confirmpassword, profileImage);
    }
  };

  const clearError = (fieldName) => {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: '',
    }));
  };

  return (
    <SafeAreaView style={{ padding: 20, flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ flex: 1, gap: 20, justifyContent: 'center' }}>
          <View>
            <Text style={{ fontSize: 32, fontWeight: '700', textAlign: 'center', color: '#6674CC' }}>Create Account</Text>
            <Text style={{ fontSize: 16, fontWeight: '400', textAlign: 'center', paddingHorizontal: 30 }}>create an account to practice aptitude test</Text>
          </View>
          <View style={{ gap: 20, justifyContent: 'center' }}>
            <View>
              <TextInput
                style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, fontSize: 16, fontWeight: '700' }}
                placeholder='Name'
                value={Name}
                onChangeText={(text) => { setName(text); clearError('name'); }}
              />
              {formErrors.name && <Text style={styles.error}>{formErrors.name}</Text>}
            </View>
            <View>
              <TextInput
                style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, fontSize: 16, fontWeight: '700' }}
                placeholder='Email'
                onChangeText={(text) => { setEmail(text); clearError('email'); }}
                value={email}
              />
              {formErrors.email && <Text style={styles.error}>{formErrors.email}</Text>}
            </View>
            <View>
              <View style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, display: 'flex', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                <TextInput
                  style={{ flex: 1, fontSize: 16, fontWeight: '700' }}
                  placeholder='Password'
                  onChangeText={(text) => { setPassword(text); clearError('password'); }}
                  value={password}
                  secureTextEntry={show}
                />
                <PasswordVisibilityToggle onPress={(data) => { setShow(data) }} />
              </View>
              {formErrors.password && <Text style={styles.error}>{formErrors.password}</Text>}
            </View>
            <View>
              <View style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, display: 'flex', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                <TextInput
                  style={{ flex: 1, fontSize: 16, fontWeight: '700' }}
                  placeholder='Confirm Password'
                  onChangeText={(text) => { setComfirmpassword(text); clearError('confirmpassword'); }}
                  value={confirmpassword}
                  secureTextEntry={showConfirm}
                />
                <PasswordVisibilityToggle onPress={(data) => { setShowConfirm(data) }} />
              </View>
              {formErrors.confirmpassword && <Text style={styles.error}>{formErrors.confirmpassword}</Text>}
            </View>
            <TouchableOpacity disabled={isLoading} style={{ backgroundColor: isLoading ? "#CCCCCC" : '#6674CC', padding: 15, borderRadius: 15, alignItems: 'center' }}
              onPress={handleRegister}>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.paragraphText}>Have an account? <Text onPress={() => navigate('SignIn')} style={{ color: '#6674CC' }}>Sign In</Text></Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  paragraphText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#a29ea6',
    marginLeft: 20,
    marginRight: 20,
    fontWeight: '600'
  },
  error: {
    color: 'red',
    marginLeft: 5,
    marginTop: 2
  },
});
