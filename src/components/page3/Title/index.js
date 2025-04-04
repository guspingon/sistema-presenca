import React, { useEffect } from "react";
import { Text, View, Button } from "react-native";
import styles from './style';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'

export default function MainText(){
    const [fontLoaded] = useFonts({
        Poppins_700Bold
    })

    if(!fontLoaded) {
        return null
    }

    return(
        <View style={styles.TitleBox}>
            <Text style={styles.titleText}>
                SELECIONE A REFEIÇÃO
            </Text>
        </View> 
    )
}
