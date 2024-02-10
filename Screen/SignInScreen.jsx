import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import useUserLogin from '../Hooks/UserAuth/userLogin';
import useCustomNavigation from '../Hooks/Navigation/Navigate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import PasswordVisibilityToggle from '../Components/PasswordVisibilityToggle';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { responseData, isLoading, error, clearData, userLogin } = useUserLogin()
  const { navigate } = useCustomNavigation()
  const [show, setShow] = useState(true)

  const handleStoreData = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(responseData.user))
      console.log('Successfully Logined')
    } catch (error) {
      console.log("Error", error)
    }
  }

  const handleSignIn = async () => {
    const Email = email.toLowerCase()
    await userLogin(Email, password)
  }

  useEffect(() => {
    if (!isLoading && responseData) {
      handleStoreData()
      navigate('Tabs')
    }
  }, [isLoading, responseData])



  return (
    <SafeAreaView style={{ padding: 20, flex: 1, backgroundColor: 'white', justifyContent: 'center' }}>
      <View style={{ flex: 1 }}>
        <Image source={require('../assets/Login2Banner.png')} resizeMode='contain' style={{ flex: 1, height: '100%', width: '100%' }} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ gap: 20, justifyContent: 'center' }}>
          <View>
            <Text style={{ fontSize: 32, fontWeight: '700', textAlign: 'center', color: '#6674CC' }}>Login</Text>
            <Text style={{ fontSize: 16, fontWeight: '400', textAlign: 'center', paddingHorizontal: 30 }}>Welcome back! Login to your account</Text>
          </View>
          <View style={{ gap: 18, justifyContent: 'center' }}>
            <TextInput
              style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, fontSize: 16, fontWeight: '700' }}
              placeholder='Email'
              onChangeText={setEmail}
              value={email}
            />
            <View>
              <View style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, display: 'flex', flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                <TextInput
                  style={{ flex: 1, fontSize: 16, fontWeight: '700', }}
                  placeholder='Password'
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={show}
                />
                {/* {
                <PasswordVisibilityToggle onPress={(data)=> {setShow(data)}}/>
              } */}
              </View>
              <Text onPress={()=> navigate('forgetPassword')} style={{textAlign:'right',marginTop:8,fontWeight: '600',color:'#a29ea6',fontSize:14}}>Forget password?</Text>
            </View>
            <TouchableOpacity disabled={isLoading} style={{ backgroundColor: isLoading ? "#CCCCCC" : '#6674CC', padding: 15, borderRadius: 15, alignItems: 'center' }}
              onPress={handleSignIn}>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 16 }}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.paragraphText}>Don't have an account? <Text onPress={() => navigate('SignUp')} style={{ color: '#6674CC' }}>Sign Up</Text></Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen

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
