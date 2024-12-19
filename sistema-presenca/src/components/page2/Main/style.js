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
      paddingBottom:20
    },
    boxInput: {
      flexDirection: 'row',
      backgroundColor: '#64908A',
      height: '7%',
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
    input: {
      flex: 1,
      paddingLeft: 10,
      fontFamily:'Poppins_700Bold',
      color: "#fff",
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
      backgroundColor: "#E8E8E8"
    },
    buttonText: {
      fontSize:20,
      fontFamily:'Poppins_700Bold'
    },
    clearButtonText: {
      fontSize: 20,
      fontFamily:'Poppins_700Bold',
      color: '#fff',
      paddingRight: 10
    }
  });


export default styles
  