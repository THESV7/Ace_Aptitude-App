import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const LeaderboardScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <ScrollView>
        <View>
          <Text>LeaderboardScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default LeaderboardScreen

const styles = StyleSheet.create({})