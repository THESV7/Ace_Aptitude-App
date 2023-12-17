import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../assets/NavLogo.png'
import { StatusBar } from 'expo-status-bar'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const WelcomeScreen = () => {
    const navigate = useNavigation()

    const handleUserAuthinticate = async () => {
        const isVerified = await AsyncStorage.getItem('user')
        return isVerified
    }

    useEffect(() => {
        const checkUserAuthentication = async () => {
            const isVerified = await handleUserAuthinticate(); // Call the function
            if (isVerified) {
                setTimeout(() => {
                    navigate.navigate('Tabs');
                }, 3000);
            } else {
                setTimeout(() => {
                    navigate.navigate('SignUp');
                }, 3000);
            }
        };
        
        checkUserAuthentication(); // Invoke the function

    }, [navigate]);

    return (
        <SafeAreaView style={welcomeStyles.container}>
            <StatusBar style='auto' />
            <View style={welcomeStyles.center}>
                <Image source={Logo} />
                <Text style={welcomeStyles.text}>Ace <Text style={{ color: '#6674CC' }}>Aptitude</Text></Text>
            </View>
        </SafeAreaView>
    )
}

export default WelcomeScreen

const welcomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    center: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'center'
    },
    text: {
        fontSize: 40,
        fontWeight: '900',
    }
})
