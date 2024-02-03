import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const OptionButton = ({ text, selected, onPress }) => {
    const handlePress = () => {
        onPress(text); // Pass the text directly
    };

    return (
        <TouchableOpacity
            style={[
                styles.optionButton,
                selected && styles.selectedOption,
            ]}
            onPress={handlePress}
        >
            <Text style={styles.optionText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    optionButton: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'transparent',
        backgroundColor: '#fff',
    },
    optionText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#333',
    },
    selectedOption: {
        borderColor: '#6674cc',
    },
});

export default OptionButton;
