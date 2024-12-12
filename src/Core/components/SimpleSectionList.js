import { SectionList, StyleSheet, Text, View } from "react-native"

function SimpleSectionList() {
  return (
    <View style={styles.container}>
      <SectionList
        sections = {[
          {title:'H', data:['Hassan', 'Hamid', 'Hanane']},
          {title:'J', data:['Jawad', 'Jamila', 'Jamal']},
          {title:'M', data:['Mohammed', 'Moussa', 'Meryam']},
        ]}

        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
      
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    paddingTop: 10,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#ddd',
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 4,
  },
  item: {
    fontSize: 16,
    color: '#555',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SimpleSectionList