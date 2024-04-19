import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const LeaderBoardCard = ({ cardDetails, position }) => {
    let borderColor = 'transparent';

    if (position === 1) {
        borderColor = '#DAA520';
    } else if (position === 2) {
        borderColor = '#C0C0C0';
    } else if (position === 3) {
        borderColor = '#cd7f32'; // bronze
    }

    return (
        <View style={[styles.container,{ borderColor }]}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Image
                    source={{ uri: cardDetails.profileImage }} // Replace with your image path
                    style={[styles.profileImage,{ borderColor }]}
                />
                <Text style={{ fontSize: 18, fontWeight: '600' }}>{cardDetails?.name?.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')}</Text>
            </View>
            <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Image source={require('../assets/coinThender.png')} />
                <Text style={styles.subHeading}>{cardDetails.totalcoins}</Text>
            </View>
        </View>
    );
};

export default LeaderBoardCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 5,
        borderWidth: 2,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 7,
        // borderWidth: 2, // Add borderWidth to apply border color,
    },
    subHeading: {
        fontWeight: '700',
        fontSize: 14,
    },
});
