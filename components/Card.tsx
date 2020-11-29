import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface CardProps {
  children: React.ReactNode,
  style?: any
}

const Card = ({children, style}: CardProps) => {
  return (
    <View style={{...styles.card, ...style}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 5, // To display shadow for Android!!!
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
})
