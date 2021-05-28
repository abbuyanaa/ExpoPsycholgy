import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { primaryColor, textColor } from "../components/MyColors";

const categories = [
  { id: 1, name: "Хөлбөмбөг" },
  { id: 2, name: "Сагс" },
  { id: 3, name: "ММА" },
  { id: 4, name: "Шатар" },
];

const data = [
  {
    id: 1,
    img: require("../images/sports.jpg"),
    title: "Спорт",
    content: "Өөрт таалагдсан спортоор сонирхоод хичээллээд үзээрэй",
  },
  {
    id: 2,
    img: require("../images/sports.jpg"),
    title: "Спорт",
    content: "Өөрт таалагдсан спортоор сонирхоод хичээллээд үзээрэй",
  },
];

const sports = [
  {
    id: 1,
    img: require("../images/sport1.jpg"),
    content: "Хөдөлгөөний дутагдалд орохгүй.",
    time: 4,
  },
  {
    id: 2,
    img: require("../images/sport2.jpg"),
    content:
      "Ууланд авиралт танд бодлоо захирах, анхаарлаа төвлөрүүлэх мөн эрүүл байх боломжийг өгнө.",
    time: 4,
  },
  {
    id: 3,
    img: require("../images/sport3.jpg"),
    content: "Усанд сэлэлт нь гайхалтай дасгал сургуулилт болж өгдөг.",
    time: 4,
  },
];

export default function InfoScreen() {
  return (
    <View style={{ margin: 30, flexDirection: "column" }}>
      <Text style={{ color: primaryColor, fontSize: 26 }}>Спорт</Text>
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.textStyle}>#{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <FlatList
          data={data}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flexDirection: "column",
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  width: 300,
                  borderRadius: 10,
                  marginRight: 10,
                }}
              >
                <Image source={item.img} style={{ width: 200, height: 150 }} />
                <Text
                  style={{
                    color: primaryColor,
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{ color: textColor, textAlign: "justify" }}>
                  {item.content}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <View style={{ marginTop: 10, marginBottom: 20 }}>
        <FlatList
          data={sports}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  borderRadius: 10,
                  marginBottom: 10,
                }}
              >
                <Image
                  source={item.img}
                  style={{
                    width: 100,
                    height: 100,
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: "#ccc",
                  }}
                />
                <View
                  style={{
                    flexDirection: "column",
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      color: textColor,
                      marginTop: 10,
                      marginBottom: 10,
                    }}
                  >
                    {item.time.toString()} мин
                  </Text>
                  <Text style={{ color: primaryColor, textAlign: "justify" }}>
                    {item.content}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: primaryColor,
    color: "#fff",
    fontSize: 18,
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 10,
  },
});
