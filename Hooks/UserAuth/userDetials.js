import { useState } from 'react';
import { BASE_URL } from '@env';
const useUserDetails = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getUserDetails = async (userId) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://ace-aptitude-v1.onrender.com/api/userDetails?id=${userId}`);

            if (!response.ok) {
                throw new Error('User already registered');
            }
            const data = await response.json();
            const userDetails = data.data
            setResponseData(userDetails)
            setIsLoading(false)
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const clearData = () => {
        setResponseData(null);
        setIsLoading(false);
        setError(null);
    };

    return { data:responseData, error, isUserLoading:isLoading, getUserDetails, clear:clearData };
};

export default useUserDetails;
