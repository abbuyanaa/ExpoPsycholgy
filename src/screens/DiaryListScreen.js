import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { lightColor, primaryColor } from "../components/MyColors";
import { Feather } from "@expo/vector-icons";

export default function DiaryListScreen() {
  const data = [
    {
      id: 1,
      title: "Миний оруулсан бичлэг",
      subtitle: "68mb",
      icon: "play-circle",
    },
    { id: 2, title: "Миний хадгалсан дуу", subtitle: "86kb", icon: "music" },
    {
      id: 3,
      title: "Миний оруулсан зураг",
      subtitle: "152 зураг",
      icon: "camera",
    },
    {
      id: 4,
      title: "Миний бичсэн тэмдэглэл",
      subtitle: "1499 үг",
      icon: "camera",
    },
    {
      id: 5,
      title: "Миний оруулсан дурсамж",
      subtitle: "423 үг",
      icon: "image",
    },
    {
      id: 6,
      title: "Миний бичсэн тэмдэглэл",
      subtitle: "423 үг",
      icon: "camera",
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.item}>
              <View style={{ flex: 1 }}>
                <Text style={{ color: primaryColor, fontSize: 18 }}>
                  {item.title}
                </Text>
                <Text style={{ color: "#333", fontSize: 14 }}>
                  {item.subtitle}
                </Text>
              </View>
              {item.icon && (
                <Feather name={item.icon} size={32} color={primaryColor} />
              )}
            </View>
          );
        }}
        style={{ margin: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
});
