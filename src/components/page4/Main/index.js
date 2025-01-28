import React, { useEffect, useLayoutEffect } from "react";
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

    useLayoutEffect(() => {
      navigation.setOptions({
        headerTitleAlign: 'center',
        headerTitle: 'CONFIRMAÇÃO',
        headerStyle: {
          backgroundColor: "#E8CAA4",
          elevation: 0,
          shadowOpacity: 0,
        }
      });
    });

  return (
    <View style={styles.container}>
        <TextInfo empresa={empresa} func={func} refeicao={refeicao}/>
        <ButtonConf />
    </View>
  );
}
