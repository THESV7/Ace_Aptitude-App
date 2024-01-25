import { useState } from 'react';
import { BASE_URL } from '@env';
const useLeaderBoardDetails = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getLeaderBoardDetails = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://ace-aptitude-v1.onrender.com/api/leaderboard`);

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

    return { responseData, error, isLoading, getLeaderBoardDetails, clearData };
};

export default useLeaderBoardDetails;
