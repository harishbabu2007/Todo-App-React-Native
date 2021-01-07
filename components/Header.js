import React from "react";
import { View, Text, StyleSheet } from "react-native";

const header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header__text}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
  },
  header__text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default header;
