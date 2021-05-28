import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { primaryColor } from "./MyColors";

const MyButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 250,
        backgroundColor: primaryColor,
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;
