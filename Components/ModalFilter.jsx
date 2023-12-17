import { Modal, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import BackButton from '../Components/BackButton'
import CheckBox from './CheckBox'
const ModalFilter = ({ visibility, OnClose }) => {

    const Difficulty = [
        {
            difficulty:'Easy',
        },
        {
            difficulty:'Medium',
        },
        {
            difficulty:'Hard',
        },
    ]
    return (
        <View style={{ flex: 1 }}>
            <Modal transparent={true} visible={visibility} animationType='slide' statusBarTranslucent>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                                <View style={{ flex: 1 }}>
                                    <BackButton OnClose={OnClose} />
                                </View>
                                <View style={{ flex: 1.5 }}>
                                    <Text style={[styles.Heading]}>Filter</Text>
                                </View>
                            </View>
                            <View style={{flex:0}}>
                                <Text style={styles.FilterHeading}>Difficulty</Text>
                                <View style={{paddingVertical:20,display:'flex',flexDirection:'row'}}>
                                    {
                                        Difficulty.map((data)=>(
                                            <CheckBox difficulty={data} key={data.difficulty}/>
                                        ))
                                    }
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity style={{ width: 150, height: 50, backgroundColor: '#e9e9ff', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }} onPress={() => OnClose(false)}>
                                <Text style={{ color: 'black', fontSize: 16, fontWeight: '500' }}>Clear</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 150, height: 50, backgroundColor: '#6674CC', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }} onPress={() => OnClose(false)}>
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
        // borderTopLeftRadius: 50,
        // borderTopRightRadius: 50,
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