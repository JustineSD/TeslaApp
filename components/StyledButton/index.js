import React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import styles from "./styles";

const StyledButton = (props) => {
  const { type, content, onPress } = props;
  const backgroundColor = type === "primary" ? "#171a20cc" : "#ffffffa6";
  const fontColor = type === "primary" ? "white" : "#171a20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: fontColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
