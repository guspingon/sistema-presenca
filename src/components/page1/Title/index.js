import React, { useEffect } from "react";
import { Text, View, Button, Dimensions } from "react-native";
import styles from "./style";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

const { width } = Dimensions.get("window");

const isTablet = width >= 600;

export default function MainText() {
  const [fontLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.TitleBox}>
      <Text style={isTablet ? styles.titleTextTablet : styles.titleTextMobile}>
        SELECIONE SUA EMPRESA
      </Text>
    </View>
  );
}
