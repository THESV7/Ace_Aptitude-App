import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
const BackButton = ({route,OnClose}) => {

    const navigation = useNavigation()
    const handleRoute=()=>{
        if(OnClose){
            OnClose(false)
        }
        else{
            navigation.goBack()
        }
    }
    return (
        <>
            <TouchableOpacity style={BackButtonStyle.BackButtonIcon} onPress={()=> handleRoute()}>
                <Entypo name="chevron-small-left" size={45} color={'#6674CC'} />
            </TouchableOpacity>
        </>
    )
}

export default BackButton

const BackButtonStyle = StyleSheet.create({
    BackButtonIcon:{
        // marginLeft:20,
        // marginTop:20,
        width:50,
        height:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#e9e9ff',
        borderRadius:10
    }
})