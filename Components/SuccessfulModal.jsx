import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

const SuccessfulModal = ({ visibility }) => {

    const navigation = useNavigation()
    const circlePadding = useSharedValue(0)

    useEffect(() => {
        let timeoutId;
    
        if (visibility) {
          circlePadding.value = 0;
          timeoutId = setTimeout(() => {
            circlePadding.value = withSpring(circlePadding.value + 30);
          }, 200);
        }
    
        return () => {
          // Clear the timeout when the component unmounts or visibility changes
          clearTimeout(timeoutId);
        };
      }, [visibility]);
    
    const handleRoute=(route)=>{
        navigation.navigate(route)
    }
    return (
        <>
            <Modal transparent={true} visible={visibility}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Animated.View style={{  padding: circlePadding, backgroundColor: '#e9e9ff', borderRadius: 100 }}>
                            <AntDesign name="checkcircle" size={90} color="#6674CC" />
                        </Animated.View>
                        <Text style={styles.modalText}>You'r Verified</Text>
                        <Text style={styles.paragraphText}>Your account is verified,let's start make friends</Text>
                        <TouchableOpacity onPress={()=>handleRoute('Onboarding')} style={[styles.NumberButton, { backgroundColor: '#6674CC' }]}><Text style={styles.buttonText}>Get started</Text></TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}

export default SuccessfulModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
        paddingHorizontal: 30,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 30,
    },
    modalText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 30,
        color: '#6674CC',
    },
    modalButton: {
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#4b164c',
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    paragraphText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#a29ea6',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    NumberButton: {
        padding: 20,
        borderRadius: 40,
        marginTop: 20,
        alignItems: 'center',
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#4b164c',
    },
})