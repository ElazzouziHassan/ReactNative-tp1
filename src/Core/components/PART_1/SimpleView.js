import { View, Text, StyleSheet, Image, TextInput } from 'react-native'

function SimpleView() {
  return (
    <>
      <View style={styles.viewWithImage}>
      <Text style={styles.text1}>Welcome to React Native!</Text>
        {/* <Image
          source={require('../../../../assets/reacnative.jpg')}
          style={styles.image}
        /> */}
      <Text style={styles.text2}>simple view in react native with an Image</Text>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  viewWithImage: {
    alignItems: 'center',
    marginVertical: 20,
    padding:10,
  },
  text1: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text2: {
    fontSize: 14,
  },
  image: {
    width: 300,
    height: 100,
    borderRadius:5,
    margin:10,
  },
});

export default SimpleView