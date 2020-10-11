import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

interface ListItemInterface {
  value: string,
  id: string,
  onDelete(id: string): void 
}

export default function ListItem({value, id, onDelete}: ListItemInterface) {
  return (
    <TouchableOpacity onPress={() => onDelete(id)}>
      <View style={styles.listItem}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
