import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

const colorPalette = [
    '#87CEFA', // Light Blue
    '#f89f93', // Light orange
    '#90EE90', // Light Green
    '#FFB6C1', // Light Pink
  ];

const PieChartSection = ({ piChartData = [] }) => {
    // Default text when pie chart initializes
    const [innerText, setInnerText] = useState({
        label: piChartData[0]?.label,
        performance: piChartData[0]?.value, // Initial percentage displayed
    });

    // Ensure piChartData is a proper array
    const pieData = Array.isArray(piChartData)
        ? piChartData.map((data, index) => ({
            ...data,
            color: colorPalette[index % colorPalette.length], // Assign a color from the palette
        }))
        : [];

    const renderDot = (color) => (
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

    const renderLegendComponent = () => (
        <View>
            {pieData.map((item, index) => (
                <View
                    key={index}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        marginBottom: 10,
                    }}
                >
                    {renderDot(item.color)}
                    <Text style={{ fontSize: 16, fontWeight: '700' }}>
                        {item.label}: {item.value}
                    </Text>
                </View>
            ))}
        </View>
    );

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
                    onPress={(e) => {
                        setInnerText({ label: e.label, performance: e.value });
                    }}
                    centerLabelComponent={() => (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>
                                {innerText.performance}
                            </Text>
                            <Text style={{ fontSize: 14, color: 'white' }}>
                                {innerText.label}
                            </Text>
                        </View>
                    )}
                />
                {renderLegendComponent()}
            </View>
        </View>
    );
};

export default PieChartSection;
