import React, { useState } from "react"
import { View, Text, TextInput, StyleSheet, Button } from "react-native"

const SigninPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={{ alignItems: "flex-start" }}>
                    <Text style={{ textAlign: "left" }}>Email Id</Text>
                    <TextInput onChangeText={(value) => setEmail(value)} value={email} placeholder="Enter your Email" style={styles.inputField}/>
                </View>
                <View style={{ alignItems: "flex-start" }}>
                    <Text>Password</Text>
                    <TextInput autoComplete="password" onChangeText={(value) => setPassword(value)} value={password} placeholder="Enter your Password" style={styles.inputField} />
                </View>
                <Button title="Submit" color={"indigo"}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    contentContainer: {
        width: 300,
        // borderWidth: 1,
        // borderRadius: 10,
        // borderColor: "lightgrey"
    },
    inputField:{
        borderWidth:1,
        borderColor:"lightgrey",
        borderRadius:8,
        width:"100%",
        marginVertical:10
    }
})
export default SigninPage