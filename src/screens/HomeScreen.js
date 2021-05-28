import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { lightColor, primaryColor, waterColor } from "../components/MyColors";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, padding: 40 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: 80,
          }}
        >
          <Text style={{ fontSize: 24, color: lightColor }}>
            Сайн уу Соёлоо
          </Text>
          <Text style={{ fontSize: 26 }}>Би өнөөдөр</Text>
        </View>
        <Image
          source={require("../images/logo.png")}
          style={{ width: 60, height: 60 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Text>Гайхалтай</Text>
        <Text>Энгийн</Text>
        <Text>Гунигтай</Text>
        <Text>Стресстэй</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Text style={styles.btn}>Мэдээ</Text>
        <Text style={styles.btn}>Сэтгэлзүйн тест</Text>
      </View>
      <View>
        <Text>Mentalist</Text>
        <Image
          source={require("../images/logo.png")}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "48%",
    backgroundColor: primaryColor,
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
    padding: 5,
    borderRadius: 6,
  },
});
