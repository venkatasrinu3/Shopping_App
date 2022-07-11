import React, { useState } from "react";
import { View, Dimensions, Text, StyleSheet, SafeAreaView, ScrollView, Image, FlatList, ImageBackground, Pressable } from "react-native"
import Carousel from "react-native-snap-carousel";
import { styles } from "../login/Login.styles"
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"
const SingleProduct = (props) => {
    const width = Dimensions.get("window").width
    const data = props.route.params.productInfo
    const [lines, setLines] = useState(3)
    const [color, setColor] = useState("black")
    const [bgColor, setBgColor] = useState("lightgrey")
    const [isAddedToCart, setIsAddedToCart] = useState(false)
    const addToCart = () => {
        setIsAddedToCart(true)
        setColor("white")
        setBgColor("green")
    }
    renderCarousel = ({ item, index }) => {
        return (
            <View style={styles.imageContainer}>
                <Image source={{ uri: item }} resizeMethod="resize" style={{ width: "100%", flex: 1 }} />
            </View>
        )
    }
    return (
        <SafeAreaView style={productStyles.safeView}>
            <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
                {/* <Image source={{ uri: data.productImage }} style={{ width: 500, flex: 1 }} /> */}
                <Carousel
                    data={data?.images}
                    renderItem={renderCarousel}
                    autoplay={true}
                    autoplayInterval={3000}
                    autoplayDelay={1000}
                    loop={true}
                    loopClonesPerSide={data?.images?.length}
                    layout={"default"}
                    sliderWidth={width}
                    itemWidth={width}
                // style={{flex:1}}
                />
            </View>
            <View style={productStyles.bodyContainer}>
                <ScrollView>
                    <Text style={{ textAlign: "left", fontSize: 20, marginLeft: 20, fontStyle: "italic", fontWeight: "bold", color: "black", marginVertical: 10 }}>{data.title}</Text>

                    <View style={{ marginHorizontal: 20 }}>
                        <Text ellipsizeMode="tail" numberOfLines={lines} style={{ marginTop: 10, fontWeight: "bold", color: "black", fontSize: 18 }}>
                            Description: 5G enabled with support for 7 5G bands,
                            Corning Gorilla Glass 5 Protection, IR Blaster, X axis linear vibration motor,
                            108MP HM2 Primary sensor 8MP Ultrawide 2MP Macro Sensor Video
                            recording support- Upto 1080p@30 fps Slow motion support Short Video
                            | Panaroma | Document Mode | Time-Lapse | Long Exposure | Movie Frame
                            | Dual Video | Timed Burst | Pro Mode | Night Mode, 3.5mm Jack
                        </Text>
                        {lines <= 3
                            ?
                            <Text style={{ fontWeight: "bold", color: "blue", fontStyle: "italic" }} onPress={() => setLines(10)}>
                                Read More
                            </Text>
                            :
                            <Text style={{ fontWeight: "bold", color: "red", fontStyle: "italic" }} onPress={() => setLines(3)}>Read Less</Text>
                        }
                    </View>
                </ScrollView>
                <View style={{ width: "100%" }}>
                    <Pressable onPress={addToCart} style={[styles.fb_btn, { backgroundColor: bgColor }]} >
                        <Text style={[styles.fb_txt, { color: color, }]} >{!isAddedToCart? "Add" : "Go"} To Cart</Text>
                        {!isAddedToCart ?
                            <MaterialCommunityIcon name="cart-outline" color="black" size={30} />
                            :
                            <MaterialCommunityIcon name="cart-check" color="white" size={30} />
                        }
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}
const productStyles = StyleSheet.create({

    safeView: {
        flex: 1,
        // backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "rgb(255, 220, 255)",
    },
    imageContainer: {
        flex: 1,
        backgroundColor: "indigo",
    },
    bodyContainer: {
        flex: 1,
        alignItems: "flex-start",
        width: "100%",


    }

})
export default SingleProduct