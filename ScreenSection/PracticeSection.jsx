import { Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import filterIcon from '../assets/filterIcon.png';
import TestCard from '../Components/TestCard';
import usePracticeTestDetails from '../Hooks/TestDetails/PracticeTestDetails';
import { useCallback, useEffect, useState } from 'react';
import ModalFilter from '../Components/ModalFilter';
import SkeletonTestCard from '../Components/SkeletonComponents/SkeletonTestCard';
import useCheckTheme from '../Hooks/Theme/checkSystemTheme'
import { useFocusEffect } from '@react-navigation/native';
import useGetSearch from '../Hooks/TestDetails/getSearch';
import debounce from '../Hooks/Utiles/debounce';
const PracticeSection = () => {
    const [filterToggle, setFilterToggle] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [dataFetched, setDataFetched] = useState(null); // State to track data fetching
    const { responseData, error, setIsLoading, isLoading, getPracticeTestDetails } = usePracticeTestDetails();
    const { serachResult, getSearch, serachLoading } = useGetSearch()
    const { CurrentTheme } = useCheckTheme()


    useFocusEffect(
        useCallback(() => {
            const fetchTestDetails = async () => {
                await getPracticeTestDetails();
            };
            fetchTestDetails();

            return () => { setDataFetched(null) }
        }, [])
    );



    useEffect(() => {
        if (!isLoading) {
            setDataFetched(responseData)
        }
    }, [isLoading])


    useEffect(()=>{
        if(!serachLoading){
            if(searchQuery==''){
                getPracticeTestDetails()
            }
            else{
                setDataFetched(serachResult)
            }
        }
    },[serachLoading])


    const handleFilterToggle = () => {
        setFilterToggle(!filterToggle)
    }

    const debouncedSearch = debounce(getSearch, 300);
    // Handler for input change
    const handleInputChange = (text) => {
        setSearchQuery(text);
        // Invoke the debounced search function
        debouncedSearch(text);
    };

    return (
        <>
            <View style={styles.PracticeContainer}>
                <View style={styles.FilterContainer}>
                    <View style={styles.inputWrapper}>
                        <Ionicons name="search-outline" size={24} color="black" style={styles.searchIcon} />
                        <TextInput
                            style={styles.textInput}
                            onChangeText={handleInputChange}
                            value={searchQuery}
                            placeholder='Search the Topic'
                        />
                    </View>
                    <TouchableOpacity onPress={handleFilterToggle}>
                        <View style={styles.filterIconWrapper}>
                            <Image source={filterIcon} style={styles.filterIcon} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.CardContainer}>
                    {
                        isLoading ? ( // Display skeleton loader while data is loading
                            <SkeletonTestCard count={10} />
                        ) : (
                            dataFetched?.map((data) => <TestCard testData={data} key={data._id} />)
                        )}
                </View>
            </View>
            <ModalFilter visibility={filterToggle} OnClose={(toggle) => setFilterToggle(toggle)} setFilteredData={(data) => setDataFetched(data)} setIsLoading={(data) => setIsLoading(data)} clear={() => getPracticeTestDetails()} />
        </>
    )
}

export default PracticeSection

const styles = StyleSheet.create({
    PracticeContainer: {
        flex: 1
    },
    FilterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingVertical: 10
    },
    inputWrapper: {
        flex: 2,
        flexDirection: 'row',
        gap: 5,
        position: 'relative',
        paddingHorizontal: 15,
        paddingVertical: 15,
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 2,
    },
    searchIcon: {
        flex: 0
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        fontWeight: '700'
    },
    filterIconWrapper: {
        flex: 0,
        padding: 10,
        backgroundColor: '#e9e9ff',
        borderRadius: 10
    },
    filterIcon: {
        width: 35,
        height: 35
    },
    CardContainer: {}
})
