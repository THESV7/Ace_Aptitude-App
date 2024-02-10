import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BezierLineChartSection from '../ScreenSection/DashboardSections/BezierLineChartSection'
import BackButton from '../Components/BackButton'
import PieChatSection from '../ScreenSection/DashboardSections/PieChatSection'
const DashBoardScreen = () => {
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
                    <View style={{flex:1,gap:25}}>
                        <View style={{ paddingHorizontal: 20 }}>
                            <BezierLineChartSection />
                        </View>
                        <View style={{ paddingHorizontal: 20 }}>
                            <PieChatSection />
                        </View>
                        <View style={{ paddingHorizontal: 20, }}>
                            <PieChatSection />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DashBoardScreen

const styles = StyleSheet.create({})