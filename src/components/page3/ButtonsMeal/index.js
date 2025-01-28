import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from "react-native";
import styles from "./style";

const { width } = Dimensions.get("window");

const isTablet = width >= 600;

export default function ButtonMeal({ route, navigation, empresa, func }) {
  return (
    <View style={styles.buttons}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("Confirma", {
            empresa,
            func,
            refeicao: "Café da Manhã",
          });
        }}
      >
        <Text style={isTablet ? styles.buttonTextTablet : styles.buttonTextMobile}>CAFÉ DA MANHÃ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("Confirma", {
            empresa,
            func,
            refeicao: "Almoço",
          });
        }}
      >
        <Text style={isTablet ? styles.buttonTextTablet : styles.buttonTextMobile}>ALMOÇO</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("Confirma", {
            empresa,
            func,
            refeicao: "Jantar",
          });
        }}
      >
        <Text style={isTablet ? styles.buttonTextTablet : styles.buttonTextMobile}>JANTAR</Text>
      </TouchableOpacity>
    </View>
  );
}
