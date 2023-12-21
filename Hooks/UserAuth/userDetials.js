import { useState } from 'react';

const useUserDetails = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getUserDetails = async (userId) => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://192.168.0.103:5000/api/userDetails?id=${userId}`);

            if (!response.ok) {
                throw new Error('User already registered');
            }
            const data = await response.json();
            const sortedData = data.sort((a, b) => b.totalcoins - a.totalcoins);
            setResponseData(sortedData);
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

    return { responseData, error, isLoading, getUserDetails, clearData };
};

export default useUserDetails;
