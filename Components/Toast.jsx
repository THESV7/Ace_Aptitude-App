// CustomToast.js
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomToast = ({ message, type, showToast,setToastVisible }) => {
    const slideAnimation = useRef(new Animated.Value(-100)).current;
    const [top, setTop] = useState('');
    useEffect(() => {
        if (showToast) {
            setTop('8%')
            Animated.timing(slideAnimation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();

            // Hide the toast after a certain duration
            setTimeout(() => {
                hideToast();
            }, 3000);
            setTimeout(()=>{setToastVisible(false)},3500)
        }
    }, [showToast]);

    const hideToast = () => {
        setTop('0%')
        Animated.timing(slideAnimation, {
            toValue: -100,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const getBackgroundColor = () => {
        switch (type) {
            case 'success':
                return '#f0ffef';
            case 'error':
                return '#ffcccc';
            default:
                return '#333'; // Default background color
        }
    };

    const getTextColor = () => {
        switch (type) {
            case 'success':
                return '#7bff33'; // Success text color
            case 'error':
                return '#ff0000'; // Error text color
            default:
                return '#ffffff'; // Default text color
        }
    };

    return (
        <Animated.View
            style={[
                styles.container,
                { backgroundColor: getBackgroundColor(), top: top, transform: [{ translateY: slideAnimation }] },
            ]}
        >
            <Icon name={type === 'success' ? 'check-circle' : 'times-circle'} size={30} color={getTextColor()} />
            <Text style={[styles.message, { color: getTextColor() }]}>{message}</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical:8,
        borderRadius: 100,
        position: 'absolute',
        // top: '0%', // Adjust the top position here
        zIndex: 999,
    },
    message: {
        color: '#7bff33',
        marginLeft: 10,
        fontSize: 16,
        fontWeight: '700',
    },
});

export default CustomToast;
