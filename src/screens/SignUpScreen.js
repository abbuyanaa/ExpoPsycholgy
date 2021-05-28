import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MyButton from "../components/MyButton";
import { primaryColor } from "../components/MyColors";
import MyInput from "../components/MyInput";

export default function SignUpScreen() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 100,
        marginBottom: 80,
      }}
    >
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Image
          source={require("../images/logo.png")}
          style={{ width: 150, height: 150 }}
        />
        <MyInput placeholder="Xэрэглэгчийн нэр" />
        <MyInput placeholder="И-мэйл" />
        <MyInput placeholder="Шинэ нууц үг" />
        <MyInput placeholder="Баталгаажуулах нууц үг" />
        <MyButton text="Бүртгүүлэх" />
      </View>
      <View style={{ flexDirection: "column", alignItems: "center" }}>
        <Text
          style={{
            color: primaryColor,
            width: 120,
            textAlign: "center",
            fontSize: 10,
          }}
        >
          Холбоос ашиглах бүртгүүлэх
        </Text>
        <View
          style={{
            width: 180,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <Image
            source={require("../images/logo.png")}
            style={{ width: 50, height: 50 }}
          />
          <Image
            source={require("../images/logo.png")}
            style={{ width: 50, height: 50 }}
          />
          <Image
            source={require("../images/logo.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
      </View>
    </View>
  );
}
