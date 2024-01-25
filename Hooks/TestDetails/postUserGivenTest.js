
import { useEffect, useState } from "react";
import { BASE_URL } from '@env';
import usegetAsyncStorage from "../UserAuth/getAsyncStorageDetails";
const usePostUserTest = () => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const userTestPost = async (data, coinCount) => {

        const { handleUserAuthinticate } = usegetAsyncStorage()
        const userDetails = await handleUserAuthinticate()
        const id = userDetails._id
        const requestData = {
            userId: id,
            tests: [
                data
            ],
            coins: coinCount
        }
        setIsLoading(true)
        try {
            const response = await fetch(`http://192.168.0.104:5000/api/tests`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
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
    return { responseData, isLoading, error, clearData, userTestPost }
}

export default usePostUserTest;