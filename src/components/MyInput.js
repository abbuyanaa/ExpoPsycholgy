import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { lightColor } from "./MyColors";

const MyInput = ({ placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor="#ccc"
      style={{
        width: 220,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 5,
        marginTop: 20,
        fontSize: 14,
      }}
    />
  );
};

export default MyInput;

const styles = StyleSheet.create({});
