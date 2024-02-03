import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BadgeSection = () => {
    return (
        <View style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingBottom: 20 }}>
            <View style={{ flex: 0 , paddingHorizontal: 20}}>
                <Text style={{ fontSize: 20, fontWeight: '700' }}>Badge</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} overScrollMode="never" contentContainerStyle={{padding:10, paddingHorizontal:20}} >
                    <View style={styles.card}>
                        <Image
                            source={require('../../assets/Gold_Star.png')} // Replace with your image URI
                            style={{ width: 60, height: 60}} // Adjust dimensions as needed
                        />
                        <Text style={styles.name}>Mind Master</Text>
                    </View>
                    <View style={styles.card}>
                        <Image
                            source={require('../../assets/Gold_Star.png')} // Replace with your image URI
                            style={{ width: 60, height: 60}} // Adjust dimensions as needed
                        />
                        <Text style={styles.name}>Problem Pro</Text>
                    </View>
                    <View style={styles.card}>
                        <Image
                            source={require('../../assets/Gold_Star.png')} // Replace with your image URI
                            style={{ width: 60, height: 60}} // Adjust dimensions as needed
                        />
                        <Text style={styles.name}>Brainiac</Text>
                    </View>
                    <View style={styles.card}>
                        <Image
                            source={require('../../assets/Gold_Star.png')} // Replace with your image URI
                            style={{ width: 60, height: 60}} // Adjust dimensions as needed
                        />
                        <Text style={styles.name}>Analyt Ace</Text>
                    </View>
                    {/* Add more cards as needed */}
            </ScrollView>
        </View>
    )
}

export default BadgeSection

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 2,
        marginRight: 10, // Add space between cards
        minWidth:120
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
    },
})
