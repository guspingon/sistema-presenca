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
import CompName from "../../page2/Main";

const { width } = Dimensions.get("window");

const isTablet = width >= 600;

export default function ButtonComp() {
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
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("EMPRESA", { empresa: "SMS" });
        }}
      >
        <Text
          style={isTablet ? styles.buttonTextTablet : styles.buttonTextMobile}
        >
          SMS
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("EMPRESA", { empresa: "ALLEIMA" });
        }}
      >
        <Text
          style={isTablet ? styles.buttonTextTablet : styles.buttonTextMobile}
        >
          ALLEIMA
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          navigation.navigate("EMPRESA", { empresa: "SMR" });
        }}
      >
        <Text
          style={isTablet ? styles.buttonTextTablet : styles.buttonTextMobile}
        >
          SMR
        </Text>
      </TouchableOpacity>
    </View>
  );
}
