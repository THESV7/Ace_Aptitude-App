import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useUserRegistration from '../Hooks/UserAuth/UserRegister'
import SuccessfulModal from '../Components/SuccessfulModal'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useCustomNavigation from '../Hooks/Navigation/Navigate'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {

  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setComfirmpassword] = useState('');
  const [profileImage, setProfileImage] = useState('https://tse2.mm.bing.net/th?id=OIP.y5mF55TfUAReTXVp9kGY0AHaHa&pid=Api&P=0&h=180')
  const { responseData, error, isLoading, registerUser } = useUserRegistration()
  const navigation = useNavigation()
  const { navigate } = useCustomNavigation()
  const handleStoreData = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(responseData.user))
      console.log('Successfully saved')
    } catch (error) {
      console.log("Error", error)
    }
  }
  useEffect(() => {
    if (!isLoading && responseData) {
      handleStoreData()
      navigation.navigate('OtpVerify',{email:email})
    }
  }, [responseData, isLoading]);

  const handleRegister = () => {
    const name = Name.toLowerCase()
    const Email = email.toLowerCase()
    registerUser(name, Email, password, confirmpassword, profileImage)
  }
  return (
    <SafeAreaView style={{ padding: 20, flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ flex: 1, gap: 20, justifyContent: 'center' }}>
          <View >
            <Text style={{ fontSize: 32, fontWeight: '700', textAlign: 'center', color: '#6674CC' }}>Create Account</Text>
            <Text style={{ fontSize: 16, fontWeight: '400', textAlign: 'center', paddingHorizontal: 30 }}>create an account to practice aptitude test</Text>
          </View>
          <View style={{ gap: 20, justifyContent: 'center' }}>
            <TextInput
              style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, fontSize: 16, fontWeight: '700' }}
              placeholder='Name'
              value={Name}
              onChangeText={setName}
            />
            <TextInput
              style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, fontSize: 16, fontWeight: '700' }}
              placeholder='Email'
              onChangeText={setEmail}
              value={email}
            />
            <TextInput
              style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, fontSize: 16, fontWeight: '700' }}
              placeholder='Password'
              onChangeText={setPassword}
              value={password}
              secureTextEntry={true}
            />
            <TextInput
              style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, fontSize: 16, fontWeight: '700' }}
              placeholder='Confirm Password'
              onChangeText={setComfirmpassword}
              value={confirmpassword}
              secureTextEntry={true}
            />
            <TouchableOpacity style={{ backgroundColor: '#6674CC', padding: 15, borderRadius: 15, alignItems: 'center' }}
              onPress={handleRegister}>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>Register</Text>
            </TouchableOpacity>
            <Text style={styles.paragraphText}>Have an account? <Text onPress={() => navigate('SignIn')} style={{ color: '#6674CC' }}>Sign In</Text></Text>
          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  paragraphText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#a29ea6',
    marginLeft: 20,
    marginRight: 20,
    fontWeight: '600'
  },
})
