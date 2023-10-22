import { View, Text, StatusBar, SafeAreaView, Image, Pressable } from 'react-native'


export default function ProductDetail({navigation, route}) {
  const {item} = route?.params;
  return (
    <View style={{flex: 1}}>
      <StatusBar/>
      <SafeAreaView style={{flex: 1, padding: 10,backgroundColor: "#fff"}}>
        <View style={{flex: 1, paddingHorizontal: 50, paddingTop: 50, backgroundColor: "#FDECEC",  borderRadius: 15, paddingVertical: 25}}>
            <Image
              source={item.image}
              resizeMode='contain'
              style={{width: "100%", height: "100%",  borderRadius: 15}}
            />
        </View>
        <View style={{flex: 1}}>
          <Text style={{marginTop: 15, fontSize: 35, fontWeight: "500"}}>{item?.name}</Text>
          
          <View style={{flexDirection: "row", alignItems: "center", marginTop: 10}}>
            <Text style={{color: "#666", fontSize: 25, marginRight: 30}}>{item.salePercent * 100}% OFF I {(item.price * (1 - item.salePercent)).toFixed(0)}$</Text>
            <Text style={{textDecorationLine: "line-through", fontSize: 25}}>{item?.price}$</Text>
          </View>
          
          <Text style={{fontSize: 25, fontWeight: 500, marginTop: 30}}>Description</Text>
          
          <Text style={{color: "#666", paddingVertical: 30, fontSize: 22}}>It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.</Text>
          
          <View style={{flexDirection: "row", alignItems:"center", paddingBottom: 50}}>
            <Image
              source={require("../../../assets/heartSelected.png")}
              resizeMode='contain'
              style={{width: 35, height: 35}}
              
            />
            <Pressable style={{flex: 1, alignItems: "center"}}>
              <Text style={{textAlign: "center", fontSize: 25, color: "#fff", backgroundColor: "#E94141"
            , width: "90%", paddingVertical: 8, borderRadius: 30}}>Add to card</Text>
            </Pressable>
          </View>
        
        </View>
       
      </SafeAreaView>
    </View>
  )
}