import React from "react"
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Contact from "./contact/Contact";
import Market from "./contact/Market";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcon from "react-native-vector-icons/MaterialIcons"
import DrawerNavigation from "./homePage/DrawerNavigation";
import Create from "./createPage/Create";
import WishList from "./wishlist/Wishlist";
import Account from "./account/Account";

const Tab = createMaterialBottomTabNavigator()
// const Tab = createBottomTabNavigator()
const BottomTabNavigation = (props) => {

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator labeled={true} screenOptions={{ headerShown: false }} activeColor="royalblue" barStyle={{ paddingVertical: 3, backgroundColor: "lightyellow" }} >
                <Tab.Screen labelStyle={{fontSize:20 }} name="Home" component={DrawerNavigation}
                // {/* <Tab.Screen labelStyle={{ fontSize: 20 }} name="Home"  children={()=><DrawerNavigation stackNavigation={props.navigation}/>} */}
                    options={{
                        tabBarLabel: "Home",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcon name="home" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Market" component={Market}
                    options={{
                        tabBarLabel: "Market",

                        tabBarIcon: ({ color }) => {
                            return (
                                <MaterialCommunityIcon name="basket" color={color} size={26} />
                            )
                        },
                    }}
                />
                <Tab.Screen name="Create" component={Create}
                    options={{
                        tabBarLabel: "Create",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcon name="pencil" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Wishlist" component={WishList}
                    options={{
                        tabBarLabel: "Cart",
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcon name="cart" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Account" component={Account}
                    options={{

                        tabBarLabel: "Account",
                        tabBarIcon: ({ color }) => (
                            <MaterialIcon name="person" color={color} size={26} />
                        ),
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default BottomTabNavigation