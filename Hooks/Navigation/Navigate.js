import { useNavigation } from "@react-navigation/native";

const useCustomNavigation = ()=>{
    const navigation = useNavigation()
    const navigate = (route)=>{
        navigation.navigate(route)
    }

    return{
        navigate
    }
}   

export default useCustomNavigation;