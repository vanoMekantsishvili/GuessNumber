import React, { useState } from 'react'
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native'
import { GoalInterface } from '../screens/TabOneScreen'

interface AddGoalProps {
  visible: boolean,
  addGoal(goal: GoalInterface): void,
  onCancel(): void
}

export default function AddGoal({visible, addGoal, onCancel}: AddGoalProps) {
  const [enterGoal, setEnteredGoal] = useState<string>('')

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Game name asd'
          style={styles.input}
          onChangeText={text => setEnteredGoal(text)} 
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={() =>{
              addGoal({ id: Math.random().toString(), value: enterGoal })
              setEnteredGoal('');
            }} />
          </View>
        </View> 
      </View>
    </Modal>
    
  )
}


const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});