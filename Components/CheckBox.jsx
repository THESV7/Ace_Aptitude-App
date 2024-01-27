import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
const CheckBox = ({ data, checked, onChange }) => {
    const handleCheck = () => {
        if (checked) {
            onChange(''); // Uncheck the checkbox if it's already checked
        } else {
            onChange(data); // Check the checkbox
        }
    };
    return (
        <>
            <View style={{display:'flex',flexDirection:'row',gap:4,alignItems:'center'}}>
                <TouchableOpacity onPress={handleCheck}>
                    <View style={{ borderColor: checked ? '#6674CC':'#f3f2f4', backgroundColor: checked ? '#6674CC':'transparent', width: 25, height: 25, borderWidth: 2, borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                        {checked && <AntDesign name="check" size={16} color="white" />}
                    </View>
                </TouchableOpacity>
                <Text style={{ color: '#a9aeb7', fontWeight: '600', fontSize: 18, marginRight: 20 }}>{data}</Text>
            </View>
        </>
    )
}

export default CheckBox

const styles = StyleSheet.create({})