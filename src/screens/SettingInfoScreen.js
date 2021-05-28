import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { primaryColor, textColor } from "../components/MyColors";

const MySwitch = (props) => {
  return (
    <View style={styles.tools}>
      <Text style={styles.text}>{props.label}</Text>
      <Switch value={props.value} trackColor={{ true: primaryColor }} />
    </View>
  );
};

export default function SettingInfoScreen() {
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ marginTop: 20, marginLeft: 30, marginRight: 30 }}>
        <Text style={{ color: primaryColor, fontSize: 30 }}>Тохиргоо</Text>
      </View>
      <View style={styles.bg}>
        <MySwitch label="Мэдээ" value={false} />
        <MySwitch label="Хоололт" value={false} />
        <MySwitch label="Дасгал" value={true} />
        <MySwitch label="Тест" value={false} />
        <MySwitch label="Чат" value={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: textColor,
    borderRadius: 10,
    margin: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  tools: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: textColor,
    fontSize: 18,
  },
});
