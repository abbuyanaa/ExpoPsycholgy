import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

import HomeScreen from "../screens/HomeScreen";
import DiaryListScreen from "../screens/DiaryListScreen";
import ProfileScreen from "../screens/ProfileScreen";
import InfoScreen from "../screens/InfoScreen";
import CalendarScreen from "../screens/CalendarScreen";

import { primaryColor, textColor } from "../components/MyColors";

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          height: 50,
        },
        labelStyle: {
          color: textColor,
          fontSize: 16,
          marginBottom: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Нүүр",
        }}
      />
      <Tab.Screen
        name="DiaryList"
        component={DiaryListScreen}
        options={{
          tabBarLabel: "Тэмдэглэл",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Профайл",
        }}
      />
      <Tab.Screen
        name="Info"
        component={InfoScreen}
        options={{
          tabBarLabel: "Мэдээлэл",
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: "Календарь",
        }}
      />
    </Tab.Navigator>
  );
}
