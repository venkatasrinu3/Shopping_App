import React, { useState, useEffect } from "react";
import { TextInput, View, Text, StyleSheet, SafeAreaView, ScrollView, Image, FlatList, Pressable } from "react-native"
import LinearGradient from "react-native-linear-gradient";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { getProducts } from "../../redux/actions/getProducts";
import MaterialIcon from "react-native-vector-icons/MaterialIcons"

const ProductsPage = (props) => {
    const categoryId = props.route.params.categoryId
    const [searchKey, setSearchKey] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`http://10.0.2.2:3000/products?categoryId=${categoryId}`)
            .then((res) => dispatch(getProducts(res.data)))
            .catch((err) => console.log("This is the Error", err))
    }, [])
    const stackData = useSelector(state => state.stack.stackProps)


    const renderProducts = ({ item, index }) => {
        return (

            <Pressable onPress={() => stackData.navigate("SingleProductPage", { productInfo: item })} style={styles.productContainer}>
                <View style={styles.imgContainer}>
                    <Image resizeMode="center" source={{ uri: item.productImage }} style={{ flex: 2, width: 200, height: 130, marginVertical: 5 }} />
                </View>
                <View style={styles.textContainer}>
                    <Text ellipsizeMode="tail" numberOfLines={1} style={styles.textContent}>{item.title}</Text>
                    <Text style={styles.textContent}>{item.price}/-</Text>
                </View>
            </Pressable>

        )
    }
    const changeProduct = (textValue) => {
        setSearchKey(textValue)
    }
    const searchProduct = () => {
        if (searchKey !== "") {
            axios.get(`http://10.0.2.2:3000/products?title=${searchKey}`)
                .then((res) => dispatch(getProducts(res.data)))
                .catch((err) => console.log("This is the Error", err))
        } else {
            axios.get(`http://10.0.2.2:3000/products?categoryId=${categoryId}`)
                .then((res) => dispatch(getProducts(res.data)))
                .catch((err) => console.log("This is the Error", err))
        }
    }
    const products = useSelector(state => state.product.products)
    // console.log("this is the Lidt OF Productes",products)
    return (
        <LinearGradient colors={["skyblue", "lightpink"]} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} style={styles.safeView}>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={changeProduct} style={styles.textInput} placeholder="Enter the Product Name" placeholderTextColor={"yellow"} />
                <MaterialIcon onPress={searchProduct} name="search" color={"purple"} size={35} style={{ backgroundColor: "rgba(0,0,0,0.3)", paddingHorizontal: 20, paddingVertical: 5, borderTopRightRadius: 8, borderBottomRightRadius: 8 }} />
            </View>
            <FlatList
                data={products}
                renderItem={renderProducts}
                keyExtractor={(item, index) => index}
                numColumns={2}
            />
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    searchIcon: {
        backgroundColor: "rgba(0,0,0,0.3)",
        paddingHorizontal: 20,
        paddingVertical: 7,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center"
    },
    textInput: {
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.3)",
        width: "70%",
        marginVertical: 5,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: "rgba(0,0,0,0.3)",
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        fontStyle: "italic",
        marginLeft: 5
    },
    productContainer: {
        felx: 1,
        marginHorizontal: 2,
        marginVertical: 2,
        // justifyContent: "space-between",
        // alignItems: "center",
        borderRadius: 10,
        backgroundColor: "lightyellow",
        width: 190,

    },
    safeView: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black"
    },
    textContainer: {
        textAlign: "left",
        alignItems: "flex-start"
    },
    textContent: {
        flex: 2,
        textAlign: "left",
        fontSize: 20,
        // fontStyle:"italic",
        fontWeight: "bold",
        marginLeft: 4
    },
    imgContainer: {
        flex: 3,
        alignItems: "center",
        // backgroundColor: "indigo"
    }
})
export default ProductsPage