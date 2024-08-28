import { useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
export default function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  const goalInput = (textValue) => {
    setGoalText(textValue);
  };

  const addGoal = () => {
    props.addGoal(goalText);
    setGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputCont}>
        <TextInput
          style={styles.input}
          placeholder="Your course goal!"
          onChangeText={goalInput}
          value={goalText}
        />
        <View style={styles.buttonCont}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputCont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    padding: 8,
  },
  buttonCont: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
