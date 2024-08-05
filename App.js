import { nanoid } from "nanoid";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInput = (textValue) => {
    setGoalText(textValue);
  };

  const addGoal = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      {
        text: goalText,
        // key: Math.random().toString(),
      },
    ]);
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
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
          keyExtractor={() => nanoid()}
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
  goalItem: {
    padding: 8,
    margin: 8,
    borderColor: "#5e0acc",
    borderWidth: 1,
    borderRadius: 5,
  },
  goalText: {
    color: "#5e0acc",
  },
});
