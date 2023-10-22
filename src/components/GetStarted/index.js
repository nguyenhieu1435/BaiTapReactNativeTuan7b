import { Pressable } from 'react-native'
import { View, Text, StatusBar, SafeAreaView, Image } from 'react-native'


export default function GetStarted({navigation}) {

  return (
    <View style={{flex: 1}}>
        <StatusBar/>
        <SafeAreaView style={{flex: 1, paddingHorizontal: 10, paddingVertical: 50, backgroundColor: "#F9F7F6"}}>
            <Text
                style={{textAlign: "center", fontSize: 26, marginBottom: 25}}
            >
                A premium online store for sporter and their stylish choice
            </Text>
            <View style={{width: "100%", alignItems: "center", justifyContent: "center"
            , padding: 50, backgroundColor: "#F7E5E4", borderRadius: 50, paddingTop: 80}}>
                <Image
                    source={require("../../../assets/bifour_-removebg-preview.png")}
                    resizeMode='contain'
                    
                    style={{width: 292, height: 270}}
                />
            </View>
            <View style={{marginTop: 25, alignItems: "center"}}>
                <Text style={{ fontWeight: "700", fontSize: 26
                , textAlign: "center", width: "50%"}}>
                    POWER BIKE SHOP
                </Text>
            </View>
            <Pressable style={{marginTop: 70, alignItems: "center"}}
            
                onPress={()=> navigation.navigate("ListProduct")}
            >
                <Text style={{width: "95%", textAlign: "center", fontSize: 27
                , fontWeight: "600", color: "#fff", backgroundColor: "#E94141"
                , borderRadius: 25, paddingVertical: 10}}>Get Started</Text>
            </Pressable>
        </SafeAreaView>
    </View>
  )
}