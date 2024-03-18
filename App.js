import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// components
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goal) => {
    setGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), goal }]);
  }

  return (
    <View style={styles.container}>
      <GoalInput addGoal={addGoalHandler}/>
      <View>
        {goals.map(item => {
          return (
            <GoalItem key={item.key} goal={item.goal}/>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
