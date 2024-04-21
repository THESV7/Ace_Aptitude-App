import { useState } from "react"
const useGetSearch = ()=>{

    const [responseData,setResponse]=useState([])
    const [isLoading,setLoading]=useState(false)
    const getSearch = async(topic)=>{
        setLoading(true)
        try {
            //DON'T Change by base Url
            if(topic!== ''){
                const response = await fetch(`http://192.168.0.104:5000/api/search/${topic}`)
                if(response.ok){
                    const data = await response.json()
                    setResponse(data)
                    setLoading(false)
                }
                else{
                    const data = await response.json()
                    console.log(data)
                    setLoading(false)
                }
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return{
        serachResult:responseData,
        getSearch,
        serachLoading:isLoading,
    }
}

export default useGetSearch;