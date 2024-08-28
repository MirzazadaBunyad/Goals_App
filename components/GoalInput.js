import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
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
        <Image
          style={styles.image}
          source={require("../assets/images/goal_target.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Your course goal!"
          onChangeText={goalInput}
          value={goalText}
        />
        <View style={styles.buttonCont}>
          <View style={styles.button}>
            <Button color="#385F7A" title="Add Goal" onPress={addGoal} />
          </View>
          <View style={styles.button}>
            <Button color="#B56576" title="Cancel" onPress={props.onCancel} />
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
    padding: 16,
    backgroundColor: "#C1E6EA",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#78A798",
    backgroundColor: "#8CC0B2",
    color: "white",
    borderRadius: 6,
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
