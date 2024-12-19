import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import styles from "./style";

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
        <Text style={styles.buttonText}>CAFÉ DA MANHÃ</Text>
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
        <Text style={styles.buttonText}>ALMOÇO</Text>
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
        <Text style={styles.buttonText}>JANTAR</Text>
      </TouchableOpacity>
    </View>
  );
}
