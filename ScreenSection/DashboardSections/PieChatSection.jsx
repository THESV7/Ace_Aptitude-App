import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

const PieChartSection = () => {

    const [innerText, setInnerText] = useState(
        {
            label:'Excellent',
            performance:'47'
        }
    )
    const pieData = [
        { value: 30, color: '#7b78fc', gradientCenterColor: '#7F7F7F', label:'Excellent' },
        { value: 90, color: '#4285fa', gradientCenterColor: '#7F7F7F', label:'Okay' },
        { value: 10, color: '#43536b', gradientCenterColor: '#7F7F7F', label:'Good' },
        { value: 65, color: '#f89f93', gradientCenterColor: '#7F7F7F', label:'Poor' }
        // Add more sections with appropriate values and colors
    ];


    const renderDot = color => {
        return (
            <View
                style={{
                    height: 10,
                    width: 10,
                    borderRadius: 5,
                    backgroundColor: color,
                    marginRight: 10,
                }}
            />
        );
    };

    const renderLegendComponent = () => {
        return (
            <>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginVertical: 10,
                        alignItems: 'center'
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 120,
                            marginRight: 20,
                        }}>
                        {renderDot('#006DFF')}
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Excellent: 47%</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: 120 }}>
                        {renderDot('#8F80F3')}
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Okay: 16%</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            width: 120,
                            marginRight: 20,
                        }}>
                        {renderDot('#3BE9DE')}
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Good: 40%</Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', width: 120 }}>
                        {renderDot('#FF7F97')}
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>Poor: 3%</Text>
                    </View>
                </View>
            </>
        );
    };

    return (
        <View style={{ backgroundColor: '#fff', borderRadius: 7, padding: 20, elevation: 2 }}>
            <Text style={{ fontSize: 18, fontWeight: '700' }}>Performance</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <PieChart
                    data={pieData}
                    donut
                    showGradient
                    sectionAutoFocus
                    radius={90}
                    innerRadius={60}
                    innerCircleColor={'#232B5D'}
                    onPress={(e)=> {setInnerText({label:e.label , performance:e.value})}}
                    centerLabelComponent={() => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>{innerText.performance}%</Text>
                            <Text style={{ fontSize: 14, color: 'white' }}>{innerText.label}</Text>
                        </View>
                    )}
                />
                {renderLegendComponent()}
            </View>
        </View>
    );
};

export default PieChartSection;
