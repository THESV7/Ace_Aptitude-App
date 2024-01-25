import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const QuestionNoSelector = ({item,index,navigateToQuestion}) => {

    const handleQuestionNavigation = () => {
        navigateToQuestion(index); // Navigate to the selected question index
    };
    return (
        <TouchableOpacity style={styles.storyContainer} onPress={handleQuestionNavigation}>
            <View style={[styles.storyImageContainer]}>
                <Text style={{ fontWeight: '700', fontSize: 18 }}>{index+1}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default QuestionNoSelector

const styles = StyleSheet.create({
        storyImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#fff"
    },
    storyContainer: {
        marginRight: 6,
        alignItems: 'center',
    },
})