import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { LineChart } from 'react-native-chart-kit';

const BezierLineChartSection = () => {
    const [chartWidth, setChartWidth] = useState(Dimensions.get('window').width - 40); // Initial width
    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jul'],
        datasets: [
            {
                data: [20, 45, 28, 80, 69],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                strokeWidth: 2,
            },
            // You can add more datasets for multiple lines
        ],
    };
    return (
        <View style={{ backgroundColor: 'white', paddingVertical: 10, borderRadius: 7,elevation:2 }}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{ paddingHorizontal: 10, paddingBottom: 20, fontSize: 18, fontWeight: '700' }}>Recent Test Score</Text>
                <Text style={{ paddingHorizontal: 10, paddingBottom: 20, fontSize: 14, fontWeight: '700' }}>View all</Text>
            </View>
            <LineChart
                data={lineData}
                width={chartWidth}
                height={300}
                chartConfig={{
                    backgroundGradientFrom: '#fff', // Transparent color (Black with 0 opacity)
                    backgroundGradientTo: '#fff', // Transparent color (Black with 0 opacity)
                    color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // change the color according to theme (255,255,255)
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,// change the color according to theme (255,255,255) after the implmentation of check theme
                    strokeWidth: 4,
                    propsForDots: {
                        r: '4',
                        strokeWidth: '4',
                        stroke: '#8665F4',
                    },
                }}
                bezier
                style={{
                    marginVertical: 0,
                    borderRadius: 7,
                }}
                withVerticalLines={true} // Remove vertical grid lines
                withHorizontalLines={false} // Remove horizontal grid lines
                withInnerLines={false} // Remove inner lines (axis lines)
                decorator={() => null} // Remove the axis decorator
            />
        </View>

    )
}

export default BezierLineChartSection

const styles = StyleSheet.create({})