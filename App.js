import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from './Screen/WelcomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './Screen/HomeScreen'
import TestScreen from './Screen/TestScreen'
import LeaderboardScreen from './Screen/LeaderboardScreen'
import ProfileScreen from './Screen/ProfileScreen'
import SignUpScreen from './Screen/SignUpScreen'
import SignInScreen from './Screen/SignInScreen'
const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

import { Foundation, Ionicons, MaterialCommunityIcons, Entypo, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import OnboardingScreen from './Screen/OnboardingScreen'
import DashBoardScreen from './Screen/DashBoardScreen'
import SettingsScreen from './Screen/SettingsScreen'
import EditProfileScreen from './Screen/EditProfileScreen'
import NotificationScreen from './Screen/NotificationScreen'
import PrivacyScreen from './Screen/PrivacyPolicyScreen'
import ReportProblemScreen from './Screen/ReportProblemScreen'
import VerifyOtpScreen from './Screen/VerifyOtpScreen'
import StartTestScreen from './Screen/StartTestScreen'
import QuesionsScreen from './Screen/QuesionsScreen'
import ScoreScreen from './Screen/ScoreScreen'
import ForgetScreen from './Screen/ForgetScreen'
import PasswordReset from './Screen/PasswordReset'
import ToastManager from 'toastify-react-native'
import RoadMapScreen from './Screen/RoadMapScreen/RoadMapScreen'
const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'>
          <Stack.Screen name='Welcome' component={WelcomeScreen} />
          <Stack.Screen name='Onboarding' component={OnboardingScreen} />
          <Stack.Screen name='SignUp' component={SignUpScreen} />
          <Stack.Screen name='OtpVerify' component={VerifyOtpScreen} />
          <Stack.Screen name='SignIn' component={SignInScreen} />
          <Stack.Screen name='forgetPassword' component={ForgetScreen} />
          <Stack.Screen name='passwordReset' component={PasswordReset} />
          <Stack.Screen name='Tabs' component={TabNavigator}/>
          <Stack.Screen name='Start Test' component={StartTestScreen} />
          <Stack.Screen name='Question Solving' component={QuesionsScreen} />
          <Stack.Screen name='Score' component={ScoreScreen} />
          <Stack.Screen name='Dashboard' component={DashBoardScreen} />
          <Stack.Screen name='Settings' component={SettingsScreen} />
          <Stack.Screen name='Edit Profile' component={EditProfileScreen} />
          <Stack.Screen name='Notifications' component={NotificationScreen} />
          <Stack.Screen name='Privacy Policy' component={PrivacyScreen} />
          <Stack.Screen name='Report' component={ReportProblemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <ToastManager />
    </>
  )
}


const CustomRoadMapButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        bottom: '10%',
        // right:'5%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 35,
          backgroundColor: '#6674cc',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
      <FontAwesome5 name="sitemap" size={26} color="white" />
      </View>
    </TouchableOpacity>
  )
}
const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabelStyle: {
            textAlign: 'center',
            fontSize: 14,
            marginBottom: 10,
          },
          tabBarStyle: {
            height: 70,
            elevation: 4,
            paddingVertical: 10,
            // borderTopRightRadius:40,
            // borderTopLeftRadius:40,
            borderRadius: 20,
            position: 'absolute',
            marginHorizontal: 4,
            bottom: 10,
          },
          tabBarHideOnKeyboard: true,
          tabBarInactiveTintColor: '#C4C4C4',
          tabBarActiveTintColor: '#6674CC',
          
        }}>
        <Tab.Screen name='Home' component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View><Foundation name="home" size={28} color={focused ? '#6674CC' : '#C4C4C4'} /></View>
              )
            },
          }} />
        <Tab.Screen name='Test' component={TestScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View><Entypo name="new-message" size={24} color={focused ? '#6674CC' : '#C4C4C4'} /></View>
              )
            }
          }} />
        <Tab.Screen name='RoadMap' component={RoadMapScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <></>
              )
            },
            tabBarButton: (props) => (
              <CustomRoadMapButton {...props} />
            )
          }} />
        <Tab.Screen name='LeaderBoard' component={LeaderboardScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View><MaterialIcons name="leaderboard" size={28} color={focused ? '#6674CC' : '#C4C4C4'} /></View>
              )
            }
          }} />
        <Tab.Screen name='Profile' component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View><FontAwesome5 name="user-alt" size={24} color={focused ? '#6674CC' : '#C4C4C4'} /></View>
              )
            }
          }} />
      </Tab.Navigator>
    </>
  )
}
export default App

const styles = StyleSheet.create({})