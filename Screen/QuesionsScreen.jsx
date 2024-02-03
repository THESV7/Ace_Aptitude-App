import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../Components/CustomeHeader/CustomHeader'
import { useNavigation, useRoute } from '@react-navigation/native'
import Header from '../Components/Header'
import QuestionNoListModal from '../Components/QuestionNoListModal'
import QuestionNoSelector from '../Components/QuestionNoSelector'
import Question_Option from '../Components/QuestionScreen/components/Question_Option'
import useGetQuetions from '../Hooks/TestDetails/getQuestions'
import Spinner from '../Components/Spinner'
const QuesionsScreen = () => {

    const [timeOver, setTimeOver] = useState(false);
    const [questionindex, setCurrentQuestionIndex] = useState(0)
    const [markedQuestions, setMarkedQuestions] = useState([]);
    const navigateToQuestion = (questionIndex) => {
        setCurrentQuestionIndex(questionIndex);
        setIsModalOpen(false); // Close the modal after navigation if needed
    };


    const renderItem = ({ item, index }) => (
        <QuestionNoSelector item={item} key={item.id} index={index} navigateToQuestion={navigateToQuestion} isMarked={markedQuestions}/>
    );

    const route = useRoute()
    const { category, time, NoOfQuestions, difficulty } = route.params
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { getQuetions, isQuestionsLoading, error, responseData } = useGetQuetions()
    useEffect(() => {
        if (category && NoOfQuestions) {
            getQuetions(category, NoOfQuestions, 'Mock')
        }
        else if (category) {
            getQuetions(category, 20, 'Practice', difficulty,)
        }
    }, [])

    const handleModalList = () => {
        setIsModalOpen(true)
    }

    useEffect(() => {
        startTimer(time); // Start the timer with the provided time
    }, [time]);

    const [remainingTime, setRemainingTime] = useState(0); // in seconds

    // Function to start the timer
    const startTimer = (timeInMinutes) => {
        const timeInSeconds = timeInMinutes * 60; // Convert minutes to seconds
        setRemainingTime(timeInSeconds);
    };

    const navigation = useNavigation()
    useEffect(() => {
        // Decrement the time every second
        const timer = setInterval(() => {
            setRemainingTime((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer); // Stop the timer when it reaches 0
                    setTimeOver(true)
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer); // Clean up on unmount
    }, []);

    // Format the remaining time to display
    const formatTime = () => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        if (minutes > 0) {
            if (seconds > 0) {
                return `${minutes} min ${seconds} s`;
            } else {
                return `${minutes} min`;
            }
        } else {
            return `${seconds} s`;
        }
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f8fa' }}>
            <ScrollView style={{ flexGrow: 1 }}>
                {
                    isQuestionsLoading && responseData ?
                        <Spinner />
                        :
                        <View style={{ flex: 1, gap: 10 }}>
                            <View style={{ paddingVertical: 10, paddingHorizontal: 20, paddingBottom: 20, flex: 0 }}>
                                <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: '700' }}>{category}</Text>
                            </View>
                            <View style={{ flex: 0, gap: 20 }}>
                                <View style={{ flex: 0, paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Text style={[styles.infoText]}></Text>
                                    <View style={styles.flexRow}>
                                        <Image source={require('../assets/TimerIcon.png')} style={{ width: 24, height: 24 }} />
                                        <Text style={[styles.infoText, { color: '#6674cc' }]}>{formatTime()}</Text>
                                    </View>
                                </View>
                                <View style={[styles.flexRow, { paddingHorizontal: 20, justifyContent: 'space-between', gap: 10 }]}>
                                    <View style={{ flex: 1 }}>
                                        <FlatList
                                            data={responseData}
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                            renderItem={renderItem}
                                            keyExtractor={(item) => item._id}
                                            alwaysBounceHorizontal={false}
                                        />
                                    </View>
                                    <TouchableOpacity style={styles.listButton} onPress={handleModalList}>
                                        <Image style={styles.listImage} source={require('../assets/ListIcon.png')} />
                                    </TouchableOpacity>
                                </View>

                                {/* Question and option component */}
                                <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
                                    <Question_Option
                                        data={responseData}
                                        setcurrentIndex={questionindex}
                                        timeOver={timeOver}
                                        timeTaken={time - Math.floor(remainingTime / 60)} // Pass the time taken in minutes
                                        markedQuestions={markedQuestions}
                                        setMarkedQuestions={setMarkedQuestions}
                                    />
                                </View>
                            </View>
                        </View>
                }
            </ScrollView>
            {
                isModalOpen &&
                <QuestionNoListModal visibility={isModalOpen} onClose={(toggle) => setIsModalOpen(toggle)} listData={responseData} navigateToQuestion={navigateToQuestion}  isMarked={markedQuestions}/>
            }
        </SafeAreaView>
    )
}

export default QuesionsScreen

const styles = StyleSheet.create({
    infoText: {
        fontSize: 18,
        fontWeight: '700'
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2
    },
    listButton: {
        padding: 5,
        backgroundColor: '#e9e9ff',
        borderRadius: 5,
        flex: 0
    },
    listImage: {
        width: 36,
        height: 36
    },
    storyImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    storyContainer: {
        marginRight: 10,
        alignItems: 'center',
    },
})