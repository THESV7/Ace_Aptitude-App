import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { StatusBar } from 'expo-status-bar';
import Onboarding_1 from '../assets/Onboarding_1.png';
import Onboarding_2 from '../assets/Onboarding_2.png';
import Onboarding_3 from '../assets/Onboarding_4.png';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomNextButton = ({ ...props }) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>Next</Text>
  </TouchableOpacity>
);

const CustomSkipButton = ({ ...props }) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>Skip</Text>
  </TouchableOpacity>
);


const CustomDoneButton = ({ ...props }) => (
  <TouchableOpacity style={styles.doneButton} onPress={props.onPress}>
    <Ionicons name="checkmark-circle" size={60} color="white"/>
  </TouchableOpacity>
);


const OnboardingScreen = () => {

  const navigation = useNavigation()
  const handleDone = () => {
    navigation.navigate('Tabs')
  }
  const handleSkip = () =>{
    navigation.navigate('Tabs')
  }
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Onboarding
        NextButtonComponent={CustomNextButton}
        SkipButtonComponent={CustomSkipButton}
        DoneButtonComponent={CustomDoneButton}
        onDone={handleDone}
        onSkip={handleSkip}
        bottomBarHighlight={false}
        imageContainerStyles={{
          width: 300,
          height: 500,
        }}
        pages={[
          {
            backgroundColor: '#7b78fc',
            image: (
              <View style={styles.imgContainer}>
                <Image source={Onboarding_1} style={{
                  width: 300,
                  height: 500,
                  resizeMode: 'contain'
                }} />
              </View>
            ),
            title: 'Unlock Your Potential"',
            subtitle: 'Master Aptitude for Success',
            titleStyles: {
              fontSize: 30,
              fontWeight: '700',
            },
            subTitleStyles: {
              fontWeight: '600',
            }
          },
          {
            backgroundColor: '#f89f93',
            image: (
              <View style={styles.imgContainer}>
                <Image source={Onboarding_2} style={{
                  width: 300,
                  height: 500,
                  resizeMode: 'contain'
                }} />
              </View>
            ),
            title: 'Rise Above the Rest',
            subtitle: 'Challenge, Compete, and Conquer Aptitude',
            titleStyles: {
              fontSize: 30,
              fontWeight: '700',
            },
            subTitleStyles: {
              fontWeight: '600',
            }
          },
          {
            backgroundColor: '#4285fa',
            image: (
              <View style={styles.imgContainer}>
                <Image source={Onboarding_3} style={{
                  width: 300,
                  height: 500,
                  resizeMode: 'contain'
                }} />
              </View>
            ),
            title: 'Structured Learning',
            subtitle: 'Explore Sorted Categories, Effortless Searching',
            titleStyles: {
              fontSize: 30,
              fontWeight: '700',
            },
            subTitleStyles: {
              fontWeight: '600',
            }
          },

        ]}
      />
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imgContainer: {
    width: 300,
    height: 500,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#e9e9ff',
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  doneButton:{
    position:'absolute',
    bottom:-20,
    right:10
  }
})