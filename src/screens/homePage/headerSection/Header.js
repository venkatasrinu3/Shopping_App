import React from 'react'
import { View, Text, ImageBackground, StyleSheet, Image, Pressable, SafeAreaView, Dimensions, Platform } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
const Header = (props) => {
    const carouselData = [
        {
            imageSrc: "https://rukminim1.flixcart.com/flap/844/140/image/a88580f4d1010bf3.jpg?q=50",
            id: 1
        },
        {
            imageSrc: "https://rukminim1.flixcart.com/flap/844/140/image/560b0116e1761adf.jpg?q=50",
            id: 2
        },
        {
            imageSrc: "https://assets.tatacliq.com/medias/sys_master/images/34356716601374.jpg",
            id: 1
        },
        {
            imageSrc: "https://rukminim1.flixcart.com/flap/844/140/image/2e0fa27309fff2a1.jpg?q=50",
            id: 1
        }
    ]
    const width = Dimensions.get("window").width
    const renderCarousel = ({ item, index }) => {
        return (
            <View style={styles.headContainer}>
                <Image
                    source={{ uri: item.imageSrc }}
                    style={{
                        flex: 1,
                        // marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
                        backgroundColor: 'white',
                        borderRadius: 8,
                        width: width,
                        height:150
                    }}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, marginTop: 10 }}>
            <Carousel
                layout={'default'}
                hasParallaxImages={true}
                loopClonesPerSide={4}
                autoplay={true}
                loop={true}
                enableMomentum ={false}
                lockScrollWhileSnapping={true}
                autoplayInterval={3000}
                autoplayDelay={2000}
                sliderWidth={width}
                itemWidth={width}
                data={carouselData}
                renderItem={renderCarousel}
                // snapToEnd
                // snapToStart
                style={{ flex: 1 }}
            />
            <Pressable style={{ position: "absolute", top: 0 }} onPress={() => props.navigation.openDrawer()}>
                <MaterialIcon name='menu' size={30} color="black" />
            </Pressable>
        </SafeAreaView>
        // <ImageBackground style={styles.headImg} source={{ uri: "https://rukminim1.flixcart.com/flap/844/140/image/2e0fa27309fff2a1.jpg?q=50" }}>
        //     <View style={styles.headContainer}>
        //         <Pressable style={{position:"absolute",top:0}} onPress={()=>props.navigation.openDrawer()}>
        //             <MaterialIcon name='menu' size={30} color="white" />
        //         </Pressable>
        //         <View style={styles.firstLine}>
        //             <Image source={require("../../../Assets/images/gps.png")} />
        //             <Text style={{ fontSize: 15, color: "white" }}>San Francisco, CA</Text>
        //         </View>
        //         <View style={styles.nextLine}>
        //             <Text style={styles.nextFont}>Good AfterNoon.</Text>
        //             <Text style={styles.nextFont}>Take a Break from Work.</Text>
        //         </View>
        //     </View>
        // </ImageBackground>
    )
}
const styles = StyleSheet.create({
    headContainer: {
        flex: 1,
        // backgroundColor: "rgba(0,0,0,0.3)",
        justifyContent: "center"
    },
    headImg: {
        flex: 1,
    },
    firstLine: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
    },
    nextLine: {
        marginHorizontal: 10,
        marginVertical: 8
    },
    nextFont: {
        fontSize: 28,
        fontWeight: "bold",
        color: "white"
    }
})
export default Header