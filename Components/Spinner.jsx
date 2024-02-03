import { StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native'
import React from 'react'

const Spinner = () => {
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={[styles.container, { height: windowHeight }]}>
      <ActivityIndicator size={'large'} color={'#6674cc'}/>
    </View>
  )
}

export default Spinner

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    // Add any additional text styles if needed
  },
})
