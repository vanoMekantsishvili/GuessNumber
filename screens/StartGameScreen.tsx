import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard,  } from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import Colors from '../constants/Colors'

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState<string>('')
  const [confirmed, setConfirmed] = useState<boolean>(false)
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>()

  const numberInputHandler = (inputText: string) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const confirmInputHandler = () => {
    let chosenNumber = parseInt(enteredValue)

    if(chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
      return
    }

    setConfirmed(true)
    setEnteredValue('')
    setSelectedNumber(chosenNumber)
  }

  return (
    <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss()}}>
      <View style={styles.screen}>
      <Text>Start a new game</Text> 
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <Input 
          width={50} 
          style={styles.input}  
          blurOnSubmit 
          autoCapitalize='none' 
          autoCorrect={false} 
          keyboardType='number-pad' 
          maxLength={2}
          value={enteredValue}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Reset' onPress={resetInputHandler} color={Colors.secondary} ></Button>
          </View>
          <View style={styles.button}>
            <Button title='Confirm' onPress={confirmInputHandler} color={Colors.primary}></Button>
          </View>
        </View>
      </Card>
      { confirmed ? <Text>{selectedNumber}</Text> : null}
    </View>
    </TouchableWithoutFeedback>
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
  input: {
    textAlign: 'center'
  },
  button: {
    width: 100
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  }
}) 
