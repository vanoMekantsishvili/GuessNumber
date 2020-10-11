import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { Button, FlatList } from 'react-native';
import AddGoal from '../components/AddGoal'
import ListItem from '../components/ListItem'

export interface GoalInterface {
  id: string,
  value: string
}

// Practice - Add and remove items from the list.
export default function TabOneScreen() {
  
  const [courseGoals, setCourseGoals] = useState<GoalInterface[]>([])
  const [isAddMode, setIsAddMode] = useState<boolean>(false);

  const onGoalDelete = (goalId: string) => {
    setCourseGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId))
  }

  return ( 
    <View style={styles.container}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <AddGoal
          visible={isAddMode}
          addGoal={(newGoal) => {
            setCourseGoals(currentGoals => [...currentGoals, newGoal])
            setIsAddMode(false);
          } }
          onCancel={() => {
            console.log("CANCEL");
            setIsAddMode(false)
          } }
        />

        <FlatList
          keyExtractor={item => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <ListItem id={itemData.item.id} value={itemData.item.value} onDelete={onGoalDelete}/>
          )}
        />

        {/* <ScrollView>
          {courseGoals.map(goal => <View key={goal}><Text>{goal}</Text></View>)}
        </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
