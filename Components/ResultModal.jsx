import { FlatList, Modal, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import CustomHeader from './CustomeHeader/CustomHeader'

const ResultModal = ({ visibility, resultData ,OnClose}) => {
    return (
        <Modal transparent={true} visible={visibility} animationType='slide' onRequestClose={OnClose}>
            <View style={styles.modalContainer}>
                <ScrollView style={styles.modalContent}>
                    <CustomHeader title={'Result'} flexValue={1.5} OnClose={OnClose}/>
                    <View style={{ paddingHorizontal: 20 }}>
                        {resultData.map((data, index) => (
                            <View key={index} style={{ marginVertical: 10 }}>
                                <Text style={{ fontSize: 18, fontWeight: '500' }}>{`Q${index + 1}. ${data.questionText}`}</Text>
                                {data.options.map((option, optionIndex) => (
                                    <View
                                        style={[
                                            styles.optionButton,
                                            {
                                                backgroundColor:
                                                    option.isCorrect ? '#7bff33': !option.isSelected  ? 'transparent' : '#ff0000',
                                            },
                                        ]}
                                        key={optionIndex}>
                                        <Text style={[styles.optionText,{color: option.isSelected ? '#fff':'#333'}]}>{option.text}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </Modal>
    );
};

export default ResultModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '100%',
        flex: 1
    },
    optionButton: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'transparent',
        backgroundColor: '#fff',
    },
    optionText: {
        fontSize: 16,
        fontWeight: '400',
    },
})
