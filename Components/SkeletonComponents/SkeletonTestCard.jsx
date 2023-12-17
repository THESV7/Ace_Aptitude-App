import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const SkeletonTestCard = ({ count }) => {
  const animatedValues = React.useRef([...Array(count)].map(() => new Animated.Value(0)));

  React.useEffect(() => {
    animatedValues.current.forEach((value, index) => {
      const animation = Animated.loop(
        Animated.timing(value, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          isInteraction: false,
          delay: 200, // Add a delay to stagger the animation
        })
      );

      animation.start();

      return () => {
        animation.stop();
      };
    });
  }, [animatedValues, count]);

  const placeholders = animatedValues.current.map((value, index) => {
    const backgroundColor = value.interpolate({
      inputRange: [0, 1],
      outputRange: ['#E0E0E0', '#FFFFFF'],
    });

    return (
      <View key={index} style={styles.card}>
        <View style={styles.categoryContainer}>
          <Animated.View
            style={[
              styles.placeholder,
              { width: '80%', height: 20, marginBottom: 6, backgroundColor },
            ]}
          />
          <Animated.View
            style={[
              styles.placeholder,
              { width: '50%', height: 16, backgroundColor },
            ]}
          />
        </View>
        <View style={styles.levelContainer}>
          <Animated.View
            style={[
              styles.placeholder,
              { width: 60, height: 24, borderRadius: 4, backgroundColor },
            ]}
          />
        </View>
      </View>
    );
  });

  return <>{placeholders}</>;
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
    flex: 1,
  },
  categoryContainer: {
    flex: 1,
    marginRight: 10,
  },
  levelContainer: {
    flex: 0,
  },
  placeholder: {
    marginBottom: 6,
    borderRadius: 4,
  },
});

export default SkeletonTestCard;
