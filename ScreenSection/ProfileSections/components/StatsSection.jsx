import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StatsCard from './StatsCard';

const StatsSection = ({ userDetailsData }) => {

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

  // Slice the cardData array to get the first two elements
  const firstTwoCards = cardData.slice(0, 2);

  // Slice the cardData array to get the last two elements
  const lastTwoCards = cardData.slice(2);

  return (
    <View style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10, padding: 20 }}>
      <View style={{ flex: 0 }}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Stats</Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'col', gap: 10, justifyContent: 'space-evenly' }}>
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between',paddingHorizontal:10}}>
          {firstTwoCards.map((data, index) => (
            <StatsCard
              key={index}
              imageSource={data.imageSource}
              title={data.title}
              subtitle={data.subtitle}
            />
          ))}
        </View>
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between',paddingHorizontal:10}}>
          {lastTwoCards.map((data, index) => (
            <StatsCard
              key={index}
              imageSource={data.imageSource}
              title={data.title}
              subtitle={data.subtitle}
            />
          ))}
        </View>
      </View>
    </View>
  )
}

export default StatsSection

const styles = StyleSheet.create({

})
