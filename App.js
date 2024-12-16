import { SafeAreaView, StyleSheet } from 'react-native';
import SimpleScrollView from './src/Core/components/PART_1/SimpleScrollView';
import SimpleView from './src/Core/components/PART_1/SimpleView';
import SimpleTextView from './src/Core/components/PART_1/SimpleTextView';
import SimpleFlatList from './src/Core/components/PART_1/SimpleFlatList';
import SimpleSectionList from './src/Core/components/PART_1/SimpleSectionList';
import TestBtn1 from './src/Core/components/testBtn/TestBtn1';
import TestBtn2 from './src/Core/components/testBtn/TestBtn2';

export default function App() {
  const handleButtonOnePress = () => {
    alert("Bouton 1 a été pressé !");
  };
  const handleButtonTwoPress = () => {
    alert("Bouton 2 a été pressé !");
  };

  return (
    <SafeAreaView style={styles.container}>
      <SimpleView/>
      {/* <SimpleTextView/> */}
      {/* <SimpleScrollView/> */}
      {/* <SimpleFlatList/> */}
      {/* <SimpleSectionList/> */}

      {/* Test sur les bottons */}
      <TestBtn1 
          title="Click me 1"
          onPress={handleButtonOnePress}
          color="green"
          textColor="white"  
      />
      <TestBtn2 
          title="Click me 2"
          onPress={handleButtonTwoPress}
          color="red"
          textColor="white"  
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignContent:'center',
    marginTop:40,
  }
});
