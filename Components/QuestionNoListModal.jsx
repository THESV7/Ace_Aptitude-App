import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BackButton from './BackButton'
import QuestionNoSelector from './QuestionNoSelector'

const QuestionNoListModal = ({ onClose, visibility, listData, navigateToQuestion={navigateToQuestion} , isMarked}) => {
    return (
        <View >
            <Modal onRequestClose={() => onClose(false)} visible={visibility} animationType='slide'>
                <View style={{ flex: 1,backgroundColor: '#f7f8fa' }}>
                    <View style={{ padding: 20 }}>
                        <BackButton OnClose={(toggle) => onClose(toggle)} />
                    </View>
                    <View style={{ display: 'flex', flexWrap: 'wrap',flexDirection:'row',paddingHorizontal:20,columnGap:2,rowGap:8}}>
                        {
                            listData.map((item ,index) => (
                                <QuestionNoSelector item={item} index={index} key={index} navigateToQuestion={navigateToQuestion} isMarked={isMarked}/>
                            ))
                        }
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default QuestionNoListModal

const styles = StyleSheet.create({
})