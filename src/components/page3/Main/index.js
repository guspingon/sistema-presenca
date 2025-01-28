import React, { useEffect, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import styles from "./style";
import ButtonMeal from "../ButtonsMeal";
import FuncName from "../FuncName";
import MainText from "../Title";

export default function MealMenu({ route, navigation }) {
  const { empresa, func } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerTitle: 'REFEIÇÃO',
      headerStyle: {
        backgroundColor: "#E8CAA4",
        elevation: 0,
        shadowOpacity: 0,
      }
    });
  });

  return (
    <View style={styles.container}>
      <FuncName empresa={empresa} func={func} />
      <MainText />
      <ButtonMeal empresa={empresa} func={func} navigation={navigation} />
    </View>
  );
}