import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TestCard = ({ testData }) => {

  const navigation = useNavigation()
  const [categoryConverted , setCategoryConverted]=useState('')
  const { category, subtopic = "", difficulty } = testData;
  const difficultyColor = (data) => {
    switch (data) {
      case 'easy':
        return { backgroundColor: 'rgb(158, 255, 158)' };
      case 'medium':
        return { backgroundColor: 'rgb(253, 235, 100)' };
      case 'hard':
        return { backgroundColor: '#ff6f6f' };
      default:
        return { backgroundColor: '#f0f0f0' };
    }
  };

  const capitalize = (text) => {
    if (typeof text !== 'string') {
      return ''; // Return empty string if text is not a string
    }
    return text.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const categoryConverter=()=>{
    if(category==='Verbal'){
      setCategoryConverted('verbal');
    }
    else if(category==='Logical Reasoning'){
      setCategoryConverted('logical_reasoning')
    }
    else{
      setCategoryConverted(category)
    }
  } 

  useEffect(()=>{
    categoryConverter()
  },[])

  return (
    <>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Start Test', { category: categoryConverted, difficulty: difficulty, time: 20, })}
      >
        <View style={styles.categoryContainer}>
          <Text style={styles.title}>{category}</Text>
          <Text style={styles.subtopic}>{capitalize(subtopic)}</Text>
        </View>
        <View style={styles.levelContainer}>
          <Text style={[styles.difficulty, difficultyColor(testData.difficulty)]}>{difficulty}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    margin: 5,
    marginLeft: 0,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    borderRadius: 15,
    flex: 1
  },
  categoryContainer: {
    flex: 1,
    marginRight: 10,
  },
  levelContainer: {
    flex: 0
  },
  title: {
    fontSize: 18,
    fontWeight: '500'
  },
  subtopic: {
    fontSize: 14,
    fontWeight: '400',
    color: 'gray',
  },
  difficulty: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 4,
    overflow: 'hidden',
    textAlign: 'center',
    color: 'black',
  },
});

export default TestCard;
