import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import General from '../assets/General.png'
import Programing from '../assets/Programming.png'
import Verbal from '../assets/Verbal.png'
import Logical_Reasoning from '../assets/Logical.png'
import CategoryButton from '../Components/CategoryButton'
import useCustomNavigation from '../Hooks/Navigation/Navigate'
import TextSkeleton from '../Components/SkeletonComponents/TextSkeleton'
import ViewSkeleton from '../Components/SkeletonComponents/ViewSkeleton'

const CategorySeletion = ({ isLoading }) => {

    const { navigate } = useCustomNavigation()
    const Category = [
        {
            category: 'General',
            icon: General,
            bgColor: '#7b78fc',
        },
        {
            category: 'Programing',
            icon: Programing,
            bgColor: '#4285fa',
        },
        {
            category: 'Verbal',
            icon: Verbal,
            bgColor: '#f89f93',
        },
        {
            category: 'Logical',
            icon: Logical_Reasoning,
            bgColor: '#43536b',
        },
    ]
    return (
        <View style={{ paddingTop: 20, paddingVertical: 10, flex: 1, marginHorizontal: 20 }}>
            <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                {isLoading ?
                    <>
                        <TextSkeleton width={100} height={18}/>
                        <TextSkeleton width={60} height={18}/>
                    </>
                    :
                    <>
                        <Text style={{ fontSize: 18, fontWeight: '700' }}>Categories</Text>
                        <Text style={{ fontSize: 14, fontWeight: '700', color: '#6674CC' }} onPress={() => navigate('Test')}>View all</Text>
                    </>
                }
            </View>
            <View>
                {
                    isLoading ?
                        <View style={{paddingVertical:10}}>
                            <ViewSkeleton width={'100%'} height={80} />
                        </View>
                        :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            {
                                Category.map((category, index) => (
                                    <CategoryButton category={category} key={index} />
                                ))
                            }
                        </View>
                }
            </View>
        </View>
    )
}

export default CategorySeletion

const styles = StyleSheet.create({})
