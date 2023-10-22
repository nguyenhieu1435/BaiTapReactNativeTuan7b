import { useState } from 'react'
import { FlatList, Image } from 'react-native'
import { View, Text, StatusBar, SafeAreaView, ScrollView, Pressable } from 'react-native'


const DATAS = [
    {
        isWish: false,
        name: "Pinarello",
        type: "Roadbike",
        price: 1800,
        image: require("../../../assets/bifour_-removebg-preview.png"),
        salePercent: 0.15
    },
    {
        isWish: true,
        name: "Pina Mountai",
        price: 1700,
        type: "Mountain",
        image: require("../../../assets/bione-removebg-preview.png"),
        salePercent: 0.15
    },
    {
        isWish: true,
        name: "Pina Bike",
        price: 1500,
        type: "Roadbike",
        image: require("../../../assets/bithree_removebg-preview.png"),
        salePercent: 0.15
    },
    {
        isWish: true,
        name: "Pinarello",
        price: 1900,
        type: "Roadbike",
        image: require("../../../assets/bifour_-removebg-preview.png"),
        salePercent: 0.15
    },
    {
        isWish: true,
        name: "Pinarello",
        price: 2700,
        type: "Roadbike",
        image: require("../../../assets/bithree_removebg-preview.png"),
        salePercent: 0.15
    },
    {
        isWish: true,
        name: "Pinarello",
        price: 1350,
        type: "Roadbike",
        image: require("../../../assets/bione-removebg-preview.png"),
        salePercent: 0.15
    },

]

export default function ListProduct({navigation}) {
    const [datasOriginal, setDatasOriginal] = useState(DATAS);
    const [category, setCategory] = useState(()=>{
        let arr = [];
        DATAS.forEach(item => {
            if (!arr.includes(item.type)){
                arr.push(item.type)
            }
        })
        return arr;
    })

    const [typeSelected, setTypeSelected] = useState("all")
    function renderItemProduct(item, index){
        return (
            <View style={{width: "50%", marginBottom: 12, paddingHorizontal: 8, backgroundColor: "#fff"}}>
                <Pressable style={{alignItems: "center", backgroundColor: "#FEF5EC"
                    , paddingVertical: 10, borderRadius: 12, position: "relative"}}
                    onPress={()=>{
                        navigation.navigate("ProductDetail", {item: item})
                    }}
                >
                    <Image
                        source={item?.image}
                        resizeMode='contain'
                        style={{width: 135, height: 135}}
                    />
                    <Image
                        source={item.isWish ? require("../../../assets/heartSelected.png") : require("../../../assets/heart.png")}
                        resizeMode='contain'
                        style={{width: 25, height: 25, position: "absolute", left: 10, top: 10}}
                    />
                    <Text style={{textAlign: "center", fontSize: 20, }}>{item.name}</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Text style={{fontSize: 20, color: "#f7ba83"}}>$</Text>
                        <Text style={{fontSize: 20, fontWeight: "500", marginLeft: 2}}>{item.price}</Text>
                    </View>
                </Pressable>
            </View>
        )
    }
  return (
    <View style={{flex: 1, backgroundColor: "#fff"}}>
        <StatusBar/>
        <SafeAreaView style={{flex: 1, paddingHorizontal: 15}}>
            <Text style={{paddingVertical: 50, color: "#E94141", fontSize: 25
            , fontWeight: "700"}}>The world’s Best Bike</Text>
            <View horizontal={true}
        
                style={{ width :"100%" , gap: 10, flexDirection: "row", flexWrap: "wrap"}}
            >
                 <Pressable
                                onPress={()=> setTypeSelected("all")}
                            >
                                <Text style={{paddingVertical: 2, paddingHorizontal: 40, borderColor: "#E9414187"
                                    , borderWidth: 1, borderRadius: 8, fontSize: 20, color: "all" == typeSelected ? "#E94141" : "#444" }}>All</Text>
                </Pressable>
                {
                    
                    category.map((value, index)=>{
                        return (
                            <Pressable key={index}
                                onPress={()=> setTypeSelected(value)}
                            >
                                <Text style={{paddingVertical: 2, paddingHorizontal: 40, borderColor: "#E9414187"
                                    , borderWidth: 1, borderRadius: 8, fontSize: 20, color: value == typeSelected ? "#E94141" : "#444" }}>{value}</Text>
                            </Pressable>
                        )
                    })
                }
              
            </View>

            <FlatList
                style={{marginTop: 20}}
                data={datasOriginal.filter((item, index)=> typeSelected == "all" || item.type == typeSelected)}
                keyExtractor={(item, index)=>index}
                renderItem={({item, index})=> renderItemProduct(item, index)}
                numColumns={2}
            />
            
        </SafeAreaView>

    </View>
  )
}