import { ScrollView, StyleSheet, Text, View ,BackHandler, ToastAndroid } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Header from '../Components/Header';
import Banner from '../Components/Banner';

const HomeScreen = () => {
    const [exitApp, setExitApp] = useState(false);

    useEffect(() => {
      let backPressCount = 0;
      const backPressTimer = setTimeout(() => {
        backPressCount = 0;
      }, 2000); // Timeframe to count the second tap
  
      const handleBackPress = () => {
        if (exitApp) {
          clearTimeout(backPressTimer);
          BackHandler.exitApp(); // Exit app on the second tap
          return true;
        }
  
        ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
        backPressCount += 1;
        setExitApp(true);
  
        setTimeout(() => {
          setExitApp(false);
        }, 2000); // Timeframe to reset the double tap
  
        setTimeout(() => {
          backPressCount = 0;
        }, 2500); // Reset the counter if the time threshold exceeds
  
        return true;
      };
  
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
  
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
      };
    }, [exitApp]);
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <ScrollView>
                <View style={styles.content}>
                    <Header />
                    <Banner/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
});
