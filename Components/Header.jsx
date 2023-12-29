import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import usegetAsyncStorage from '../Hooks/UserAuth/getAsyncStorageDetails';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import TextSkeleton from './SkeletonComponents/TextSkeleton';

const Header = ({ onMenuPress, userDetails, isLoading }) => {
    // const [userDetail, setUserDetail] = useState([])
    // const { handleUserAuthinticate } = usegetAsyncStorage()
    // useFocusEffect(
    //     useCallback(() => {
    //         const getDetails = async () => {
    //             const userDetails = await handleUserAuthinticate();
    //             setUserDetail(userDetails)
    //         }
    //         getDetails()
    //     }, [])
    // )
    return (
        <>
            <View style={{ flex: 1, flexDirection: 'row', paddingBottom: 10, alignItems: 'center', paddingHorizontal: 20 }}>
                <TouchableWithoutFeedback >
                    <View style={{ flex: 1 }}>
                        {
                            isLoading ?
                                <Image style={{ width: 50, height: 50, borderRadius: 100, backgroundColor: '#E0E0E0' }} />
                                :
                                <Image source={{ uri: userDetails?.profileImage }} style={{ width: 50, height: 50, borderRadius: 100 }} />
                        }
                    </View>
                </TouchableWithoutFeedback>
                <View style={{ paddingVertical: 20, flex: 4 }}>
                    {
                        isLoading ?
                            <>
                                <TextSkeleton width={80} height={12} mb={4} />
                                <TextSkeleton width={150} height={20} />
                            </>
                            :
                            <>
                                <Text style={{ fontSize: 16, fontWeight: '600', color: '#7d828a' }}>Welcome Back!</Text>
                                <Text style={{ fontSize: 22, fontWeight: '700', color: '#152946', textTransform: 'capitalize' }}>{userDetails?.Name}</Text>
                            </>
                    }

                </View>
                {
                    isLoading ?
                    <TextSkeleton width={45} height={45}/>
                    :
                        <TouchableWithoutFeedback onPress={onMenuPress}>
                            <View style={{ flex: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e9e9ff', padding: 8, borderRadius: 10 }}>
                                <Ionicons name="ios-menu" size={32} color="black" />
                            </View>
                        </TouchableWithoutFeedback>

                }
            </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({})