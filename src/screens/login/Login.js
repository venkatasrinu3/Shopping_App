import React from 'react';
import { LogBox, View, Image, Text, ImageBackground, Pressable, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNaiveStackNavigator } from '@react-navigation/native-stack'
import { useDispatch } from 'react-redux';
import { styles } from './Login.styles';
import { getStack } from '../../redux/actions/StackNavigation';

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
])

const LoginPage = ({ navigation }) => {
  const dispatch = useDispatch()
  const navigateToHome = () => {
    navigation.navigate("DrawerNavigation")
    dispatch(getStack(navigation))
  }
  return (
    <ImageBackground style={styles.bgImg} source={{ uri: "https://thumbs.dreamstime.com/b/scenery-mobile-wallpaper-nature-background-bamboo-portrait-view-scenery-mobile-wallpaper-nature-background-bamboo-113640891.jpg" }}>
      <View style={styles.homeContainer}>
        <Image source={require("../../Assets/images/snackLogo.png")} style={{ marginTop: 100 }} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity activeOpacity={0.5}>
          <Pressable style={[styles.fb_btn, { backgroundColor: "rgb(24,119,242)", }]}>
            <Image source={require("../../Assets/images/fb_logo.png")} style={styles.fb_logo} />
            <Text style={[styles.fb_txt, { color: "white", }]}>Sign In with Facebook</Text>
          </Pressable>
          <Pressable style={[styles.fb_btn, { backgroundColor: "rgba(255,255,255,0.95)", }]}>
            <Image source={require("../../Assets/images/g_logo.png")} style={styles.fb_logo} />
            <Text style={[styles.fb_txt, { color: "rgba(0,0,0,0.54)", }]}>Sign In with Google</Text>
          </Pressable>
          <Pressable style={[styles.fb_btn, { backgroundColor: "black", }]}>
            <Image source={require("../../Assets/images/apple_logo.png")} style={styles.fb_logo} />
            <Text style={[styles.fb_txt, { color: "white", }]}>Sign In with Apple</Text>
          </Pressable>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{ width: 230, borderBottomWidth: 2, borderBottomColor: "rgba(255,255,255,0.3)", marginVertical: 25 }}

          >
            {/* <Pressable onPress={() => { navigation.navigate("DrawerNavigation") }}> */}
            <Pressable onPress={navigateToHome}>
              <Text style={{ textAlign: "center", fontSize: 20, color: "white", fontWeight: "bold" }} >Skip Logging in</Text>
            </Pressable>
          </View>
        </TouchableOpacity>
        <Pressable style={[styles.fb_btn, { backgroundColor: "white", marginVertical: 20 }]} onPress={() => navigation.navigate("Signin")}>
          <Text style={[styles.fb_txt, { color: "rgb(238,103,35)", }]} >Sign In with Email</Text>
        </Pressable>
      </View>
    </ImageBackground>
  )
}

export default LoginPage