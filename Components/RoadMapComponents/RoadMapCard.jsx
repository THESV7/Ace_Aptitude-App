import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector icons
import RoadmapImage from '../../assets/adaptive-icon.png';

const RoadMapCard = ({ roadmapData,setModelToogle ,setModelData}) => {
    const handleModalToggle = ()=>{
        setModelToogle(true)
        setModelData(roadmapData)
    }

    const trimDescription = (description, maxLength) => {
        if (description.length <= maxLength) {
            return description;
        } else {
            return description.substring(0, maxLength) + '...';
        }
    };

    const trimmedDescription = trimDescription(roadmapData.description, 100);
    
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{roadmapData.exam}</Text>
                        <Text style={styles.description}>
                            {trimmedDescription}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.detailsButton} onPress={handleModalToggle}>
                    <View style={styles.arrowBox}>
                        <Ionicons name="arrow-forward" size={24} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 40,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginTop: 5,
        color: '#888',
    },
    detailsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    arrowBox: {
        backgroundColor: '#6674cc',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    detailsText: {
        fontSize: 16,
        color: '#333',
    },
});

export default RoadMapCard;
