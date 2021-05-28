import React from "react";
import { StyleSheet, Text, View, Switch } from "react-native";
import { Feather } from "@expo/vector-icons";
import { primaryColor, textColor } from "../components/MyColors";

export default function SettingsScreen() {
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ marginTop: 20, marginLeft: 30, marginRight: 30 }}>
        <Text style={{ color: primaryColor, fontSize: 30 }}>Тохиргоо</Text>
      </View>
      <View style={styles.bg}>
        <View style={styles.tools}>
          <Text style={styles.text}>Харанхуй горим</Text>
          <Switch value={false} trackColor={{ true: primaryColor }} />
        </View>
        <View style={styles.tools}>
          <Text style={styles.text}>Нууцлал</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>Off</Text>
            <Feather name="chevron-right" size={24} color={textColor} />
          </View>
        </View>
      </View>
      <View style={styles.bg}>
        <View style={styles.tools}>
          <Text style={styles.text}>Программын дуу</Text>
          <Switch value={true} trackColor={{ true: "primaryColor" }} />
        </View>
        <View style={styles.tools}>
          <Text style={styles.text}>Мэдээлэл</Text>
          <Feather name="chevron-right" size={24} color={textColor} />
        </View>
      </View>
      <View style={{ marginTop: 20, marginLeft: 30, marginRight: 30 }}>
        <Text style={{ color: primaryColor, fontSize: 30 }}>Аппликэйшн</Text>
      </View>
      <View style={styles.bg}>
        <View style={styles.tools}>
          <Text style={styles.text}>Дээд зэргийн хувилбар луу шилжих</Text>
          <Feather name="chevron-right" size={24} color={textColor} />
        </View>
        <View style={styles.tools}>
          <Text style={styles.text}>Захиалгын мэдээлэл</Text>
          <Feather name="chevron-right" size={24} color={textColor} />
        </View>
        <View style={styles.tools}>
          <Text style={styles.text}>Тухай</Text>
          <Feather name="chevron-right" size={24} color={textColor} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flexDirection: "column",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: textColor,
    borderBottomColor: textColor,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
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
