import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; // Import necessary icons from Expo
import { Feather } from '@expo/vector-icons';
import BackButton from '../Components/BackButton';
import useLogOut from '../Hooks/UserAuth/userLogOut';
import useCustomNavigation from '../Hooks/Navigation/Navigate';
import CustomHeader from '../Components/CustomeHeader/CustomHeader';

const SettingsScreen = () => {

  const {navigate}=useCustomNavigation()
  const {logout} = useLogOut()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Header */}
        <CustomHeader title={'Settings'} flexValue={1.5}/>

        {/* Account section */}
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: '700' }}>Account</Text>
          {/* List of account options */}
          <View style={{ paddingLeft: 10 }}>
            <TouchableOpacity style={styles.optionContainer}>
            <Feather name="user" size={24} color="black" />
              <Text style={styles.iconText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionContainer} onPress={()=>navigate('Notifications')}>
            <Feather name="bell" size={24} color="black" />
              <Text style={styles.iconText}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionContainer}>
            <Feather name="lock" size={24} color="black" />
              <Text style={styles.iconText}>Privacy</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Cache section */}
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 20 }}>Cache</Text>
          <View style={{ paddingLeft: 10 }}>
            <TouchableOpacity style={styles.optionContainer}>
              <Feather name="trash" size={24} color="black" />
              <Text style={styles.iconText}>Clear Cache</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Actions section */}
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={{ fontSize: 20, fontWeight: '700', marginTop: 20 }}>Actions</Text>
          <View style={{ paddingLeft: 10 }}>
            <TouchableOpacity style={styles.optionContainer}>
              <Feather name="alert-triangle" size={24} color="black" />
              <Text style={styles.iconText}>Report a Problem</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionContainer} onPress={logout}>
              <Feather name="log-out" size={24} color="black" />
              <Text style={styles.iconText}>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 10,
    gap:20,
  },
  icon: {
    marginRight: 10,
  },
  iconText: {
    fontSize: 16,
    fontWeight: '700'
  }
});

export default SettingsScreen;
