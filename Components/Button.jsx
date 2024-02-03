import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({buttonText,onPress}) => {
    return (
        <TouchableOpacity style={{ width: 150, height: 50, backgroundColor: '#6674CC', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }} onPress={onPress}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({})