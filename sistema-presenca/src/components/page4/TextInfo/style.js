import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    infoTextMobile:{
        fontSize: 30,
        fontFamily:'Poppins_700Bold',
        color: '#000',
        textAlign: 'center'
    },
    infoTextTablet:{
        fontSize: 45,
        fontFamily:'Poppins_700Bold',
        color: '#000',
        textAlign: 'center'
    },
    titleBox:{
        width: '80%',
        height:'50%',
        justifyContent:'center',
        alignItems:'center'
    },
    titleTextMobile: {
        fontSize: 25,
        textAlign: 'center',
        fontFamily:'Poppins_700Bold',
        paddingTop: 20,
        paddingBottom:10,
        color: '#424254'
    },
    titleTextTablet: {
        fontSize: 45,
        textAlign: 'center',
        fontFamily:'Poppins_700Bold',
        paddingTop: 20,
        color: '#424254',
    },
    funcBox: {
        width:'100%',
        height:'70%',
        backgroundColor: '#fff',
        borderRadius:20,
        overflow:'hidden',
        justifyContent: 'center'
    },
    infoBox: {
        backgroundColor: '#fff',
        width: '100%',
        height:'100%',
        overflow:'hidden',
        borderWidth:1,
        borderRadius:20,
        justifyContent: 'center'
    }
});

export default styles