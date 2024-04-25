import React from 'react';
import { View, Dimensions, ScrollView, Text } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

export const LineChartSection = ({ lineChartData }) => {
    // Ensure lineChartData is an array
    const safeLineChartData = Array.isArray(lineChartData) ? lineChartData : [];

    // Get the device screen width
    const { width } = Dimensions.get('window');

    // Define the initial data point
    const initialLineData = { value: 0, label: '0' };

    // Combine initialLineData with safeLineChartData
    const lineData = [initialLineData, ...safeLineChartData];

    return (
        <ScrollView
            style={{
                // justifyContent: 'center',
                // alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: 7,
                paddingTop: 20,
                paddingBottom: 20,
                paddingLeft: 10,
                paddingRight: 20,
                elevation: 2,
            }}
        >
            <Text style={{ fontSize: 18, fontWeight: '700', marginBottom: 20, marginLeft: 10 }}>Test Analysis</Text>
            <Text style={{ fontSize: 14, fontWeight: '400', marginBottom: 10 }}>Score</Text>
            <LineChart
                isAnimated // Enable animation
                animationDuration={2000} // Animation duration in milliseconds
                animationType="slide"
                initialSpacing={0} // Provide some initial spacing
                data={lineData}
                hideDataPoints={true} // Show data points
                dataPointColor="#6474cc" // Color for the data points
                dataPointRadius={5} // Radius for the data points
                thickness={3} // Thickness of the line
                spacing={(width) / lineData.length} // Adjust spacing based on screen width
                curved // Create a smooth curved line
                color="#6474cc" // Color of the line
                yAxisColor="#6474cc"
                
                xAxisColor="#6474cc"
                showVerticalLines
                verticalLinesColor="#6474cc" // Change vertical line color
                showYAxisText
                hideRules
                yAxisTextColor="#6474cc" // Y-axis text color
                xAxisLabelFont={{ fontSize: 10, color: '#6474cc' }} // Label styles for x-axis
            />
        </ScrollView>
    );
};

export default LineChartSection;
