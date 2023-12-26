import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { PieChart } from 'react-native-chart-kit';

const PieChartSection = () => {
    const [chartWidth, setChartWidth] = useState(Dimensions.get('window').width - 40); // Initial width
    const data = [
        {
            name: 'General',
            score: 30,
            color: '#7b78fc',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'Programing',
            score: 90,
            color: '#4285fa',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'Logical',
            score: 10,
            color: '#43536b',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        {
            name: 'Verbal',
            score: 65,
            color: '#f89f93',
            legendFontColor: '#7F7F7F',
            legendFontSize: 15,
        },
        // Add more sections with appropriate names and scores
    ];

    return (
        <View style={{ backgroundColor: '#fff', borderRadius: 7,padding:10 ,display:'flex',justifyContent:'center',elevation:2}}>
             <Text style={{fontSize:18,fontWeight:'700'}}>Category No.</Text>
            <PieChart
                data={data}
                width={chartWidth}
                height={200}
                chartConfig={{
                    backgroundGradientFrom: '#1E2923',
                    backgroundGradientTo: '#08130D',
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                }}
                accessor="score"
                backgroundColor="transparent"
                absolute // Show percentage values
            />
        </View>
    );
};

export default PieChartSection;

const styles = StyleSheet.create({});
