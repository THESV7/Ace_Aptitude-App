import { Modal, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackButton from '../Components/BackButton'
import CheckBox from './CheckBox'
import SubTopicSelection from './SubTopicSelection'
import useFilter from '../Hooks/TestDetails/filter'
const ModalFilter = ({ visibility, OnClose, setFilteredData, setIsLoading, clear }) => {


    const { getFilterData, isLoading, responseData } = useFilter()

    useEffect(() => {
        if (!isLoading) {
            setFilteredData(responseData)
            setIsLoading(isLoading)
        }
    }, [isLoading])

    const Difficulty = ['Easy', 'Medium', 'Hard',]

    const Sortby = ['A-Z', 'Name']
    const topicsWithSubtopics = [
        {
            topic: 'General',
            subtopics: [
                "Problems on Trains",
                "Time and Distance",
                "Height and Distance",
                "Time and Work",
                "Simple Interest",
                "Compound Interest"
            ]
        },
        {
            topic: 'Programming',
            subtopics: [
                "Declarations and Initializations",
                "Control Instructions",
                "Expressions",
                "Arrays",
                "Strings",
                "Pointers",
                "Bitwise Operators",
                "C Preprocessor",
                "Functions",
                "Structures, Unions, Enums",
                "Input / Output",
                "Command Line Arguments"
            ]
        },
        {
            topic: 'Logical',
            subtopics: [
                "Essential Part",
                "Analogies",
                "Verbal Classification",
                "Letter and Symbol Series"
            ]
        },
        {
            topic: 'Verbal',
            subtopics: [
                "Spotting Errors",
                "Synonyms",
                "Antonyms",
                "Selecting Words",
                "Spellings",
                "Sentence Formation",
                "Ordering of Words",
                "Sentence Correction",
                "Sentence Improvement",
                "Completing Statements",
                "Ordering of Sentences",
                "Paragraph Formation",
                "Closet Test",
                "Comprehension",
                "One Word Substitutes",
                "Idioms and Phrases",
                "Change of Voice",
                "Change of Speech",
                "Verbal Analogies"
            ]
        }
    ];

    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [sortBy, setSortBy] = useState('')
    const [selectedSubtopic, setSelectedSubtopic] = useState('');

    const handleCheckBoxChange = (selected) => {
        setSelectedDifficulty(selected);
    };

    const handleSubtopicSelection = (subtopic) => {
        if (selectedSubtopic === subtopic) {
            setSelectedSubtopic(''); // Deselect if the same subtopic is clicked again
        } else {
            setSelectedSubtopic(subtopic); // Select the clicked subtopic
        }
    };

    const handleSortByCheckBox = (selected) => {
        setSortBy(selected)
    }

    const handleApply = async () => {
        if (selectedDifficulty !== '' || sortBy !== '' || selectedSubtopic !== '') {
            getFilterData(selectedDifficulty.toLocaleLowerCase(), sortBy , selectedSubtopic)
        }
        OnClose(false);
    };

    const handleClear = () => {
        setSelectedDifficulty('');
        setSortBy('')
        OnClose(false)
        clear()
    };

    return (
        <View style={{ flex: 1 }}>
            <Modal transparent={true} visible={visibility} animationType='slide' statusBarTranslucent onRequestClose={() => OnClose(false)}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30, marginBottom: 20 }}>
                                <View style={{ flex: 1 }}>
                                    <BackButton OnClose={OnClose} />
                                </View>
                                <View style={{ flex: 1.5 }}>
                                    <Text style={[styles.Heading]}>Filter</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0 }}>
                                <Text style={styles.FilterHeading}>Difficulty</Text>
                                <View style={{ paddingVertical: 20, display: 'flex', flexDirection: 'row' }}>
                                    {
                                        Difficulty.map((data) => (
                                            <CheckBox
                                                data={data}
                                                key={data}
                                                checked={selectedDifficulty === data}
                                                onChange={handleCheckBoxChange}
                                            />
                                        ))
                                    }
                                </View>
                            </View>
                            <View style={{ flex: 0 }}>
                                <Text style={styles.FilterHeading}>Sort By</Text>
                                <View style={{ paddingVertical: 20, display: 'flex', flexDirection: 'row' }}>
                                    {
                                        Sortby.map((data) => (
                                            <CheckBox
                                                data={data}
                                                key={data}
                                                checked={sortBy === data}
                                                onChange={handleSortByCheckBox}
                                            />
                                        ))
                                    }
                                </View>

                            </View>
                            {
                                topicsWithSubtopics.map((data) => (
                                    <SubTopicSelection
                                        topicsWithSubtopics={data}
                                        onSelect={handleSubtopicSelection}
                                        selectedSubtopic={selectedSubtopic}
                                        key={data.topic} 
                                    />
                                ))
                            }
                        </View>
                        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ width: 150, height: 50, backgroundColor: '#e9e9ff', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }} onPress={handleClear}>
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>Clear</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 150, height: 50, backgroundColor: '#6674CC', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }} onPress={handleApply}>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Apply</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

    )
}

export default ModalFilter

const styles = StyleSheet.create({
    Heading: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 28,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 20,
        flex: 1
    },
    FilterHeading: {
        fontSize: 20,
        fontWeight: '500'
    }
})