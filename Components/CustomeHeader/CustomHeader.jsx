import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../BackButton'

const CustomHeader = ({ title, flexValue, OnClose, buttonNone ,size}) => {
    return (
        <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center' }}>
            {
                !buttonNone &&
                <View style={{ flex: 1 }}>
                    <BackButton OnClose={OnClose} />
                </View>
            }
            <View style={{ flex: flexValue }}>
                <Text style={{ fontSize: size||24, fontWeight: '700' }}>{title}</Text>
            </View>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({})