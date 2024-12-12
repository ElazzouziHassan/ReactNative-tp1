import { ScrollView, Text, View } from "react-native"

function SimpleScrollView() {
  return (
    <ScrollView style={{backgroundColor:'green', marginHorizontal:20}}>
      <Text style={{margin:16, fontSize:50 }}>
        scroll here to see more {'====>'}!
        ******************************************************************************************************************************************************************************************************************************************************************************************************************************************
      </Text>
      <View style={{marginTop:1024}}></View>
      <Text style={{margin:16}}>You Look !</Text>
    </ScrollView>
  )
}

export default SimpleScrollView