import React from "react";
import MainMenu from "./src/components/page1/Main";
import CompName from "./src/components/page2/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MealMenu from "./src/components/page3/Main";
import FuncName from "./src/components/page3/FuncName";
import * as SQLite from "expo-sqlite";
import ConfirmScreen from "./src/components/page4/Main";

const db = SQLite.openDatabaseAsync("refeicoes.db");

async function criarTabela() {
  try {
    const db = await SQLite.openDatabaseAsync("refeicoes.db");
    await db.isInTransactionAsync(async (tx) => {
      await tx.executeSqlAsync(
        `CREATE TABLE IF NOT EXISTS Refeicoes (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          empresa TEXT,
          funcionario TEXT,
          refeicao TEXT,
          data TEXT
        );`
      );
    });
    return db;
  } catch (error) {
    console.error("Erro ao configurar o banco de dados:", error);
  }
}

criarTabela();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
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
        }}
      >
        <Stack.Screen name="HOME" component={MainMenu} />
        <Stack.Screen name="EMPRESA" component={CompName} />
        <Stack.Screen name="Refeicao" component={MealMenu} />
        <Stack.Screen name="Funcionario" component={FuncName} />
        <Stack.Screen name="Confirma" component={ConfirmScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
