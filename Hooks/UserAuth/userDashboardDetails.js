import { useState } from 'react';

const useDashboardDetails = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getDashboardDetails = async (id) => {
        setIsLoading(true);
        try {
            // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint for user registration
            const response = await fetch(`https://ace-aptitude-new.onrender.com/api/dashboard?id=${id}`);

            if (!response.ok) {
                throw new Error('dashborad details not fetched');
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

    
    const clearData = () => {
        setResponseData(null);
        setIsLoading(false);
        setError(null);
    };


    return { dashBoardData:responseData, error, isLoading, getDashboardDetails , clearData};
};

export default useDashboardDetails;
