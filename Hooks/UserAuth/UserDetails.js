import AsyncStorage from "@react-native-async-storage/async-storage"

const useUserDetails =()=>{
    const handleUserAuthinticate = async () => {
        const details = await AsyncStorage.getItem('user')
        const isVerified = JSON.parse(details)
        return isVerified
    }

    return { handleUserAuthinticate }
}

export default useUserDetails;