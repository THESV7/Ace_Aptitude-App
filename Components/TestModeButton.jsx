import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TestModeButton = ({ activeButton, onPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, activeButton === 'Practice' && styles.activeButton]}
                    onPress={() => onPress('Practice')}
                >
                    <Text style={[styles.buttonText, activeButton === 'Practice' && styles.activeButtonText]}>Practice</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, activeButton === 'Mock Test' && styles.activeButton]}
                    onPress={() => onPress('Mock Test')}
                >
                    <Text style={[styles.buttonText, activeButton === 'Mock Test' && styles.activeButtonText]}>Mock Test</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default TestModeButton

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 7,
        gap: 5,
        paddingVertical: 7,
        borderRadius: 20,
        backgroundColor: '#ffff',
        elevation:1
    },
    button: {
        flex: 1,
        padding: 10,
        borderRadius: 16,
        alignItems: 'center',
    },
    activeButton: {
        backgroundColor: '#e9e9ff',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    activeButtonText: {
        color: '#000', // Adjust the color as needed
    },
});