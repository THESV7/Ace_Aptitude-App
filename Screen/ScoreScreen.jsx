import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import Animated, {
  useSharedValue,
  withSpring,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Button from '../Components/Button';
import ResultModal from '../Components/ResultModal';

const ScoreScreen = () => {
  const route = useRoute();
  const { score, results } = route.params;
  const navigation = useNavigation()
  const [toggleResultModal, setToggleResultModal] = useState(false)
  // Shared values for animations
  const translateY = useSharedValue(100);
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.5);

  // Animated styles
  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: withSpring(translateY.value) }],
      opacity: withTiming(opacity.value),
      scale: withTiming(scale.value),
    };
  });

  const animatedMessageStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value),
      transform: [{ translateY: withSpring(translateY.value) }],
    };
  });

  const animatedScoreStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value),
    };
  });

  useEffect(() => {
    // Trigger animations when the component mounts
    translateY.value = 0;
    opacity.value = 1;
    scale.value = 1;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* Centered Image with Animation */}
      <Animated.View style={[styles.centeredContainer, animatedImageStyle]}>
        <Image
          source={require('../assets/trophy_2.png')}
          style={styles.centeredImage}
        />
      </Animated.View>

      {/* Message with Animation */}
      <Animated.View style={[styles.messageContainer, animatedMessageStyle]}>
        <Text style={styles.messageText}>Congratulations</Text>
        <Text style={styles.messageText}>You scored</Text>
      </Animated.View>

      {/* Score with Animation */}
      <Animated.View style={[styles.scoreContainer, animatedScoreStyle]}>
        <Text style={styles.scoreText}>{score}</Text>
      </Animated.View>

      <View style={{ display: 'flex', flexDirection: "row", gap: 10 }}>
        <Button buttonText={'View Result'} onPress={() => setToggleResultModal(true)} />
        <Button buttonText={'Prartice'} onPress={() => navigation.navigate('Tabs')} />
      </View>
      {
        toggleResultModal &&
        <ResultModal visibility={toggleResultModal} resultData={results} OnClose={() => setToggleResultModal(false)} />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  centeredImage: {
    width: 280,
    height: 280,
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  messageText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 10
  },
  scoreText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6674cc', // Choose a color for the score
  },
});

export default ScoreScreen;
