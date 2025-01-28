import React, { useEffect } from "react";
import { Text, View, Button, Dimensions } from "react-native";
import styles from "./style";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

export default function TextInfo({ route, empresa, func, refeicao }) {
  const [fontLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  const { width } = Dimensions.get("window");

  const isTablet = width >= 600;

  return (
    <View style={styles.titleBox}>
      <View style={styles.infoBox}>
        <Text
          style={isTablet ? styles.titleTextTablet : styles.titleTextMobile}
        >
          NOME:
        </Text>
        <Text style={isTablet ? styles.infoTextTablet : styles.infoTextMobile}>
          {func}
        </Text>
        <Text
          style={isTablet ? styles.titleTextTablet : styles.titleTextMobile}
        >
          EMPRESA:
        </Text>
        <Text style={isTablet ? styles.infoTextTablet : styles.infoTextMobile}>
          {empresa}
        </Text>
        <Text
          style={isTablet ? styles.titleTextTablet : styles.titleTextMobile}
        >
          REFEIÇÃO:
        </Text>
        <Text style={isTablet ? styles.infoTextTablet : styles.infoTextMobile}>
          {refeicao}
        </Text>
      </View>
    </View>
  );
}
