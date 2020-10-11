import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Card from '../components/Card'

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Start a new game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput/>
        <View style={styles.buttonContainer}>
          <Button title='Reset' onPress={() => {}}></Button>
          <Button title='Confirm' onPress={() => {}}></Button>
        </View>
      </Card>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
}) 
