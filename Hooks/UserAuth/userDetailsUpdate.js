import { useState } from "react";
import usegetAsyncStorage from "./getAsyncStorageDetails";
import { BASE_URL } from '@env';
import AsyncStorage from "@react-native-async-storage/async-storage";
const useUpdateUserDetails = ()=>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { handleUserAuthinticate } = usegetAsyncStorage();
    const userDetailsUpdate = async(Name)=>{
        setIsLoading(true)
        const userDetails = await handleUserAuthinticate();
        const id = userDetails._id;
        const data = {Name , id}
        try {
            // console.log(BASE_URL)
            // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint for user registration
            const response = await fetch(`http://192.168.0.104:5000/api/editProfile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('User already registered');
            }
            else {
                const data = await response.json();
                const userDetails = await handleUserAuthinticate()
                userDetails.Name = data.Name
                await AsyncStorage.setItem('user', JSON.stringify(userDetails));
                setIsLoading(false)
            }
        } catch (error) {
        }
    }

    return{
        userDetailsUpdate,
        isUserUpdateLoading:isLoading,
        Error : error
    }
}

export default useUpdateUserDetails;