import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StatsCard = ({ imageSource, title, subtitle }) => {
    return (
        <View style={[styles.card, { width: 160 ,minWidth:150}]}>
            <Image
                source={imageSource}
                style={{ width: 40, height: 40 }}
                resizeMode="cover"
            />
            <View>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>{title}</Text>
                <Text style={{ fontWeight: '700', color: '#9098A3', fontSize: 14 }}>{subtitle}</Text>
            </View>
        </View>
    )
}

export default StatsCard

const styles = StyleSheet.create({
    card: {
        height: 'auto',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        // Shadow properties for Android
        elevation: 2,
        // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      },
})