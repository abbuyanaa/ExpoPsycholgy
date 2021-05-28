import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MyButton from "../components/MyButton";
import { primaryColor } from "../components/MyColors";
import MyInput from "../components/MyInput";

const SignInScreen = ({ navigation }) => {
  const LoginHandler = () => {
    navigation.navigate("Home");
  };

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
        <MyInput placeholder="Нууц үг" />
        <MyButton text="Нэвтрэх" onPress={LoginHandler} />
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
};

export default SignInScreen;

const styles = StyleSheet.create({});
