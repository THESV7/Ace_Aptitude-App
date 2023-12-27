import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../Components/CustomeHeader/CustomHeader';
import NotificationCard from '../Components/NotificationCard';
// const NotificationCard = ({ title, description, image }) => {
//   return (
//     <View style={styles.notificationCard}>
//       <View style={styles.cardContent}>
//         <Image
//           source={image}
//           style={styles.cardImage}
//           resizeMode="cover"
//         />
//         <View style={styles.textContainer}>
//           <Text style={styles.title}>{title}</Text>
//           <Text style={styles.description}>{description}</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

const NotificationScreen = () => {
  const notifications = [
    {
      id: 1,
      title: 'Earned Gold Star!',
      description: 'Congratulations! You’ve earned a gold star for your exceptional performance.',
      image: require('../assets/Gold_Star.png'),
    },
    {
      id: 2,
      title: 'Achieved High Accuracy',
      description: 'Your recent work showed outstanding accuracy. Keep it up!',
      image: require('../assets/Accuracy.png'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={'Notification'} flexValue={2} />
      <View style={styles.notificationContainer}>
        {notifications.map((notification) => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            description={notification.description}
            image={notification.image}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f8fa',
  },
  notificationContainer: {
    flex: 1,
    paddingHorizontal: 16,
    // paddingTop: 16,
    gap: 10,
  },
});

export default NotificationScreen;
