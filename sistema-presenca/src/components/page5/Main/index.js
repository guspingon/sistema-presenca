import React, { useEffect, useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Touchable,
  TouchableOpacity,
  Alert,
  Dimensions,
} from "react-native";
import styles from "./style";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const isTablet = width >= 600;

export default function LoginScreen({ route, navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerTitle: "",
      headerStyle: {
        backgroundColor: "#E8CAA4",
        elevation: 0,
        shadowOpacity: 0,
      },
    });
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin123") {
      navigation.navigate("Crud");
    } else {
      Alert.alert("Erro", "Usuário ou senha incorretos!");
      setPassword("");
      setUsername("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={isTablet ? styles.titleTextTablet : styles.titleTextMobile}>
        LOGIN
      </Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="USUÁRIO"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="SENHA"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.buttonStyle} onPress={handleLogin}>
        <Text
          style={isTablet ? styles.textButtonTablet : styles.textButtonMobile}
        >
          ENTRAR
        </Text>
      </TouchableOpacity>
    </View>
  );
}
