import React, { useEffect } from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";
import styles from './style';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins'

export default function ButtonComp(){
    const [fontLoaded] = useFonts({
        Poppins_700Bold
    })

    if(!fontLoaded) {
        return null
    }

    return(
        <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>SMS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>ALLEIMA</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
                <Text style={styles.buttonText}>SMR</Text>
            </TouchableOpacity>
        </View> 
    )
}
