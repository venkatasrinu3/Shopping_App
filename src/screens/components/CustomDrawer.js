import React from "react"
import { View, Text, SafeAreaView, ImageBackground, Image } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import LinearGradient from 'react-native-linear-gradient';

const CustomDrawer = (props) => {
    // console.log("These are the Props", props)
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={["pink", 'skyblue']} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} style={{ flex: 1 }}>
                <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
                    <ImageBackground source={{ uri: "https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000" }} style={{ height: 200, justifyContent: "center", }} >
                        <View style={{paddingLeft:10}}>
                            <Image source={require("../../Assets/images/guest.jpg")} style={{ width: 50, height: 50 }} />
                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "pink" }}>Guest</Text>
                        </View>
                    </ImageBackground>
                    <DrawerItemList {...props} />   
                </DrawerContentScrollView>
            </LinearGradient>
            <View>
                <Text>Custom Text</Text>
            </View>
        </View>
    )
}
export default CustomDrawer