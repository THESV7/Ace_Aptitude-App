import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../Button';

const OfflineScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/offline_1.png')} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.message}>
        Oops! It seems like you're not connected to the internet.
      </Text>
      <Button buttonText={'Retry'} />
    </View>
  );
};

export default OfflineScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250, // Adjust the width as needed
    height: 250, // Adjust the height as needed
  },
  message: {
    fontSize: 16,
    fontWeight:'700',
    textAlign: 'center',
    marginVertical: 20,
    color: '#777', // Use your desired text color
  },
});
