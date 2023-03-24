import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FoodItem from "./components/FoodItem";
import FoodList from "./components/FoodList";

export default function App() {
  return (
    <View style={styles.container}>
      <FoodList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
