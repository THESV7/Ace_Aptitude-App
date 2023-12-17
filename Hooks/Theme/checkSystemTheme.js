import { Appearance } from "react-native"

export default useCheckTheme = ()=>{

    const CurrentTheme = Appearance.getColorScheme()
    return{
        CurrentTheme
    }
}