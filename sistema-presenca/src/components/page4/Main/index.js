import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import styles from "./style";
import ButtonConf from "../ButtonsConf";
import TextInfo from "../TextInfo";

export default function ConfirmScreen({ route, navigation }) {
  const { empresa, func, refeicao } = route.params;

  const confirmar = () => {
    const dataAtual = new Date().toISOString();
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO Refeicoes (empresa, funcionario, refeicao, data) VALUES (?, ?, ?, ?)`,
        [empresa, func, refeicao, dataAtual],
        () => Alert.alert("Sucesso", "Refeição registrada com sucesso!"),
        (_, error) =>
          Alert.alert("Erro", "Não foi possível registrar a refeição.")
      );
    });
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
        <TextInfo empresa={empresa} func={func} refeicao={refeicao}/>
        <ButtonConf />
    </View>
  );
}
