import { useState } from "react"
import usegetAsyncStorage from "./getAsyncStorageDetails"
import {BASE_URL} from '@env'
const useGetNotification = ()=>{

    const [responseData,setResponse]=useState([])
    const [isNotificationLoading,setLoading]=useState(false)
    const [notificationError, setNotificationError]=useState(null)
    const { handleUserAuthinticate } = usegetAsyncStorage();
    const getNotification = async()=>{
        setLoading(true)
        const userDetails = await handleUserAuthinticate()
        const userId = userDetails._id
        try {
            //DON'T Change by base Url
            const response = await fetch(`https://ace-aptitude-new.onrender.com/api/notifications/${userId}`)
            if(response.ok){
                const data = await response.json()
                setResponse(data.data.notifications)
                setLoading(false)
            }
            else{
                const data = await response.json()
                console.log(data)
                setLoading(false)
            }
            
        } catch (error) {
            console.log(error)
            setNotificationError(error)
            setLoading(false)
        }
    }

    return{
        responseData,
        getNotification,
        isNotificationLoading,
        notificationError
    }
}

export default useGetNotification;