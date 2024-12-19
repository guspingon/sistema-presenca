import React from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import styles from "./style";
import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const isTablet = width >= 600;

export default function ButtonConf() {
  const [fontLoaded] = useFonts({
    Poppins_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  const navigation = useNavigation();

  const handlePress = (buttonText) => {
    navigation.navigate({ buttonText });
  };

  return (
    <View style={styles.buttons}>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={isTablet ? styles.buttonTextTablet : styles.buttonTextMobile}>
            CONFIRMAR
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={isTablet ? styles.buttonTextTablet : styles.buttonTextMobile}>
            CANCELAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}