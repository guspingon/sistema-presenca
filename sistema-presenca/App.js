import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import ButtonComp from './src/components/page1/Buttons';
import { useFonts } from 'expo-font';
import MainMenu from './src/components/page1/Title';


export default function App() {
  return (
    <View style={styles.container}>

      <MainMenu/>
      <ButtonComp/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8CAA4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
