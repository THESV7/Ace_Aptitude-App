import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../../Components/CustomeHeader/CustomHeader'
import RoadMapCard from '../../Components/RoadMapComponents/RoadMapCard'
import roadmaps from '../../constants/RoadMapData'
import RoadMapDetailModal from '../../Components/RoadMapComponents/RoadMapDetailModal'
import StrokeImage from '../../assets/stroke-line.png'
const RoadMapScreen = () => {
  const [visibility, setVisibilty] = useState(false)
  const [modelData,setModelData]=useState([])
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f8fa' }}>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={{ flex: 1 }}>
          <CustomHeader title={"Road Map"} buttonNone />
          {/* <Image source={StrokeImage} style={{height:20,width:100,bottom:20,left:20}}/> */}
          <View style={{ paddingHorizontal: 16, paddingBottom: '20%', flex: 1, gap: 10 }}>
            {
              roadmaps.map((roadmapData) => (
                < RoadMapCard roadmapData={roadmapData} key={roadmapData.exam} setModelToogle={(visibility)=>setVisibilty(visibility)} setModelData={(data)=>setModelData(data)}/>
              ))
            }
          </View>
        </View>
        <RoadMapDetailModal visibility={visibility} OnClose={(data) => setVisibilty(data)} modelData={modelData} clear={()=>setModelData([])}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default RoadMapScreen

const styles = StyleSheet.create({})