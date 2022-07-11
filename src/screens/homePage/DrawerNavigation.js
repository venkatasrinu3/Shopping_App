import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contact from '../contact/Contact';
import Home from './Home';
import About from '../contact/About';
import CustomDrawer from '../components/CustomDrawer';

// const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = (props) => {
    
    return (
        <NavigationContainer independent={true}>
            <Drawer.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
                drawerContent={(props) => <CustomDrawer {...props} />}
            >
                <Drawer.Screen name="Home" component={Home} />
                {/* <Drawer.Screen name="Home" children={()=><Home {...props}/>} /> */}
                <Drawer.Screen name="Contact" component={Contact} />
                <Drawer.Screen name="About" component={About} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default DrawerNavigation