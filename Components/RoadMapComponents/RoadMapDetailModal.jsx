import React, { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Importing the icon

const RoadMapDetailModal = ({ visibility, OnClose, modelData ,setVisibilty}) => {
    const { exam, description, subjects, resources } = modelData;
    const [expandedSubjects, setExpandedSubjects] = useState([]);


    const toggleSubject = (index) => {
        if (expandedSubjects.includes(index)) {
            setExpandedSubjects(expandedSubjects.filter((item) => item !== index));
        } else {
            setExpandedSubjects([...expandedSubjects, index]);
        }
    };

    const modalHeight = Dimensions.get('window').height;

    const handleClose = () => {
        setExpandedSubjects([]);
        OnClose(false)
    };
    return (
        <Modal transparent={true} visible={visibility} animationType='slide' onRequestClose={handleClose}>
            <View style={[styles.modalContainer, { height: modalHeight }]}>
                <ScrollView style={styles.scrollView}>
                    <View style={[styles.modalContent, { height: modalHeight }]} >
                        <Text style={styles.heading}>{exam}</Text>
                        <Text style={styles.description}>{description}</Text>

                        <View style={styles.section}>
                            <Text style={styles.sectionHeading}>Subjects</Text>
                            {subjects.map((subject, index) => (
                                <View key={index} style={styles.subject}>
                                    <TouchableOpacity onPress={() => toggleSubject(index)}>
                                        <View style={[styles.subjectHeader]}>
                                            <Text style={[styles.subjectName, expandedSubjects.includes(index) && styles.subjectNameExpanded]}>
                                                {subject.name}
                                            </Text>
                                            <MaterialCommunityIcons
                                                name={expandedSubjects.includes(index) ? 'chevron-up' : 'chevron-down'} // Change icon based on state
                                                size={24}
                                                color="#333"
                                            />
                                        </View>
                                    </TouchableOpacity>
                                    {expandedSubjects.includes(index) && (
                                        <View style={{marginLeft:10}}> 
                                            <Text style={styles.subheading}>Syllabus:</Text>
                                            <View style={styles.syllabusContainer}>
                                                {subject.syllabus.map((item, i) => (
                                                    <Text key={i} style={styles.syllabusItem}>{item}</Text>
                                                ))}
                                            </View>
                                        </View>
                                    )}
                                </View>
                            ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
    },
    scrollView: {
        flexGrow: 1,
        backgroundColor: 'transparent',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        elevation: 5,
        flex: 1, // Ensure the modal content takes the full height
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    description: {
        marginBottom: 30,
        fontSize: 16,
        lineHeight: 24,
        color: '#666',
        textAlign:'left'
    },
    section: {
        marginBottom: 30,
    },
    sectionHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    subject: {
        marginBottom: 20,
    },
    subjectHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    subjectName: {
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 16, // Adjusted font size
        color: '#fff',
    },
    subjectNameExpanded: {
        fontSize: 18, // Increased font size when expanded
    },
    subheading: {
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 10,
        fontSize: 16,
        color: '#666',
    },
    syllabusContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    syllabusItem: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: 10,
        color: '#333',
    },
});

export default RoadMapDetailModal;
