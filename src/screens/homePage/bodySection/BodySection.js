import React, { useState, useEffect } from "react";
import { TextInput, ActivityIndicator, View, Text, Image, SafeAreaView, StyleSheet, ScrollView, ImageBackground, Pressable, FlatList } from "react-native";
// import { categories } from "../categoriesList";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../../../redux/actions/CategoryActions";

const BodySection = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get("http://10.0.2.2:3000/categories")
            .then((res) => dispatch(getCategory(res.data)))
            .catch((err) => console.log("This is the error", err))
    }, [])
    const categories = useSelector(state => state.category.categories)
    const isLoading = useSelector(state => state.category.isLoading)
    const stackData = useSelector(state => state.stack.stackProps)
    const renderCategories = ({ item, index }) => {
        return (
            <ImageBackground key={index} style={styles.firstRowBgImages} source={{ uri: item.categoryImage }}>
                <Pressable onPress={() => stackData.navigate("Products", { categoryId: item.id })} style={styles.firstSecContent}>
                    <Text style={{ color: "white", fontSize: 17, fontWeight: "bold", textAlign: "center" }}>{item.categoryName}</Text>
                </Pressable>
            </ImageBackground>
        )
    }
    return (
        <SafeAreaView style={styles.bodyContent}>
            <View style={styles.secHead}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
                <Image source={require("../../../Assets/images/arrow.png")} />
            </View>

            <View  contentContainerStyle={styles.imgContainer}>
                {isLoading ?
                    <View style={{ marginLeft: 150 }}>
                        <ActivityIndicator size={50} color="indigo" />
                    </View>
                    :
                    <FlatList
                        data={categories}
                        renderItem={renderCategories}
                        horizontal={true}
                        keyExtractor={(item) => item.id}
                    />
                    // categories?.map((category, index) => (
                    //     <ImageBackground key={index} style={styles.firstRowBgImages} source={{ uri: category.categoryImage }}>
                    //         <Pressable onPress={() => stackData.navigate("Products", { categoryData: category })} style={styles.firstSecContent}>
                    //             <Text style={{ color: "white", fontSize: 17, fontWeight: "bold", textAlign: "center" }}>{category.categoryName}</Text>
                    //         </Pressable>
                    //     </ImageBackground>
                    // ))
                }

            </View>


            <View style={styles.secHead}>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Recommended for you</Text>
                <Image source={require("../../../Assets/images/arrow.png")} />
            </View>
            <ScrollView horizontal={true} contentContainerStyle={styles.imgContainer}>
                <View style={styles.secContent}>
                    <Image style={styles.firstRowImages} source={{ uri: "https://www.hungryforever.com/wp-content/uploads/2020/10/8678994a1631f4c18015736beeee1406_delish-200603-toll-house-chocolate-chip-cookies-0003-landscape-ag-1591384336.jpg" }} />
                    <Text style={styles.imageName}>Googie Googie Cookie</Text>
                    <Text style={{ color: "grey", fontSize: 15, fontWeight: "500" }}>Good for your teeth</Text>
                </View>
                <View style={styles.secContent}>
                    <Image style={styles.firstRowImages} source={{ uri: "https://shahzadidevje.com/wp-content/uploads/2019/01/Homemade-Pumpkin-Granola-landscape.jpg" }} />
                    <Text style={styles.imageName}>Oreo cereal</Text>
                    <Text style={{ color: "grey", fontSize: 15, fontWeight: "500" }}>3x pleasure</Text>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    bodyContent: {
        marginHorizontal: 10,
    },
    secHead: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10,

    },
    secContent: {
        width: 242,
        height: 190,
        marginHorizontal: 7,
        textAlign: "left"
    },
    firstSecContent: {
        width: 150,
        height: 150,
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 10,
        justifyContent: "center"
    },
    firstRowImages: {
        width: 240,
        height: 120,
        borderRadius: 8,
    },
    imgContainer: {
        flexDirection: "row",
        marginVertical: 20,

    },
    imageName: {
        fontSize: 22,
        fontWeight: "bold"
    },
    firstRowBgImages: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginHorizontal: 7
    }
})
export default BodySection