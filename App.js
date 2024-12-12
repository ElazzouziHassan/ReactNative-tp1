import { SafeAreaView, StyleSheet } from 'react-native';
import SimpleScrollView from './src/Core/components/SimpleScrollView';
import SimpleView from './src/Core/components/SimpleView';
import SimpleTextView from './src/Core/components/SimpleTextView';
import SimpleFlatList from './src/Core/components/SimpleFlatList';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      {/* <SimpleView/> */}
      {/* <SimpleTextView/> */}
      {/* <SimpleScrollView/> */}
      <SimpleFlatList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent:'center',
    marginTop:40,
  }
});
