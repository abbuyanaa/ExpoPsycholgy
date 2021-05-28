import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { primaryColor, textColor } from "../components/MyColors";

const data = [
  {
    img: require("../images/slider1.jpg"),
    content:
      "Ном унших, телевиз үзэх гэх мэт зүйлсэд анхаарлаа төлвлөрүүлэхэд бэрхшээлтэй байдаг.",
  },
  {
    img: require("../images/slider2.jpg"),
    content: "Ямарваа нэг зүйлээс амархан цочиж, тайван сууж чадахаа больсон.",
  },
  {
    img: require("../images/slider3.jpg"),
    content: "Өөрийгөө үнэ цэнгүй гэж боддог.",
  },
];

const OnboardItem = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        alignItems: "center",
        margin: 20,
      }}
    >
      <Image source={item.img} style={styles.img} />
      <Text style={styles.content}>{item.content}</Text>
      <View style={styles.bg}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Хэзээ ч үгүй</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Ховор тохиолдолд</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bg}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Заримдаа</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Ихэнхи тохиолдолд</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bg}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Байнга</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: primaryColor,
          width: "100%",
          height: 60,
          borderRadius: 10,
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Цааш
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default function MentalScreen() {
  const { width } = useWindowDimensions();
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => <OnboardItem item={item} />}
        horizontal
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 350,
    backgroundColor: textColor,
    borderRadius: 10,
  },
  content: {
    color: primaryColor,
    width: 340,
    height: 60,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "normal",
  },
  bg: {
    width: 340,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  btn: {
    borderWidth: 1,
    borderColor: textColor,
    width: 160,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  btnText: {
    color: primaryColor,
    fontSize: 16,
  },
});
