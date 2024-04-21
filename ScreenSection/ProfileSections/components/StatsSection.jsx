import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StatsCard from './StatsCard';

const StatsSection = ({userDetailsData}) => {

  const cardData = [
    {
      imageSource: require('../../../assets/Accuracy.png'),
      title: userDetailsData?.numofTests,
      subtitle: 'Tests Taken',
    },
    {
      imageSource: require('../../../assets/Leaderboard.png'),
      title: '#2',
      subtitle: 'Leaderboard',
    },
    {
      imageSource: require('../../../assets/coinThender.png'),
      title: userDetailsData?.coins,
      subtitle: 'Coins',
    },
    {
      imageSource: require('../../../assets/Performance.png'),
      title: '40%',
      subtitle: 'Performance',
    },
  ];

  return (
    <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, padding: 20 }}>
      <View style={{ flex: 0 }}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Stats</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', gap: 10, flexWrap: 'wrap',justifyContent:'space-evenly'}}>
        {cardData.map((data, index) => (
          <StatsCard
            key={index}
            imageSource={data.imageSource}
            title={data.title}
            subtitle={data.subtitle}
          />
        ))}
      </View>
    </View>
  )
}

export default StatsSection

const styles = StyleSheet.create({
  
})
