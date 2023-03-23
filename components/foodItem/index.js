import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";

export default function FoodItem() {
  return (
    <View style={styles.foodContainer}>
      <ImageBackground
        source={require("../../assets/images/sisigTacoCombo.jpg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Sisig Tacos</Text>
        <Text style={styles.subtitle}>Starting at $14.99</Text>
      </View>
    </View>
  );
}
