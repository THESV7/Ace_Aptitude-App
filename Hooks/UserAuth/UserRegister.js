import { useState } from 'react';

const useUserRegistration = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const registerUser = async (Name, email, password, confirmpassword) => {
        setIsLoading(true);
        // if (password !== confirmpassword) {
        //     return { responseData, error, isLoading, registerUser }
        // }
        try {
            // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint for user registration
            const response = await fetch('http://192.168.0.103:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ Name: Name, email: email, password: password }),
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
            setError(error);
            setIsLoading(false);
        }
    }


    return { responseData, error, isLoading, registerUser };
};

export default useUserRegistration;
