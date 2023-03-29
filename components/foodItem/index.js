import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";
import { useFonts, Alegreya_400Regular } from '@expo-google-fonts/alegreya';

const FoodItem = (props) => {

  let [fontsLoaded] = useFonts({
    Alegreya_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  const {name, price, image, info} = props.food;

  return (
    <View style={styles.foodContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={[styles.title, {fontFamily: "Alegreya_400Regular"}, {color: "#171A20"}]}>{name}</Text>
        <Text style={styles.subtitle}>{price}</Text>
        <Text style={styles.info}>{info}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content="Order Now"
          onPress={() => {
            console.warn("Order now was pressed");
          }}
        />
        <StyledButton
          type="Secondary"
          content="View Menu"
          onPress={() => {
            console.warn("View menu was pressed");
          }}
        />
      </View>
    </View>
  );
}

export default FoodItem;
