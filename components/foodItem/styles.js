import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  foodContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    marginTop: "20%",
    width: "100%",
    alignItems: "center",
  },
  title: {
    color: "#171A20",
    fontSize: 40,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  info: {
    textDecorationLine: "underline",
  },
  image: {
    width: "100%",
    height: "100%",
    // resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 90,
    width: "100%",
  }
});

export default styles;
