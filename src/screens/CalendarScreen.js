import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { primaryColor } from "../components/MyColors";

const data = [
  {
    month: 5,
    day: 17,
    title: "Дасгал",
    content: "Та өөртөө цаг гаргаад 30 минут дуртай хөгжмөө сонсоод алхаарай",
  },
  {
    month: 5,
    day: 20,
    title: "Хоололт",
    content: "Өнөөдөр өөртөө зориулаад 6 цагаас өмнө хоолоо идээрэй",
  },
  {
    month: 5,
    day: 21,
    title: "Зөвлөгөө",
    content: "Дотны найзтайгаа цаг гарган уулзаарай",
  },
  {
    month: 5,
    day: 29,
    title: "Зөвлөгөө",
    content: "Гоо сайхны салонаар үйлдлүүлээрэй",
  },
];

function CalendarScreen() {
  const screenHeight = Dimensions.get("screen").height;

  return (
    <View style={{ height: screenHeight, padding: 30 }}>
      <View style={{ backgroundColor: "#ccc", width: "100%" }}>
        <Calendar
          disableMonthChange={true}
          firstDay={1}
          showWeekNumbers={true}
          enableSwipeMonths={true}
        />
      </View>

      <View>
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: 1,
                  borderColor: "#ccc",
                  marginTop: 24,
                  borderRadius: 6,
                }}
              >
                <View
                  style={{
                    margin: 20,
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "#333", fontSize: 18 }}>
                    {item.month} сар
                  </Text>
                  <Text
                    style={{
                      color: primaryColor,
                      fontSize: 22,
                      fontWeight: "bold",
                    }}
                  >
                    {item.day}
                  </Text>
                </View>
                <View
                  style={{
                    borderLeftWidth: 1,
                    borderLeftColor: "#ccc",
                    paddingTop: 8,
                    paddingLeft: 15,
                  }}
                >
                  <Text style={{ color: primaryColor, fontSize: 18 }}>
                    {item.title}
                  </Text>
                  <Text style={{ width: 220, textAlign: "justify" }}>
                    {item.content}
                  </Text>
                </View>
              </View>
            );
          }}
          keyExtractor={(item) => item.day.toString()}
        />
      </View>
    </View>
  );
}

export default CalendarScreen;

const styles = StyleSheet.create({});
