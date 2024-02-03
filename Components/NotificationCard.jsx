import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import TextSkeleton from './SkeletonComponents/TextSkeleton';
import ViewSkeleton from './SkeletonComponents/ViewSkeleton';


const NotificationCard = ({ title, description, image, isLoading }) => {
  return (
    <View style={styles.notificationCard}>
      <View style={styles.cardContent}>
        {
          isLoading ?
            <ViewSkeleton width={50} height={50} borderRadius={100}/>
            :
            <Image
              source={{ uri: image }}
              style={styles.cardImage}
              resizeMode="cover"
            />
        }

        <View style={styles.textContainer}>
          {
            isLoading ?
              <>
                <TextSkeleton width={'60%'} height={15} mb={4} />
                <TextSkeleton width={'100%'} height={12} mb={2} />
                <TextSkeleton width={'40%'} height={12}/>
              </>
              :
              <>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
              </>
          }
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  notificationCard: {
    borderRadius: 8,
    padding: 16,
    backgroundColor:'white',
    borderRadius:10
  },
  cardContent: {
    flexDirection: 'row',
    gap: 16,
  },
  cardImage: {
    width: 50,
    height: 50,
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