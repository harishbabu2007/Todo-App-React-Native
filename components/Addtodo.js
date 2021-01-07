import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Addtodo = ({ addFunc }) => {
  const [text, setText] = useState();

  const InputEvent = (val) => {
    setText(val);
  };

  return (
    <View style={styles.addtodo}>
      <TextInput
        style={styles.input}
        placeholder="Type Todo Here ..."
        onChangeText={InputEvent}
        value={text}
      />
      <View style={styles.center}>
        <TouchableOpacity
          style={styles.addtodo__btn}
          onPress={() => {
            addFunc(text);
            setText("");
          }}
        >
          <Text style={styles.addtodo__btn_text}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addtodo: {
    marginTop: 30,
  },
  input: {
    backgroundColor: "#2C3E50",
    width: 300,
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderWidth: 2,
    borderBottomColor: "black",
    borderLeftColor: "#2C3E50",
    borderRightColor: "#2C3E50",
    borderTopColor: "#2C3E50",
    color: "#fff",
  },
  addtodo__btn: {
    backgroundColor: "coral",
    marginTop: 20,
    width: 150,
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
  center: {
    alignItems: "center",
  },
  addtodo__btn_text: {
    color: "white",
    fontSize: 20,
  },
});

export default Addtodo;
