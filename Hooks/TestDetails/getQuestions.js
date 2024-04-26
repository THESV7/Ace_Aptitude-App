import { useState } from "react";
import { BASE_URL } from '@env';
const useGetQuetions = ()=>{
    const [isLoading,setIsLoading]=useState(false)
    const [error , setError]=useState(null)
    const [responseData,setResponseData]=useState([])
    const getQuetions = async(category,NoOfQuestions,testType,difficulty)=>{
        try {
            setIsLoading(true)
            let apiUrl = ''
            if(testType==='Mock'){
                apiUrl=`https://ace-aptitude-new.onrender.com/api/getRandomQuestions/${NoOfQuestions}/${category}`
            }
            else{
                apiUrl=`https://ace-aptitude-new.onrender.com/api/practiceQuetions/${category}/${difficulty}`
            }
            const response = await fetch(apiUrl)

            if(response.ok){
                const data = await response.json()
                setIsLoading(false)
                setResponseData(data)
                // console.log(data)
            }
            else{
                setIsLoading(false)
            }
        } catch (error) {
            setIsLoading(false)
            setError(error)
            console.log(error)
        }
    }

    return{
        getQuetions,
        isQuestionsLoading:isLoading,
        error,
        responseData
    }

}

export default useGetQuetions;