import React from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

interface InputProps extends TextInputProps {
  style?: any,
  width?: string | number
}

const Input = (props: InputProps) => {
  const {style, width} = props 
  return (
    <TextInput {...props} style={{...styles.input, ...style, width: width}}/>
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }
})
