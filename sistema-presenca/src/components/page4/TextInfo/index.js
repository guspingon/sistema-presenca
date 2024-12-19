import React, { useEffect } from "react";
import { Text, View, Button } from "react-native";
import styles from './style';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'

export default function TextInfo({ route, empresa, func, refeicao }){

    const [fontLoaded] = useFonts({
        Poppins_700Bold
    })

    if(!fontLoaded) {
        return null
    }

    return(
        <View style={styles.TitleBox}>
            <Text style={styles.titleText}>
                {func}
            </Text>
            <Text style={styles.titleText}>
                {empresa}
            </Text>
            <Text style={styles.titleText}>
                {refeicao}
            </Text>
        </View> 
    )
}
