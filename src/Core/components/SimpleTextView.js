import { StyleSheet, Text, TextInput, View } from "react-native";

function SimpleTextView() {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.text1}>Enter Text Below:</Text>
      <TextInput
        style={styles.textInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInputContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textInput: {
    width:200,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
}); 

export default SimpleTextView