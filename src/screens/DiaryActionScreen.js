import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { lightColor, primaryColor } from "../components/MyColors";

export default function DiaryActionScreen() {
  return (
    <View style={{ flex: 1, flexDirection: "column", margin: 30 }}>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: primaryColor,
          height: 40,
        }}
      >
        <TextInput style={{ width: "80%", padding: 10 }} />
        <TouchableOpacity
          style={{ alignSelf: "center", width: "20%", alignItems: "center" }}
        >
          <Text style={{ color: primaryColor, fontWeight: "bold" }}>Засах</Text>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 10 }}>
        <Text style={styles.textColor}>
          Ганцаардал гэдэг зүйлийг мэдрэх хамгийн хэцүү...
        </Text>
        <Text style={styles.textColor}>Гэхдээ ганцаардлаа гээд яах юм!</Text>
        <Text style={styles.textColor}>
          Алдах ёсгүй амьдрал, ганц би биш болхоор хүүхдийнхээ төлөө болхоор
          хэцүү үе байсан ч даваад гарах нь эх хүний үүрэг хариуцлага
        </Text>
      </View>
      <View
        style={{
          flexDirection: "column",
        }}
      >
        <TextInput
          placeholder="hh"
          multiline={true}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: primaryColor,
            height: 50,
          }}
        />
        <Text style={{ marginTop: 10 }}>Үүсгэсэн 2021/04/19</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textColor: {
    color: "#333",
  },
});
