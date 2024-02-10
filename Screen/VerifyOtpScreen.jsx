import React, { useState, useRef, useCallback, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '../Components/BackButton';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import useVerifyOtp from '../Hooks/UserAuth/verifyOtp';
import SuccessfulModal from '../Components/SuccessfulModal';
import useResendOTP from '../Hooks/UserAuth/resendOtp';

const VerifyOtpScreen = () => {
  const route = useRoute();
  const { email, purpose } = route.params;
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isVisible, setIsVisible] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(60); // Initial timer value
  const inputRefs = useRef([...Array(4)].map(() => React.createRef()));
  const navigation = useNavigation();
  const { loading, error, success, verifyOtp, clear } = useVerifyOtp();
  const { loading: resendLoading, error: resendError, message, resendOTP } = useResendOTP(); // Use the useResendOTP hook


  // Timer effect to decrement timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer === 0 ? 0 : prevTimer - 1));
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Effect to enable resend button when timer expires
  useEffect(() => {
    if (timer === 0) {
      setResendDisabled(false);
    }
  }, [timer]);

  useFocusEffect(
    useCallback(() => {
      if (!loading && success && purpose) {
        navigation.navigate('passwordReset', { email });
      } else if (!loading && success && !purpose) {
        setIsVisible(true);
      }

      return () => {
        clear();
        setOtp(['', '', '', '']);
      };
    }, [loading, success])
  );

  const focusNextInput = (index) => {
    if (index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    verifyOtp(email, enteredOtp, purpose);
  };

  const handleResendOtp = () => {
    // You might trigger the resend OTP logic here
    setResendDisabled(true);
    setTimer(60); // Reset timer
    setTimeout(() => {
      setResendDisabled(false);
    }, 60000);
    resendOTP(email)
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        <View style={{ padding: 20 }}>
          <BackButton route={'SignUp'} />
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Enter 4-digit code</Text>
            {resendDisabled && (
              <Text style={{ fontSize: 16, fontWeight: '700', color: '#6674cc', textAlign: 'center' }}>
                {timer}s
              </Text>
            )}
          </View>
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
          <Text style={{ textAlign: 'center', fontSize: 16, color: '#a29ea6', fontWeight: '500' }}>
            Don't receive the OTP ?{' '}
            <Text
              style={{ fontSize: 16, fontWeight: '700', color: resendDisabled ? '#ccc' : '#6674cc' }}
              onPress={handleResendOtp}
              disabled={resendDisabled}
            >
              Resend OTP
            </Text>
          </Text>
          <TouchableOpacity onPress={handleVerify} style={styles.verifyButton}>
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
        <SuccessfulModal visibility={isVisible} onClose={() => setIsVisible(false)} />
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
    paddingBottom: 20,
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
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginRight: 10,
    color: '#6674cc',
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
