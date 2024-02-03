import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../Components/CustomeHeader/CustomHeader';

const ReportProblemScreen = () => {
  const [problemDescription, setProblemDescription] = useState('');

  const handleSubmit = () => {
    // Logic to handle submitting the problem description
    console.log('Problem Description:', problemDescription);
    // You can add further logic here to send the report or handle it as required
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={'Report a Problem'} flexValue={2.4} />
      <View style={styles.content}>
        <Text style={styles.heading}>What seems to be the problem?</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={8}
          placeholder="Describe the issue you encountered..."
          value={problemDescription}
          onChangeText={(text) => setProblemDescription(text)}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit Report</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
  submitButton: {
    backgroundColor: '#6674cc',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ReportProblemScreen;
