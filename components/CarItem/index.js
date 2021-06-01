import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";
const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("custom order pressed");
          }}
        />
        <StyledButton
          type="secondary"
          content={"Place Order"}
          onPress={() => {
            console.warn("place order pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
