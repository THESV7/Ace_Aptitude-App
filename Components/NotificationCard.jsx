import React from 'react';
import {Text, View, Image, StyleSheet } from 'react-native';


const NotificationCard = ({ title, description, image }) => {
  return (
    <View style={styles.notificationCard}>
      <View style={styles.cardContent}>
        <Image
          source={image}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    notificationCard: {
      borderRadius: 8,
      padding: 16,
    },
    cardContent: {
      flexDirection: 'row',
      gap: 16,
    },
    cardImage: {
      width: 40,
      height: 40,
      borderRadius: 30,
      marginTop: 2
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    description: {
      fontSize: 14,
      color: '#555555',
    },
  });

export default NotificationCard;