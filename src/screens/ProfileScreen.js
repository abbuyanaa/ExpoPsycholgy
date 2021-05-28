import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { primaryColor, textColor } from "../components/MyColors";

const Item = (props) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={require("../images/logo.png")}
        style={{ width: 30, height: 30 }}
      />
      <Text
        style={{
          alignSelf: "center",
          color: textColor,
          fontSize: 18,
          marginLeft: 5,
        }}
      >
        {props.text}
      </Text>
    </View>
  );
};
const Settings = (props) => {
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", marginRight: 10 }}
      onPress={props.onPress}
    >
      <Feather name={props.icon} size={24} color={primaryColor} />
      <Text
        style={{
          alignSelf: "center",
          color: textColor,
          fontSize: 18,
          marginLeft: 5,
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

const ProfileScreen = ({ navigation }) => {
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  const SettingsHandler = () => {
    navigation.navigate("Settings");
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          alignItems: "center",
          width: screenWidth,
          height: screenHeight,
        }}
      >
        <Image
          source={require("../images/profile.jpg")}
          style={{ width: 150, height: 150, borderRadius: 100 }}
        />
        <Text style={{ color: textColor, fontSize: 22 }}>Соёлоо</Text>
        <Text style={{ color: textColor, fontSize: 14 }}>@soyol</Text>
        <View
          style={{
            width: "80%",
            marginTop: 50,
          }}
        >
          <Item text="soyol@howto.mn" />
          <Item text="+976 88550364" />
          <Item text="Найзуудаа урих" />
        </View>
        <View style={{ width: "80%", marginTop: 50, flexDirection: "row" }}>
          <Settings text="Тохиргоо" icon="settings" onPress={SettingsHandler} />
          <Settings
            text="Гарах"
            icon="power"
            onPress={() => navigation.popToTop()}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
