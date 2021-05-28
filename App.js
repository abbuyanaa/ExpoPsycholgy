import React from "react";
import { StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import SignInScreen from "./src/screens/SignInScreen";
import BottomTabNavigator from "./src/navigators/BottomTabNavigator";
import SettingsScreen from "./src/screens/SettingsScreen";
import { primaryColor } from "./src/components/MyColors";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: primaryColor },
          }}
        >
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ title: "Нэвтрэх" }}
          />
          <Stack.Screen name="Home" component={BottomTabNavigator} />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ title: "Тохиргоо" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
