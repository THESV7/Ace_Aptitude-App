import { useState } from "react";
import usegetAsyncStorage from "./getAsyncStorageDetails";

const useUpdateUserDetails = ()=>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { handleUserAuthinticate } = usegetAsyncStorage();
    const userDetailsUpdate = async(Name,email)=>{
        setIsLoading(true)
        const userDetails = await handleUserAuthinticate();
        const id = userDetails._id;
        const data = {Name , email , id}
        try {
            // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint for user registration
            const response = await fetch('http://192.168.0.103:5000/api/editProfile', {
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
                userDetails.email = data.email
                await AsyncStorage.setItem('user', JSON.stringify(userDetails));
                console.log(userDetails)
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