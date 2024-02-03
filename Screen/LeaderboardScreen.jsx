import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import LeaderBoardCard from '../Components/LeaderBoardCard';
import useLeaderBoardDetails from '../Hooks/LeaderBoardDetails/LeaderBoardDetails';
import SkeletonLeaderBoardCard from '../Components/SkeletonComponents/SkeletonLeaderBoardCard';
import { useFocusEffect } from '@react-navigation/native';

const LeaderboardScreen = () => {

  const { responseData, error, isLoading, getLeaderBoardDetails,clearData } = useLeaderBoardDetails()
  useFocusEffect(
    useCallback(()=>{
      getLeaderBoardDetails()
      
      return clearData
    },[])
  )
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.Container}>
            <View style={{ flex: 1 }}>
              <View style={{ flex: 0 }}>
                <Text style={[styles.Heading]}>LeaderBoard</Text>
              </View>
              <View style={{ flex: 0, paddingVertical: 10}}>
                <ImageBackground
                  source={require('../assets/Leaderboard_Banner.png')}
                  style={styles.bannerContainer}
                  imageStyle={styles.bannerImage}
                >
                  <Text style={styles.bannerText}>
                    Master Rankings
                  </Text>
                  <Text style={styles.bannerDescription}>
                    Track your progress among
                  </Text>
                  <Text style={styles.bannerDescription}>
                    the elites.
                  </Text>
                </ImageBackground>
              </View>
              <Text style={[styles.subHeading]}>Top Students</Text>
              <View style={{ flex: 0 }}>
                {
                  isLoading ? (
                    // Render skeleton cards when isLoading is true
                    Array.from({ length: 10 }).map((_, index) => (
                      <SkeletonLeaderBoardCard key={index} />
                    ))
                  ) : (
                    // Render actual leaderboard cards when data is loaded
                    responseData?.map((details , index) => (
                      <LeaderBoardCard key={details.name} cardDetails={details} position={index+1}/>
                    ))
                  )
                }
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LeaderboardScreen;

const styles = StyleSheet.create({
  Heading: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 28,
  },
  subHeading: {
    fontWeight: '700',
    fontSize: 14,
    paddingBottom: 10
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
  },
  bannerContainer: {
    width: '100%',
    height: 140, // Adjust as needed
    borderRadius: 30, // Adjust the border radius as per your preference
    overflow: 'hidden', // Ensures the border radius is applied properly
  },
  bannerImage: {
    resizeMode: 'cover', // or 'contain', based on image requirements
  },
  bannerText: {
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingTop: 15,
    color: 'white'
  },
  bannerDescription: {
    fontSize: 18,
    fontWeight: '400',
    paddingHorizontal: 20,
    color: 'white',
  }
});
