import { useState } from 'react';
import { BASE_URL } from '@env';
const useUserRegistration = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const registerUser = async (Name, email, password, confirmpassword,profileImage) => {
        setIsLoading(true);
        if (password !== confirmpassword) {
            return { responseData, error, isLoading, registerUser }
        }
        try {
            // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint for user registration
            const response = await fetch(`https://ace-aptitude-v1.onrender.com/api/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Name: Name, email: email, password: password,profileImage:profileImage }),
            });

            if (!response.ok) {
                throw new Error('User already registered');
            }
            else {
                const data = await response.json();
                setResponseData(data);
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error)
            setError(error);
            setIsLoading(false);
        }
    }


    return { responseData, error, isLoading, registerUser };
};

export default useUserRegistration;
