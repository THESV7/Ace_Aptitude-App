import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../Components/CustomeHeader/CustomHeader'

const NotificationScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <CustomHeader title={'Notification'} flexValue={2}/>
      </View>
    </SafeAreaView>
  )
}

export default NotificationScreen

const styles = StyleSheet.create({})