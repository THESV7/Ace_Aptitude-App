import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TestCard = ({ testData }) => {

  const navigation = useNavigation()
  const { category, subtopic, difficulty } = testData
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

  return (
    <>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Start Test', { category: category , difficulty:difficulty , time:20 ,  })}
      >
        <View style={styles.categoryContainer}>
          <Text style={styles.title}>{testData.category}</Text>
          <Text style={styles.subtopic}>Demo</Text>
        </View>
        <View style={styles.levelContainer}>
          <Text style={[styles.difficulty, difficultyColor(testData.difficulty)]}>{testData.difficulty}</Text>
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
    color: 'gray'
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
