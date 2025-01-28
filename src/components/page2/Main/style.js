import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8CAA4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      width: '90%',
      height: '90%',
      backgroundColor: '#fff',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#000',
      overflow: 'hidden',
      paddingBottom:10
    },
    boxInputMobile: {
      flexDirection: 'row',
      backgroundColor: '#64908A',
      height: '7%',
      padding: 10,
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderColor: '#000',
      alignItems: 'center'
    },
    boxInputTablet: {
      flexDirection: 'row',
      backgroundColor: '#64908A',
      height: '12%',
      padding: 10,
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderColor: '#000',
      alignItems: 'center'
    },
    boxTitle : {
      fontFamily:'Poppins_700Bold',
      fontSize: 20,
      color: '#fff'
    },
    inputMobile: {
      flex: 1,
      paddingLeft: 10,
      fontFamily:'Poppins_700Bold',
      color: "#fff",
      height: '100%',
    },
    inputTablet: {
      flex: 1,
      paddingLeft: 25,
      fontFamily:'Poppins_700Bold',
      color: "#fff",
      height: '100%',
      fontSize:20,
      justifyContent:'center',
      alignItems: 'center'
    },
    flatStyle: {
      padding: 20,
    },
    buttonStyle: {
      padding:20,
      borderWidth:1,
      borderColor: 'grey',
      borderRadius: 10,
      marginTop:10,
      backgroundColor: "#E8E8E8",
    },
    buttonTextMobile: {
      fontSize:20,
      fontFamily:'Poppins_700Bold'
    },
    buttonTextTablet: {
      fontSize:40,
      fontFamily:'Poppins_700Bold'
    },
    clearButton: {
      height:'100%',
      justifyContent:'center'
    },
    clearButtonTextMobile: {
      fontSize: 20,
      fontFamily:'Poppins_700Bold',
      color: '#fff',
      paddingRight: 10
    },
    clearButtonTextTablet: {
      fontSize: 40,
      fontFamily:'Poppins_700Bold',
      color: '#fff',
      paddingRight: 10
    },
    icon: {
      paddingLeft:10
    }
  });


export default styles
  