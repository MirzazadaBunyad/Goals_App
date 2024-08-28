import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoal = (goalText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      {
        text: goalText,
        id: Math.random().toString(),
      },
    ]);
    endAddGoalHandler();
  };

  const deleteGoal = (id) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };
  return (
    <View style={styles.container}>
      <Button
        title="Add New Goal"
        onPress={startAddGoalHandler}
        color="#5e0acc"
      />
      <GoalInput
        visible={modalIsVisible}
        addGoal={addGoal}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsCont}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDelete={deleteGoal}
              />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsCont: {
    flex: 4,
  },
});
