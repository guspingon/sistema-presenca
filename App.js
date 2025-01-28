import React, { use, useActionState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  Dimensions,
} from "react-native";
import MainMenu from "./src/components/page1/Main";
import CompName from "./src/components/page2/Main";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealMenu from "./src/components/page3/Main";
import FuncName from "./src/components/page3/FuncName";
import * as SQLite from "expo-sqlite";
import ConfirmScreen from "./src/components/page4/Main";
import LoginScreen from "./src/components/page5/Main";
import { Ionicons } from "@expo/vector-icons";
import CrudSexystem from "./src/components/page6/Main";

const Stack = createStackNavigator();

const { width } = Dimensions.get("window");

const isTablet = width >= 600;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#424254",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="HOME"
          component={MainMenu}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#E8CAA4",
              borderBottomWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTintColor: "#424254",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <Ionicons
                name="settings-outline"
                size={isTablet ? 40 : 24}
                color="#424254"
                style={{ marginRight: 30, marginTop: 20 }}
                onPress={() => navigation.navigate("Login")}
              />
            ),
          })}
        />
        <Stack.Screen name="EMPRESA" component={CompName} />
        <Stack.Screen name="Refeicao" component={MealMenu} />
        <Stack.Screen name="Funcionario" component={FuncName} />
        <Stack.Screen name="Confirma" component={ConfirmScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Crud" component={CrudSystem} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
