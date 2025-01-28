import React, { useLayoutEffect, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Touchable,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions
} from "react-native";
import { Ionicons } from "react-native-vector-icons";
import styles from "./style";
import MealMenu from "../../page3/Main";

export default function CompName({ route, navigation }) {
  const { empresa } = route.params;

  const funcs = {
    SMS: ["André","Clayton","Danilo","Edson","Ester","Fabiana","Felipe","Gustavo","Joab","João","Matheus","Murilo","Ormenio","Rodrigo","Sicile","Yasmin"],
    ALLEIMA: ["Daiane","Erick","Francisco","Gabriel","Thaisa"],
    SMR: ["Francisco Célio","Matheus Silva","Orlando Neto"],
  };

  const [searchText, setSearchText] = useState('');
  const [filteredFuncs, setFilteredFuncs] = useState(funcs[empresa]);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = funcs[empresa].filter(item => 
      item.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredFuncs(filtered);
  };

  useEffect(() => {
    setFilteredFuncs(funcs[empresa]);
  }, [empresa]);

  const clearSearch = () => {
    setSearchText('');
    setFilteredFuncs(funcs[empresa]);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: 'center',
      headerTitle: empresa,
      headerStyle: {
        backgroundColor: "#E8CAA4",
        elevation: 0,
        shadowOpacity: 0,
      }
    });
  });

  const { width } = Dimensions.get("window");
  
  const isTablet = width >= 600;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={isTablet ? styles.boxInputTablet : styles.boxInputMobile}>
          <Ionicons name="search" color="#fff" size={isTablet ? 40 : 20} style={styles.icon} />
          <TextInput
            style={isTablet ? styles.inputTablet : styles.inputMobile}
            placeholder="BUSCAR..."
            placeholderTextColor="rgba(255, 255, 255, 0.8)"
            value={searchText}
            onChangeText={handleSearch}
          ></TextInput>
            <TouchableOpacity onPress={clearSearch} style={styles.clearButton}>
            <Text style={isTablet ? styles.clearButtonTextTablet : styles.clearButtonTextMobile}>X</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.flatStyle}
          data={filteredFuncs}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.buttonStyle}
              title={item}
              onPress={() => {
                navigation.navigate('Refeicao', { empresa, func: item });
              }}>
              <Text style={isTablet ? styles.buttonTextTablet : styles.buttonTextMobile}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
