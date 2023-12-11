import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'


const ProfileScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <ScrollView>
        <View>
          <Text>ProfileScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default ProfileScreen

const styles = StyleSheet.create({})