import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import BottomTabNavigator from "../BottomTabNavigator";
import BodySection from "./bodySection/BodySection";
import Header from "./headerSection/Header"

const Home = (props) => {
    return (
        <View style={styles.homeContainer}>
            <View style={styles.headerContainer}>
                <Header {...props} />
            </View>
            <View style={styles.bodyContainer}>
                <BodySection {...props}/>
            </View>
            {/* <Text style={{fontSize:30,color:"brown"}}>Welcome to the Home Page</Text> */}
            {/* <BottomTabNavigator /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    homeContainer: {
        flex: 1
    },
    headerContainer: {
        flex: 1
    },
    bodyContainer: {
        flex: 3
    }
})
export default Home