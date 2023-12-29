import { ScrollView, StyleSheet, Text, View, BackHandler, ToastAndroid, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar, setStatusBarBackgroundColor } from 'expo-status-bar';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import CategorySelection from '../ScreenSection/CategorySection';
import RecommandedSection from '../ScreenSection/RecommandedSection';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect, useIsFocused, useRoute } from '@react-navigation/native';
import SideBar from '../Components/SideBar';
import usegetAsyncStorage from '../Hooks/UserAuth/getAsyncStorageDetails';
import useUserDetails from '../Hooks/UserAuth/userDetials';

const HomeScreen = () => {

    const navigation = useNavigation()
    const [lastBackPressed, setLastBackPressed] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false);
    const { data: userDetailsData, isUserLoading, getUserDetails, clear } = useUserDetails();
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };


    const handleBackPress = () => {
        const currentTime = new Date().getTime();

        if (currentTime - lastBackPressed < 2000) {
            BackHandler.exitApp();
            return true;
        }

        ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
        setLastBackPressed(currentTime);

        return true;
    };
    useFocusEffect(
        useCallback(() => {
            const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

            return () => backHandler.remove();
        }, [lastBackPressed]) // Update effect when lastBackPressed changes
    );

    const [userDetails, setUserDetails] = useState([])
    const { handleUserAuthinticate } = usegetAsyncStorage()
    useFocusEffect(
        useCallback(() => {
            const getDetails = async () => {
                const userDetails = await handleUserAuthinticate();
                getUserDetails(userDetails._id);
            }
            getDetails()
        }, [])
    )
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <ScrollView>
                <View style={styles.content}>
                    <Header onMenuPress={toggleSidebar} userDetails={userDetailsData} isLoading={isUserLoading}/>
                    <Banner isLoading={isUserLoading}/>
                    <CategorySelection isLoading={isUserLoading} />
                    <RecommandedSection isLoading={isUserLoading}/>
                    {/* <TouchableOpacity style={{ padding: 20, backgroundColor: 'blue' }} onPress={()=>navigation.navigate('SignIn')}>
                        <Text>go to login temp</Text>
                    </TouchableOpacity> */}
                </View>
            </ScrollView>
            {
                showSidebar &&
                <SideBar toggle={showSidebar} onClose={(toogle) => setShowSidebar(toogle)} userDetails={userDetailsData} />
            }
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f8fa',
    },
    content: {
        flex: 1,
    },
});
