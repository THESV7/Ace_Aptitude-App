import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Banner = () => {
  return (
    <View style={{ padding: 20, backgroundColor: '#6674CC', borderRadius: 30, flex: 1 ,gap:10}}>
      <View>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '900' }}>You don't know </Text>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '900' }}>where to Start?</Text>
      </View>
      <TextInput
        style={{ paddingHorizontal: 20,paddingVertical:15, backgroundColor: 'white',borderRadius:50 ,elevation:10,fontSize:16,fontWeight:'700'}}
        placeholder='Test your Aptitude'
        lef
      />
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({})