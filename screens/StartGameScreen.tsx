import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Start a new game</Text>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  }
})
