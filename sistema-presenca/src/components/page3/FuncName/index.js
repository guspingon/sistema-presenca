import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import styles from "./style";

export default function FuncName({ empresa, func }) {
  return (
    <View style={styles.container}>
      <View style={styles.funcBox}>
        <Text style={styles.nameStyle}>{func} / {empresa}</Text>
      </View>
    </View>
  );
}
