import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8CAA4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputStyle: {
        backgroundColor: '#fff',
        width: '80%',
        height: '10%',
        borderRadius: 11,
        borderWidth: 1,
        borderColor: '#000',
        overflow: 'hidden',
        marginBottom: 20,
        paddingLeft: 20,
        fontSize: 30,
        fontFamily:'Poppins_700Bold'
    },
    titleTextMobile:{
        fontSize: 30,
        fontFamily:'Poppins_700Bold',
        color: '#424254',
        marginBottom: 15
    },
    titleTextTablet:{
        fontSize: 50,
        fontFamily:'Poppins_700Bold',
        color: '#424254',
        marginBottom: 15
    },
    textButtonMobile: {
        color: '#fff',
        fontFamily:'Poppins_700Bold',
        fontSize:30
    },
    textButtonTablet: {
        color: '#fff',
        fontFamily:'Poppins_700Bold',
        fontSize:50
    },
    buttonStyle:{
        backgroundColor: '#64908A',
        padding: 15,
        borderRadius: 11,
        borderWidth: 1,
        borderColor: '#000',
        width: '80%',
        alignItems: 'center'
    },
  });

export default styles
  