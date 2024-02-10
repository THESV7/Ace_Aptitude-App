import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons';
const PasswordVisibilityToggle = ({onPress}) => {

    const [show, setShow] = useState(false);
    const handleToogle = ()=>{
        setShow(!show)
        onPress(show);
    }
    return (
        <Feather name={show ? "eye" : "eye-off"} size={24} color="#a29ea6" onPress={handleToogle} />
    )
}

export default PasswordVisibilityToggle

const styles = StyleSheet.create({})