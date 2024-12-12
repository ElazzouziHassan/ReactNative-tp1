import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Exemple1 from './src/Core/Exemples/Exemple1';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Exemple1/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent:'center',
    marginTop:40,
  }
});
