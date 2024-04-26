import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
// import BezierLineChartSection from '../ScreenSection/DashboardSections/BezierLineChartSection'
import BackButton from '../Components/BackButton'
import PieChatSection from '../ScreenSection/DashboardSections/PieChatSection'
import { LineChartSection } from '../ScreenSection/DashboardSections/LineChartSection'
import { useFocusEffect } from '@react-navigation/native'
import useDashboardDetails from '../Hooks/UserAuth/userDashboardDetails'
import usegetAsyncStorage from '../Hooks/UserAuth/getAsyncStorageDetails'
import Spinner from '../Components/Spinner'

const DashBoardScreen = () => {

    const { handleUserAuthinticate } = usegetAsyncStorage();
    const { getDashboardDetails, dashBoardData, isLoading, error, clearData } = useDashboardDetails()
    useFocusEffect(
        useCallback(() => {
            const getDashboard = async () => {
                const userDetails = await handleUserAuthinticate();
                getDashboardDetails(userDetails._id)
            }

            getDashboard()
            return clearData
        }, [])
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f8fa' }}>
            <ScrollView style={{ flexGrow: 1 }}>
                <View style={{ flex: 1, gap: 8 }}>
                    <View style={{ padding: 20, flex: 0, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <BackButton />
                        </View>
                        <View style={{ flex: 2 }}>
                            <Text style={{ fontSize: 24, fontWeight: "700" }}>Dashboard</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, gap: 25 , paddingBottom:20}}>
                        {
                            isLoading ?
                                <Spinner />
                                :
                                <>
                                    <View style={{ paddingHorizontal: 20 }}>
                                        <LineChartSection lineChartData={dashBoardData?.categoryScoreAverages} />
                                    </View>
                                    <View style={{ paddingHorizontal: 20 }}>
                                        <PieChatSection piChartData={dashBoardData?.categoryTestCounts} />
                                    </View>
                                </>
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DashBoardScreen

const styles = StyleSheet.create({})