import React, { useCallback, useEffect, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    BackHandler,
    ToastAndroid,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import CategorySelection from '../ScreenSection/CategorySection';
import RecommandedSection from '../ScreenSection/RecommandedSection';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import SideBar from '../Components/SideBar';
import usegetAsyncStorage from '../Hooks/UserAuth/getAsyncStorageDetails';
import useUserDetails from '../Hooks/UserAuth/userDetials';
import useInternetConnection from '../Hooks/Utiles/checkInternetConnection';
import OfflineScreen from '../Components/Home/OfflineScreen';


const HomeScreen = () => {
    const navigation = useNavigation();
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

    const { handleUserAuthinticate } = usegetAsyncStorage();
    const isConnected = useInternetConnection(); // Use the hook to get the internet connection status

    useFocusEffect(
        useCallback(() => {
            const getDetails = async () => {
                const userDetails = await handleUserAuthinticate();
                getUserDetails(userDetails._id);
            };
            getDetails();
        }, [])
    );
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            {
                !isConnected ?
                    <OfflineScreen />
                    :
                    <ScrollView>
                        <View style={styles.content}>
                            <Header onMenuPress={toggleSidebar} userDetails={userDetailsData} isLoading={isUserLoading} />
                            <Banner isLoading={isUserLoading} />
                            <CategorySelection isLoading={isUserLoading} />
                            <RecommandedSection isLoading={isUserLoading} />
                        </View>
                    </ScrollView>
            }
            {showSidebar && <SideBar toggle={showSidebar} onClose={(toogle) => setShowSidebar(toogle)} userDetails={userDetailsData} />}
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
