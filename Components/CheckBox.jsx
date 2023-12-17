import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
const CheckBox = ({difficulty}) => {

    const [check,setChecked]=useState(false)
    const handleCheck =()=>{
        setChecked(!check)
    }
    return (
        <>
            <View style={{display:'flex',flexDirection:'row',gap:4,alignItems:'center'}}>
                <TouchableOpacity onPress={handleCheck}>
                    <View style={{ borderColor: check ? '#6674CC':'#f3f2f4', backgroundColor: check ? '#6674CC':'transparent', width: 25, height: 25, borderWidth: 2, borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                        {check && <AntDesign name="check" size={16} color="white" />}
                    </View>
                </TouchableOpacity>
                <Text style={{ color: '#a9aeb7', fontWeight: '600', fontSize: 18, marginRight: 20 }}>{difficulty.difficulty}</Text>
            </View>
        </>
    )
}

export default CheckBox

const styles = StyleSheet.create({})