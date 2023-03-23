import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import FoodItem from "./components/FoodItem";

export default function App() {
  return (
    <View style={styles.container}>
      <FoodItem
        name="Sisig Tacos Combo"
        price="Starting from $14.99"
        image={require("./assets/images/sisigTacoCombo.jpg")}
      />
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
