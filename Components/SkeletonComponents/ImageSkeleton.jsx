import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ImageSkeleton = () => {
    return (
        <View>
            <Image
                style={styles.image}
            />
        </View>
    )
}

export default ImageSkeleton

const styles = StyleSheet.create({
    image: {
        width: 134,
        height: 134,
        resizeMode: 'contain',
        borderRadius: 100,
        borderWidth: 5,
        borderColor: '#f7f8fa',
        backgroundColor: '#E0E0E0'
      },
})