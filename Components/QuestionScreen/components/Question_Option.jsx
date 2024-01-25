import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import OptionButton from './OptionButton';
import QuestionNavigatingButton from '../QuestionNavigatingButton';
import { useNavigation } from '@react-navigation/native';
import usePostUserTest from '../../../Hooks/TestDetails/postUserGivenTest';

const Question_Option = ({ data, setcurrentIndex, timeOver }) => {
    const [selectedOptions, setSelectedOptions] = useState(new Array(data.length).fill(null));
    const {responseData, isLoading, error,clearData, userTestPost}=usePostUserTest()
    const navigation = useNavigation()
    useEffect(() => {
        if (timeOver) {
            handleSubmit()
        }
    }, [timeOver])
    const handleOptionSelect = (selectedOptionIndex) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[currentQuestionIndex] = selectedOptionIndex;
        setSelectedOptions(updatedOptions);
    };
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = data[currentQuestionIndex];
    const options = currentQuestion ? currentQuestion.options : [];

    const goBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const goNext = () => {
        if (currentQuestionIndex < data.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleSubmit = () => {
        let score = 0;
        let results = [];

        // Loop through each question
        data.forEach((question, index) => {
            const selectedOptionIndex = selectedOptions[index];
            const isCorrect = selectedOptionIndex !== null && question.correctOption === question.options[selectedOptionIndex];

            // Increment score if the selected option is correct
            if (isCorrect) {
                score++;
            }

            // Store result for the current question
            results.push({
                questionText: question.questionText,
                options: question.options.map((option, optionIndex) => ({
                    text: option,
                    isCorrect: option === question.correctOption &&  optionIndex === selectedOptionIndex,
                    isSelected: optionIndex === selectedOptionIndex,
                })),
            });
        });
        navigation.navigate('Score', { score, results }); // Pass results along with the score
    };

    useEffect(() => {
        setCurrentQuestionIndex(setcurrentIndex)
    }, [setcurrentIndex])

    const isLastQuestion = currentQuestionIndex === data.length - 1;

    return (
        <View style={{ display: 'flex', gap: 20 }}>
            {currentQuestion && (
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>{`Q${currentQuestionIndex + 1}. ${currentQuestion.questionText}`}</Text>
                </View>
            )}
            <View style={{ display: 'flex', flexDirection: 'column' }}>
                {/* options */}
                {options.map((option, index) => (
                    <OptionButton
                        key={index}
                        text={option}
                        selected={selectedOptions[currentQuestionIndex] === index}
                        onPress={() => handleOptionSelect(index)}
                        index={index}
                    />
                ))}
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <QuestionNavigatingButton buttonText="Previous" onPress={goBack} />
                {isLastQuestion ? (
                    <QuestionNavigatingButton buttonText="Submit" onPress={handleSubmit} />
                ) : (
                    <QuestionNavigatingButton buttonText="Next" onPress={goNext} />
                )}
            </View>
        </View>
    );
};

export default Question_Option;

const styles = StyleSheet.create({});
