import React, { useState, useRef, useCallback } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../Components/BackButton';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import useVerifyOtp from '../Hooks/UserAuth/verifyOtp';
import SuccessfulModal from '../Components/SuccessfulModal';

const VerifyOtpScreen = () => {
  const route = useRoute()
  const {email}=route.params
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isVisible, setIsVisible] = useState(false)
  const inputRefs = useRef([...Array(4)].map(() => React.createRef()));
  const navigation = useNavigation();
  const { loading, error, success, verifyOtp } = useVerifyOtp();

  useFocusEffect(
    useCallback(()=>{
      if(!loading && success){
        setIsVisible(true)
      }
    },[loading,success])
  )
  const focusNextInput = (index) => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    // console.log(email,enteredOtp)
    verifyOtp(email,enteredOtp)
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{padding:20}}>
          <BackButton route={'SignUp'} />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Enter 4-digit code</Text>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={[
                  styles.otpBox,
                  {
                    borderColor: digit ? '#6674cc' : 'transparent', // Change border color based on digit presence
                  },
                ]}
                value={digit}
                onChangeText={(text) => {
                  const newOtp = [...otp];
                  newOtp[index] = text;
                  setOtp(newOtp);
                  if (text !== '' && index < inputRefs.current.length - 1) {
                    focusNextInput(index);
                  }
                }}
                maxLength={1}
                keyboardType="numeric"
              />
            ))}
          </View>
          <TouchableOpacity onPress={handleVerify} style={styles.verifyButton}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
        <SuccessfulModal visibility={isVisible} onClose={()=>setIsVisible(false)}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 30,
    paddingBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 40,
  },
  otpBox: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: '#6674cc',
    backgroundColor: '#ffff',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginRight: 10,
    color:"#6674cc"
  },
  verifyButton: {
    padding: 20,
    borderRadius: 40,
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#6674cc',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerifyOtpScreen;
