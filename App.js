import { SafeAreaView, StyleSheet } from 'react-native';
import SimpleScrollView from './src/Core/components/PART_1/SimpleScrollView';
import SimpleView from './src/Core/components/PART_1/SimpleView';
import SimpleTextView from './src/Core/components/PART_1/SimpleTextView';
import SimpleFlatList from './src/Core/components/PART_1/SimpleFlatList';
import SimpleSectionList from './src/Core/components/PART_1/SimpleSectionList';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <SimpleView/>
      {/* <SimpleTextView/> */}
      {/* <SimpleScrollView/> */}
      {/* <SimpleFlatList/> */}
      <SimpleSectionList/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent:'center',
    marginTop:40,
  }
});
