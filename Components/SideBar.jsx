import React, { useRef, useEffect, useCallback } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, Animated, Dimensions, TouchableWithoutFeedback, Image } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useLogOut from '../Hooks/UserAuth/userLogOut';
const SideBar = ({ toggle, onClose, userDetails }) => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const animatedValue = useRef(new Animated.Value(-screenWidth)).current;

  const animateSidebar = (toValue) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const { logout } = useLogOut()

  const navigate = (route) => {
    onClose(false);
    setTimeout(() => {
      navigation.navigate(route); // Replace 'Profile' with your actual profile screen name
    }, 300);
  };

  const closeSidebar = () => {
    animateSidebar(-screenWidth);
    setTimeout(() => {
      onClose(false);
    }, 300);
  };

  useFocusEffect(
    useCallback(() => {
      if (toggle) {
        animateSidebar(0);
      } else {
        closeSidebar();
      }

      return () => {
        closeSidebar(); // Close the sidebar when the component unmounts
      };
    }, [toggle])
  );


  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('SignIn')
      console.log('AsyncStorage cleared successfully.');
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  };

  return (
    <Modal transparent={true} visible={toggle} onRequestClose={closeSidebar}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={closeSidebar}
        style={styles.modalOverlay}
      >
        <Animated.View
          style={[
            styles.sidebarContainer,
            {
              transform: [{ translateX: animatedValue }],
            },
          ]}
        >
          <View style={{ flex: 1, gap: 4, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#ddd', }}>
            <View style={{ paddingBottom: 10, display:'flex' , flexDirection:'row',gap:10 ,alignItems:'center' }}>
              <TouchableWithoutFeedback onPress={() => navigate('Profile')}>
                <View style={{}}>
                  <Image source={{ uri: userDetails?.profileImage }} style={{ width: 50, height: 50, borderRadius: 100 }} />
                </View>
              </TouchableWithoutFeedback>
              <View>
                <Text style={{ fontSize: 18, fontWeight: '700', color: '#152946', textTransform: 'capitalize' }}>{userDetails?.Name || 'Guest'}</Text>
                <Text style={{ fontSize: 14, fontWeight: '700', color: '#ccc' }} onPress={() => navigate('Profile')}>View profile</Text>
              </View>
            </View>
            <View style={{ borderTopWidth: 1, borderTopColor: '#ddd', gap: 6 }}>
              <TouchableOpacity onPress={() => navigate('Dashboard')} style={[styles.link, { marginTop: 10 }]}>
                <Image source={require('../assets/Dashboard.png')} style={{ width: 25, height: 25 }} />
                <Text style={styles.TextLink}>DashBoard</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate('Notifications')} style={styles.link}>
                <Ionicons name="notifications-outline" size={28} />
                <Text style={styles.TextLink}>Notifications</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigate('Settings')} style={styles.link}>
                <Ionicons name="md-settings-outline" size={28} />
                <Text style={styles.TextLink}>Settings</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 0 }}>
            <TouchableOpacity onPress={logout} style={[styles.link, { alignItems: 'center', display: 'flex', paddingBottom: 0 }]}>
              <Feather name="log-out" size={28} color="black" />
              <Text style={styles.TextLink}>Log out</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'flex-end',
  },
  sidebarContainer: {
    backgroundColor: '#ffffff',
    width: '70%',
    paddingVertical: 20,
    paddingHorizontal: 15,
    elevation: 5,
    flex: 1,
  },
  link: {
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    // backgroundColor:'#e9e9ff',
    borderRadius: 7,
    paddingLeft: 5,
  },
  TextLink: {
    fontSize: 18,
    fontWeight: '700'
  }
});

export default SideBar;
