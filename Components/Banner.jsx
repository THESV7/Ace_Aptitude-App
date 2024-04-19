import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import BannerImg from '../assets/Banner_img.png'
import ViewSkeleton from '../Components/SkeletonComponents/ViewSkeleton'
const Banner = ({ isLoading }) => {
  return (
    <>
      {
        isLoading ?
          <View style={{marginHorizontal:20}}>
            <ViewSkeleton height={150} width={'100%'} />
          </View>
          :
          <View style={{ padding: 20, backgroundColor: '#6674CC', borderRadius: 30, flex: 1, gap: 10, marginHorizontal: 20 }}>
            <Image source={BannerImg} style={{ width: 200, height: 200, position: 'absolute', right: '0%', top: '-30%' }} />
            <View>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: '900' }}>You don't know </Text>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: '900' }}>where to Start?</Text>
            </View>
            <TextInput
              style={{ paddingHorizontal: 20, paddingVertical: 15, backgroundColor: 'white', borderRadius: 50, elevation: 4, fontSize: 16, fontWeight: '700' }}
              placeholder='Search Roadmap'
            />
          </View>
      }
    </>
  )
}

export default Banner

const styles = StyleSheet.create({})