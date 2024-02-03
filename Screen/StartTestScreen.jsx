import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../Components/CustomeHeader/CustomHeader';
import { useNavigation, useRoute } from '@react-navigation/native';

const StartTestScreen = () => {
    const [rulesVisible, setRulesVisible] = useState(true);
    const route = useRoute()
    const navigation = useNavigation()
    const params = route.params
    const startTest = () => {
        navigation.navigate('Question Solving',params)
    };

    const cancelTest = () => {
        navigation.goBack()
    };

    const rules = [
        "Time Limit: 30 minutes for 20 questions.",
        "No skipping: You can't skip to the next question.",
        "Answer All: All questions are mandatory.",
        "No Backtracking: Once answered, you can't change your choice."
    ];

    return (
        <SafeAreaView style={{flex:1}}>
            <CustomHeader />
            <View style={styles.container}>
                    <View style={styles.rulesContainer}>
                        {/* Rules */}
                        <Text style={styles.heading}>Aptitude Practice Test Rules</Text>
                        <View style={styles.rulesList}>
                            {rules.map((rule, index) => (
                                <View key={index} style={styles.ruleItem}>
                                    <Text style={styles.ruleText}>{`\u2022 ${rule}`}</Text>
                                </View>
                            ))}
                        </View>
                        {/* Start and Cancel Buttons */}
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.startButton]}
                                onPress={() => {
                                    setRulesVisible(false);
                                    startTest();
                                }}
                            >
                                <Text style={styles.buttonText}>Start Test</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.button, styles.cancelButton]}
                                onPress={cancelTest}
                            >
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom:100
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    rulesContainer: {
        alignItems: 'center',
    },
    rulesList: {
        alignSelf: 'stretch',
        marginBottom: 20,
    },
    ruleItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 10,
    },
    ruleText: {
        fontSize: 16,
        marginLeft: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 10
    },
    button: {
        flex: 1,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    startButton: {
        // marginRight: 10,
        backgroundColor: '#6674cc',
    },
    cancelButton: {
        marginLeft: 10,
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default StartTestScreen;
