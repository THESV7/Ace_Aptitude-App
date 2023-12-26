import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions, useNavigation } from "@react-navigation/native";

const useLogOut = () => {
    const navigation = useNavigation();

    const logout = async () => {
        try {
            // Clear AsyncStorage
            await AsyncStorage.clear();

            // Reset both stack and tab navigators to SignIn screen
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'SignIn' }],
                })
            );

            console.log('AsyncStorage cleared successfully.');
        } catch (error) {
            console.error('Error clearing AsyncStorage:', error);
        }
    };

    return {
        logout,
    };
};

export default useLogOut;
