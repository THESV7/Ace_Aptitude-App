import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
const TestScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <ScrollView>
        <View>
          <Text>TestScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default TestScreen

const styles = StyleSheet.create({})