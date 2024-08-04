import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInput = (textValue) => {
    setGoalText(textValue);
  };

  const addGoal = () => {
    setGoals((currentGoals) => [...currentGoals, goalText]);
    setGoalText("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputCont}>
        <TextInput
          style={styles.input}
          placeholder="Your course goal!"
          onChangeText={goalInput}
        />
        <Button title="Add Goal" onPress={addGoal} />
      </View>
      <View style={styles.goalsCont}>
        {goals.map((goal) => (
          <Text key={goal}>{goal}</Text>
        ))}
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
  inputCont: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 8,
  },
  goalsCont: {
    flex: 4,
  },
});
