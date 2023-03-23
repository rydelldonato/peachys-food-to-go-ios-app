import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

export default function StyledButton(props) {
  
  const {type, content, onPress} = props

  const backgroundColor = type === "primary" ? "#6b9265" : "#cfdbd5";
  const textColor = type === "primary" ? "white" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => {
          onPress();
        }}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
}
