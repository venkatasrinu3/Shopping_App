import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginPage from './login/Login';


import BottomTabNavigation from './BottomTabNavigator';
import SigninPage from './signIn/Signin';
import ProductsPage from './productsPage/products';
import SingleProduct from './productsPage/singleProductPage';


const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const AppNavigation = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={LoginPage} />
                    <Stack.Screen name="DrawerNavigation" component={BottomTabNavigation} />
                    <Stack.Screen name="Signin" component={SigninPage} />
                    <Stack.Screen name="Products" component={ProductsPage} />
                    <Stack.Screen name="SingleProductPage" component={SingleProduct} />
                </Stack.Navigator>

            </NavigationContainer>
            {/* <NavigationContainer>
                <Drawer.Navigator initialRouteName='Login'>
                    <Drawer.Screen name="Login" component={Login} />
                    <Drawer.Screen name="Home" component={Home} />
                </Drawer.Navigator>
            </NavigationContainer> */}
        </>
    )
}
export default AppNavigation