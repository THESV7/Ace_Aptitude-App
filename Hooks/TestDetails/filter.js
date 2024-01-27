import { useState } from "react";
const useFilter = ()=>{
    const [isLoading,setIsLoading]=useState(false)
    const [error , setError]=useState(null)
    const [responseData,setResponseData]=useState([])
    const getFilterData = async(difficulty,sortby,subtopic)=>{
        try {
            setIsLoading(true)
            let apiUrl = `http://192.168.0.104:5000/api/filter?${difficulty && `difficulty=${difficulty}`}&${sortby && `sortby=${sortby}`}&${subtopic && `subtopic=${subtopic}`}`
            const response = await fetch(apiUrl)

            if(response.ok){
                const data = await response.json()
                setResponseData(data.data);
                setIsLoading(false)
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
        getFilterData,
        isLoading,
        error,
        responseData
    }

}

export default useFilter;