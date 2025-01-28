import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import ButtonComp from "../Buttons";
import MainText from "../Title";
import styles from "./style";

export default function MainMenu({ navigation }) {
  useEffect(() => {
    navigation.setOptions({ headerTitle: "" });
  });
  return (
    <View style={styles.container}>
      <MainText />
      <ButtonComp />
      <StatusBar style="auto" />
    </View>
  );
}
