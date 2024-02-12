import { useState } from "react";

const useForgetPassword = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const forgetPassword = async (email) => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://ace-aptitude-v1.onrender.com/api/forgetpassword?email=${email}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (response.ok) {
                const data = await response.json()
                setResponseData(data)
                setIsLoading(false)
            }
            else {
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
    return { responseData, isLoading, error, clearData, forgetPassword }
}

export default useForgetPassword;