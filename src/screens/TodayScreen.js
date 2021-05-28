import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { textColor } from "../components/MyColors";

export default function TodayScreen() {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          marginTop: 20,
          marginBottom: 20,
          marginLeft: 10,
          marginRight: 10,
          borderWidth: 1,
          borderColor: textColor,
          width: screenWidth - 100,
          height: screenHeight - 140,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          padding: 80,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 3.0,
          shadowRadius: 5,
          elevation: 5,
        }}
      >
        <Image
          source={require("../images/today.jpg")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            marginBottom: 40,
          }}
        />
        <Text style={{ color: textColor, fontSize: 30, textAlign: "center" }}>
          Өөртөө итгэ. Итгэл бол асар их хүч. Тэр ч бүү хэл итгэлд ид шидийн хүч
          бий.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
