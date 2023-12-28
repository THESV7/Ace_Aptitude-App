import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const TextSkeleton = ({ width ,height }) => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const skeletonStyle = {
    backgroundColor: animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['#E0E0E0', '#f7f8fa'],
    }),
    width, // Utilizing the width prop here
    height: height || 25,
    marginBottom: 10,
    borderRadius: 5,
  };

  return (
      <Animated.View style={[styles.skeletonText, skeletonStyle ]} />
  );
};

const styles = StyleSheet.create({
  // container: {
  //   alignItems:'center',
  //   justifyContent:'center',
  //   paddingHorizontal: 20,
  // },
  skeletonText: {
    marginBottom: 10,
  },
});

export default TextSkeleton;
