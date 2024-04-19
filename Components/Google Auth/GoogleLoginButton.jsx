import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Linking from 'expo-linking'
const GoogleLoginButton = () => {
    const handleGoogleLogin = async () => {
        // Define your Google OAuth details
        const clientId = '919740930128-rska2qtp8ds6a0gsnrblqn8bgplo8jrb.apps.googleusercontent.com';
        const redirectUri = 'https://ace-aptitude-v1.onrender.com/api/googlecallback';

        // Construct the URL for Google OAuth
        const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=email%20profile`;

        // Open the Google authentication page using Expo WebBrowser
        const result = await WebBrowser.openAuthSessionAsync(url);
    };

    return (
        <TouchableOpacity onPress={handleGoogleLogin} style={styles.button}>
            <Text style={styles.text}>Login with Google</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4285F4',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default GoogleLoginButton;
