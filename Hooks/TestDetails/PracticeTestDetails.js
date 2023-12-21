import { useState } from "react";


const usePracticeTestDetails = () => {

    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getPracticeTestDetails = async () => {
        setIsLoading(true)
        try {
            const resposnse = await fetch('https://ace-aptitude.onrender.com/api/Allcategory')
            if (!resposnse.ok) {
                throw new Error('Details not fetched');
            }
            else {
                const PracticeTestDetails = await resposnse.json();
                setResponseData(PracticeTestDetails)
                setIsLoading(false)
            }
        } catch (error) {
            console.log("Error", error)
            setError(error);
            setIsLoading(false);
        }
        finally {
            setIsLoading(false);
        }
    }


    const clearData = () => {
        setResponseData(null);
        setIsLoading(false);
        setError(null);
    };

    return { responseData, error, isLoading, getPracticeTestDetails ,clearData}
}

export default usePracticeTestDetails;