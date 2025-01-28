import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from "react-native";
import styles from "./style";

const { width } = Dimensions.get("window");

const isTablet = width >= 600;

export default function FuncName({ empresa, func }) {
  return (
    <View style={styles.container}>
      <View style={styles.funcBox}>
        <Text style={isTablet ? styles.nameStyleTablet : styles.nameStyleMobile}>{func}</Text>
      </View>
    </View>
  );
}
