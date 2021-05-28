import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { primaryColor, textColor } from "../components/MyColors";

export default function SettingScreen() {
  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ marginTop: 20, marginLeft: 30, marginRight: 30 }}>
        <Text style={{ color: primaryColor, fontSize: 30 }}>Тохиргоо</Text>
      </View>
      <View style={styles.bg}>
        <View style={styles.tools}>
          <Text style={styles.text}>Нэр</Text>
          <Feather name="chevron-right" size={24} color={textColor} />
        </View>
        <View style={styles.tools}>
          <Text style={styles.text}>Хүйс</Text>
          <Feather name="chevron-right" size={24} color={textColor} />
        </View>
        <View style={styles.tools}>
          <Text style={styles.text}>И-тэйл</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>name@email.com</Text>
            <Feather name="chevron-right" size={24} color={textColor} />
          </View>
        </View>
        <View style={styles.tools}>
          <Text style={styles.text}>Нууц үг</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>...</Text>
            <Feather name="chevron-right" size={24} color={textColor} />
          </View>
        </View>
        <View style={styles.tools}>
          <Text style={styles.text}>Гарах</Text>
          <Feather name="chevron-right" size={24} color={textColor} />
        </View>
      </View>
      <View style={styles.bg}>
        <View style={styles.tools}>
          <Text style={styles.text}>Нууцлал</Text>
          <Feather name="chevron-right" size={24} color={textColor} />
        </View>
        <View style={styles.tools}>
          <Text style={styles.text}>Үйлчилгээний нөхцөл</Text>
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
