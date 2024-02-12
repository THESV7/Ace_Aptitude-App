import { StyleSheet, Text, TextInput, Touchable, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../Components/CustomeHeader/CustomHeader'
import Button from '../Components/Button'
import useForgetPassword from '../Hooks/UserAuth/forgetPassword'
import { useNavigation } from '@react-navigation/native'

const ForgetScreen = () => {
    const [email, setEmail] = useState('');
    const { responseData, isLoading, error, clearData, forgetPassword } = useForgetPassword()
    const navigation = useNavigation()

    const handleEmailSubmit = async () => {
        forgetPassword(email.toLowerCase());
    }

    useEffect(() => {
        if (!isLoading && responseData?.success==true) {
            navigation.navigate('OtpVerify', { email , purpose:'passwordReset' })
        }
    }, [isLoading])
    return (
        <SafeAreaView style={{ flex: 1 ,backgroundColor: 'white'}}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0 }}>
                    <CustomHeader title={'Verification'} flexValue={2} />
                </View>
                <View style={{ flex: 1, paddingHorizontal: 25, gap: 20 }}>
                    <View style={{ flex: 0, gap: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: '500', color: '#8b8b8a' }}>Enter your Email to enable the 2-step verification</Text>
                        <Text style={{ fontSize: 24, fontWeight: '700' }}>Enter your Email</Text>
                    </View>
                    <View style={{ flex: 0, gap: 25 }}>
                        {/* <Text style={{ fontSize: 16, fontWeight: '500', color: '#8b8b8a',marginLeft:4 }}>Email</Text> */}
                        <TextInput
                            style={{ elevation: 1, paddingHorizontal: 15, paddingVertical: 15, backgroundColor: '#e9e9ff', borderRadius: 15, fontSize: 16, fontWeight: '700' }}
                            placeholder='example@gmail.com'
                            onChangeText={setEmail}
                            value={email}
                        />

                        <Button buttonText={'Continue'} w={'100%'} onPress={()=>handleEmailSubmit()}/>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default ForgetScreen

const styles = StyleSheet.create({})