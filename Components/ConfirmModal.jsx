import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import useLogOut from '../Hooks/UserAuth/userLogOut';

const ConfirmModal = ({ visibility, onClose }) => {

    const {logout}=useLogOut()
    const handleClear = () => {
        onClose()
        logout()
    }

    return (
        <Modal transparent={true} visible={visibility} statusBarTranslucent={true} onRequestClose={onClose}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalText}>Confirm Clear Cache</Text>
                    <Text style={styles.paragraphText}>This action will clear the storage and reset the app data.</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={[styles.clearButton, styles.modalButton]} onPress={handleClear}>
                            <Text style={styles.modalButtonText}>Clear</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.cancelButton, styles.modalButton]} onPress={onClose}>
                            <Text style={styles.modalButtonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ConfirmModal;

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
        alignItems: 'center',
        width: '45%', // Adjust the width as needed
        marginTop: 20,
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
    clearButton: {
        backgroundColor: '#E71D36', // Set your desired background color for the Clear button
    },
    cancelButton: {
        backgroundColor: '#F5F5F5', // Blue color for cancel action
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});
