
import { useState } from "react";
import { BASE_URL } from '@env';
const useUserLogin = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const userLogin = async (email,password) => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://ace-aptitude-new.onrender.com/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email,password}),
            })

            if(response.ok){
                const data = await response.json()
                setResponseData(data)
                setIsLoading(false)
            }
            else{
                throw new Error('User Can not login');
            }
        } catch (error) {
            setError(error)
            setIsLoading(false)
        }
    }

    const clearData = () => {
        setResponseData(null);
        setIsLoading(false);
        setError(null);
    };
    return { responseData, isLoading, error,clearData, userLogin }
}

export default useUserLogin;