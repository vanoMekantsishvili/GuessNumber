import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'

interface NumberContainerProps {
  selectedNumber: number
}

const NumberContainer = ({selectedNumber}: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number} >{selectedNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  number: {
    color: Colors.primary,
    fontSize: 22
  }
})

export default NumberContainer