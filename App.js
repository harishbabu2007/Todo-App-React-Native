import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert, ScrollView } from "react-native";
import Header from "./components/Header";
import Addtodo from "./components/Addtodo";
import Items from "./components/Items";
import Footer from "./components/Footer";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [keys, setKeys] = useState(1);

  const AddTodo = (text) => {
    if (text.trim().length > 3) {
      setTodos((prev) => {
        return [
          ...prev,
          {
            text: text.trim(),
            key: keys,
          },
        ];
      });
      setKeys(keys + 1);
    } else {
      Alert.alert("OOPS!", "Todo has to be more than 3 chracters", [
        {
          text: "Understood",
          onPress: () => {},
        },
      ]);
    }
  };

  const DelteTodo = (key) => {
    setTodos(todos.filter((item) => item.key !== key));
  };

  return (
    <React.Fragment>
      <Header />
      <View style={styles.container}>
        <Addtodo addFunc={AddTodo} />
        <View style={styles.todos}>
          <FlatList
            data={todos}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => {
              return (
                <Items text={item.text} keyid={item.key} delfunc={DelteTodo} />
              );
            }}
          />
        </View>
      </View>
      <Footer />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2C3E50",
    alignItems: "center",
  },
  todos: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
});
