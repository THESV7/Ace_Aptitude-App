import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const QuestionNoSelector = ({item,index,navigateToQuestion,isMarked}) => {

    const containerStyle = [
        isMarked.includes(index) && { backgroundColor: '#6674cc' }, // Apply the marked background color if the question is marked
    ];

    const handleQuestionNavigation = () => {
        navigateToQuestion(index); // Navigate to the selected question index
    };
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={handleQuestionNavigation}>
            <View style={[styles.Container , containerStyle]}>
                <Text style={[{ fontWeight: '700', fontSize: 18 }, isMarked.includes(index) && {color:'#fff'}]}>{index+1}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default QuestionNoSelector

const styles = StyleSheet.create({
    Container: {
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#fff"
    },
    buttonContainer: {
        marginRight: 6,
        alignItems: 'center',
    },
})