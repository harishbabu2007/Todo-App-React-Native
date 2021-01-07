import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footer__text}>Made By Harish</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "coral",
    alignItems: "center",
  },
  footer__text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Footer;
