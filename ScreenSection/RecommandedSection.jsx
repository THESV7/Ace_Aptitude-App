import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RecommandedCard from '../Components/RecommandedCard'
import Category1 from '../assets/CategoryImg(1).png'
import Category2 from '../assets/CategoryImg(2).png'
import Category3 from '../assets/CategoryImg(3).png'
import Category4 from '../assets/CategoryImg(4).png'
import TextSkeleton from '../Components/SkeletonComponents/TextSkeleton'
const RecommandedSection = ({ isLoading }) => {

  const recommdedData = [
    {
      categoryName: 'Coding Odyssey',
      description: 'Unleash your coding prowess and craft innovative solutions.',
      icon: Category2,
      bgColor: '#4285fa',
    },
    {
      categoryName: 'Adventure',
      description: 'Embark on thrilling quests and discover new worlds full of excitement.',
      icon: Category3,
      bgColor: '#7b78fc',
    },
    {
      categoryName: 'Language Voyage',
      description: 'Journey through languages and master the art of eloquence.',
      icon: Category1,
      bgColor: '#f89f93',
    },
    {
      categoryName: 'Puzzle Quest',
      description: 'Sharpen your mind with perplexing puzzles and challenging riddles.',
      icon: Category4,
      bgColor: '#43536b',
    },
  ]
  return (
    <View style={{ paddingVertical: 10, flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
        {
          isLoading ?
            <View style={{ marginHorizontal: 20 }}>
              <TextSkeleton width={150} height={18}/>
            </View>
            :
            <Text style={{ fontSize: 18, fontWeight: '700', marginHorizontal: 20 }}>Recommanded</Text>
        }
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          recommdedData.map((data) =>
            <RecommandedCard key={data.categoryName} recommdedData={data} isLoading={isLoading}/>
          )
        }
      </ScrollView>
    </View>
  )
}

export default RecommandedSection

const styles = StyleSheet.create({})