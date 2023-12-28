import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MockTestCard = () => {
    // Demo data for the mock test cards
    const testData = [
        {
            title: 'Demo Test 1',
            time: 30, // Time in minutes
            questions: 20, // Number of questions
        },
        {
            title: 'Demo Test 2',
            time: 45, // Time in minutes
            questions: 15, // Number of questions
        },
        {
            title: 'Demo Test 3',
            time: 60, // Time in minutes
            questions: 25, // Number of questions
        },
    ];

    return (
        <View>
            {testData.map((test, index) => (
                <TouchableOpacity style={styles.card} key={index}>
                    <View style={styles.detailsContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{test.title}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <View style={styles.timeContainer}>
                                <Text style={styles.time}>{test.time} mins</Text>
                            </View>
                            <View style={styles.questionsContainer}>
                                <Text style={styles.questions}>{test.questions} Questions</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 15,
        margin: 5,
        marginLeft: 0,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        borderRadius: 15,
    },
    detailsContainer: {
        flex: 1,
        gap: 10,
        justifyContent: 'space-between',
    },
    titleContainer: {
        flex: 1,
        marginRight: 10,
    },
    timeContainer: {
        flexShrink: 0,
        backgroundColor: '#E0E0E0',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    questionsContainer: {
        flexShrink: 0,
        backgroundColor: '#E0E0E0',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
    },
    time: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
    },
    questions: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
    },
});

export default MockTestCard;
