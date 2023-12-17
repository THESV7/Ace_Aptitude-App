import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Profile from '../assets/sahilP.jpg'
import CoinIcon from '../assets/coinThender.png'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useUserDetails from '../Hooks/UserAuth/UserDetails';

const Header = () => {
    const [userDetail,setUserDetail]=useState([])
    const { handleUserAuthinticate} = useUserDetails()

    useEffect(()=>{
        const getDetails =async()=>{
            const userDetails = await handleUserAuthinticate();
            setUserDetail(userDetails)
        }
        getDetails()
    },[handleUserAuthinticate])
    return (
        <>
            <View style={{ flex: 1, flexDirection: 'row',paddingBottom:10 , alignItems: 'center' ,paddingHorizontal: 20}}>
                <View style={{ flex: 1 }}>
                    <Image source={Profile} style={{ width: 50, height: 50, borderRadius: 100 }} />
                </View>
                <View style={{ paddingVertical: 20, flex: 4}}>
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#7d828a' }}>Welcome Back!</Text>
                    <Text style={{ fontSize: 24, fontWeight: '700',color:'#152946' }}>{userDetail.Name}</Text>
                </View>
                <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'#e9e9ff',padding:10,borderRadius:10}}>
                    <MaterialCommunityIcons name="bell-badge-outline" size={32} color="black" />
                </View>
            </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({})