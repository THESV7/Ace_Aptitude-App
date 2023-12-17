import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useRoute } from '@react-navigation/native'
import BackButton from '../Components/BackButton'
import TestModeButton from '../Components/TestModeButton'
import PracticeSection from '../ScreenSection/PracticeSection'
import MockTestSection from '../ScreenSection/MockTestSection'
const TestScreen = () => {

  // const route = useRoute()
  // const { selectedCategory } = route.params;

  // useEffect(()=>{
  //   console.log(selectedCategory)
  // },[selectedCategory])

  const [activeButton, setActiveButton] = useState('Practice');

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
  };
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar style='auto' />
      <ScrollView style={styles.ScrollView}>
        <View style={styles.MainContainer}>
          {/* <View style={styles.header}>
            <BackButton />
          </View> */}
          <View style={styles.TestContainer}>
            <TestModeButton activeButton={activeButton} onPress={handleButtonPress}/>
            {activeButton && activeButton=='Practice' && <PracticeSection/>}
            {activeButton && activeButton=='Mock Test' && <MockTestSection/>}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TestScreen

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
  },
  ScrollView: {
    flex: 1
  },
  MainContainer: {
    flex: 1
  },
  header: {
    flex: 1
  },
  TestContainer: {
    flex: 6,
    padding: 20
  }
})