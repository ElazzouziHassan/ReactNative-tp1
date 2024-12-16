import { StyleSheet, Text, TouchableOpacity } from "react-native"

function TestBtn1({title, onPress, color='green', textColor='white' }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: "80%",
    padding: 15,
    marginLeft:40,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight:"bold",
  },
})

export default TestBtn1;