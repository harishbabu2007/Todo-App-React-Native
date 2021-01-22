import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Items = ({ text, keyid, delfunc }) => {
  return (
    <TouchableOpacity
      style={styles.todo}
      onPress={() => {
        delfunc(keyid);
      }}
    >
      <Entypo name="circle-with-cross" size={24} color="black" />
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
    flexDirection: "row",
  },
  todo_text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
  },
});

export default Items;
