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

const HomeScreen = () => {

    const navigation = useNavigation()
    const [lastBackPressed, setLastBackPressed] = useState(0);
    const [showSidebar, setShowSidebar] = useState(false);

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
                setUserDetails(userDetails)
            }
            getDetails()
        }, [])
    )

    const clearAsyncStorage = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('SignUp')
            console.log('AsyncStorage cleared successfully.');
        } catch (error) {
            console.error('Error clearing AsyncStorage:', error);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <ScrollView>
                <View style={styles.content}>
                    <Header onMenuPress={toggleSidebar} userDetails={userDetails}/>
                    <Banner />
                    <CategorySelection />
                    <RecommandedSection />
                    {/* <TouchableOpacity style={{ padding: 20, backgroundColor: 'blue' }} onPress={()=>navigation.navigate('SignIn')}>
                        <Text>go to login temp</Text>
                    </TouchableOpacity> */}
                </View>
            </ScrollView>
            {
                showSidebar &&
                <SideBar toggle={showSidebar} onClose={(toogle) => setShowSidebar(toogle)} userDetails={userDetails} />
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
