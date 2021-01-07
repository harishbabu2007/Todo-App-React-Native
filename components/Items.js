import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Items = ({ text, keyid, delfunc }) => {
  return (
    <TouchableOpacity
      style={styles.todo}
      onPress={() => {
        delfunc(keyid);
      }}
    >
      <Text style={styles.todo_text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    backgroundColor: "coral",
    width: 300,
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  todo_text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Items;
