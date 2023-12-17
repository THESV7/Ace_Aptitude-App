import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const CategoryButton = ({ category }) => {

    const navigation = useNavigation()
    const handleCategorySelect =()=>{
        navigation.navigate('Test', { selectedCategory: category.category })
    }
    return (
        <>
            <TouchableOpacity onPress={handleCategorySelect}>
                <View style={{ padding: 15, marginRight: 5, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ padding: 10, backgroundColor: category.bgColor, borderRadius: 10, justifyContent: 'center' }}>
                        <Image source={category.icon} style={{ width: 30, height: 30 }} />
                    </View>
                    <View style={{ marginTop: 8 }}>
                        <Text style={{ textAlign: 'center' }}>{category.category}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    )
}

export default CategoryButton

const styles = StyleSheet.create({})