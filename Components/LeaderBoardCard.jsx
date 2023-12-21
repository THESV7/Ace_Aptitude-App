import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const LeaderBoardCard = ({cardDetails}) => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Image
                    source={{ uri: cardDetails.profileImage }}// Replace with your image path
                    style={styles.profileImage}
                />
                <Text style={{fontSize:18,fontWeight:'600'}}>{cardDetails.name}</Text>
            </View>
            <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <Image source={require('../assets/coinThender.png')}/>
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
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:'white',
        borderRadius:10,
        marginBottom:5
    },
    profileImage: {
        width: 50, 
        height: 50,
        borderRadius:7
    },
    subHeading:{
        fontWeight: '700',
        fontSize: 14,
      },
});
