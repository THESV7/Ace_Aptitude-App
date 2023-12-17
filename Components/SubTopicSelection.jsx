import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const SubTopicSelection = ({ topicsWithSubtopics }) => {
    const [selectedSubtopic, setSelectedSubtopic] = useState('');

    // useEffect(() => {
    //     console.log(selectedSubtopic);
    // }, [selectedSubtopic]);

    const handleSubtopicSelection = (subtopic) => {
        if (selectedSubtopic === subtopic) {
            setSelectedSubtopic(''); // Deselect if the same subtopic is clicked again
        } else {
            setSelectedSubtopic(subtopic); // Select the clicked subtopic
        }
    };

    return (
        <View style={{ flex: 0 }}>
            <Text style={styles.FilterHeading}>{topicsWithSubtopics.topic}</Text>
            <ScrollView style={{ paddingVertical: 20, }} horizontal overScrollMode="never" showsHorizontalScrollIndicator={false}>
                {topicsWithSubtopics.subtopics.map((data) => ( // Access subtopics from the prop
                    <TouchableOpacity key={data} onPress={() => handleSubtopicSelection(data)} style={{marginRight:10}}>
                        <View style={[
                            { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 100, borderWidth: 2 },
                            selectedSubtopic === data ? { backgroundColor: '#6674CC', borderColor: '#6674cc' } : { borderColor: '#ccc' }
                        ]}>
                            <View style={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: '700', fontSize: 14, color: selectedSubtopic === data ? 'white' : 'black' }}>{data}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default SubTopicSelection;

const styles = StyleSheet.create({
    Heading: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 28,
    },
    FilterHeading: {
        fontSize: 20,
        fontWeight: '500',
    },
});
