import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Start a new game</Text>
      <View style={styles.inputContainer}>
        <Text>Select a number</Text>
        <TextInput/>
        <View style={styles.buttonContainer}>
          <Button title='Reset' onPress={() => {}}></Button>
          <Button title='Confirm' onPress={() => {}}></Button>
        </View>
      </View>
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
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5, // To display shadow for Android!!!
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
}) 
