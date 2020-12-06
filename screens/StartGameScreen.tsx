import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import Colors from '../constants/Colors'
import GameScreen from '../screens/GameScreen'
import GameOverScreen from '../screens/GameOverScreen'

interface StartGameProps {
  onSelectGame(argOne: number): void
}

const StartGameScreen = ({onSelectGame}: StartGameProps) => {
  const [enteredValue, setEnteredValue] = useState<string>('')
  const [confirmed, setConfirmed] = useState<boolean>(false)
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>()
  const [userNumber, setUserNumber] = useState<number | undefined>()
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const numberInputHandler = (inputText: string) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }

  const resetInputHandler = () => {
    setEnteredValue('')
    setConfirmed(false)
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(undefined);
    setSelectedNumber(undefined);
  };

  const confirmInputHandler = () => {
    let chosenNumber = parseInt(enteredValue)

    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!', 
        'Number has to be between 1 and 99.', 
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      )
      return
    }

    setConfirmed(true)
    setEnteredValue('')
    setSelectedNumber(chosenNumber)
    Keyboard.dismiss()
  }

  let confirmedOutput = null
  if(confirmed && selectedNumber) {
    confirmedOutput = (
      <Card style={styles.summeryContainer}>
        <Text>You selected number:</Text>
        <NumberContainer selectedNumber={selectedNumber}/>
        <Button title="START GAME" onPress={() => setUserNumber(selectedNumber)}/>
      </Card>
    )
  }

  if(guessRounds > 0 ) {
    return <GameOverScreen 
      roundsNumber={guessRounds} 
      userNumber={userNumber} 
      onRestart={() => {
        configureNewGameHandler()
      }} 
    />
  }

  if(userNumber && guessRounds <= 0) {
    return <GameScreen userChoice={userNumber} onGameOver={(rounds)=>setGuessRounds(rounds)}/>
  }

  return (
    <TouchableWithoutFeedback onPress={()=> {Keyboard.dismiss()}}>
      <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!</Text> 
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
      { confirmedOutput }
    </View>
    </TouchableWithoutFeedback>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold'
  },
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
  },
  summeryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
}) 
