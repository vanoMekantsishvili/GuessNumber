import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface HeaderProps {
  title: string
}

export const Header = ({title}: HeaderProps) => {
  return (
    <View style={style.header}>
      <Text style={style.headerTitle}>{title}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'black',
    fontSize: 18
  }
})