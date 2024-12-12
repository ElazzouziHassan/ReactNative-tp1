import { FlatList, StyleSheet, Text, View } from "react-native"

function SimpleFlatList() {
  const tab = [
    { id: '1', name: 'Karim' },
    { id: '2', name: 'Hassan' },
    { id: '3', name: 'Ilyas' },
    { id: '4', name: 'Kabira' },
  ];

  return (
    <View>
      <Text 
        style={{textAlign:'center', marginTop:30, fontWeight:'bold', padding:50, fontSize:20}}
      >
        Simple Flat List Example
      </Text>
      <FlatList
        data={tab}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  )
};
const styles = StyleSheet.create({
  item: {
    textAlign:'center',
    width:200,
    marginLeft:100,
    fontSize: 16,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#BCCCDC',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});

export default SimpleFlatList