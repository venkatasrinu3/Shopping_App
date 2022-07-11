import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, ImageBackground, Pressable } from 'react-native';


const Create = () => {
    const [value, setValue] = useState("")
    const [courseGoals, setCourseGoals] = useState([])
    const goalInputHandler = (enteredText) => {
        setValue(enteredText)
    }

    const addGoalHandler = () => {
        // setCourseGoals([...courseGoals,value])
        setCourseGoals((currentArr) => [...currentArr, value])
        // setValue("")
    }

    return (
        <ImageBackground style={styles.bgImg} source={{ uri: "https://wallpaperaccess.com/full/757572.jpg" }}>
            <View style={styles.appContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Your Course Goal!'
                        value={value}
                        onChangeText={goalInputHandler}
                    />
                    <Button title="Add Goal" onPress={addGoalHandler} />
                </View>
                <View style={styles.goalsContainer}>
                    <Pressable >
                        <Text style={{ fontSize: 35, backgroundColor: "lightgreen", textAlign: "center", color: "yellow", borderRadius: 20 }}>List Of Goals ...</Text>
                    </Pressable>
                    <ScrollView endFillColor={"green"} horizontal={false} keyboardDismissMode={"on-drag"} StickyHeaderComponent={<Text style={{color:"white"}}>Hello World</Text>} contentContainerStyle={{alignItems:"center"}}>
                        {/* <FlatList> */}
                        {courseGoals.map((goal,index) => {
                            return (
                                // <View style={{backgroundColor:"indigo",paddingHorizontal:20,marginVertical:8}} >
                                <Text style={styles.goalsList} key={index}>{goal}</Text>
                                // {/* </View> */}
                            )
                        })}
                        
                        {/* </FlatList> */}
                    </ScrollView>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgImg: {
        // opacity:0.5,
        flex: 1,
    },
    appContainer: {
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: "rgba(0,0,0,0.3)",
        flex: 1
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 2,
        borderBottomColor: "#cccccc",

    },
    textInput: {
        borderWidth: 1,
        borderColor: "#cccccc",
        width: "70%",
        marginRight: 8,
        padding: 8,
        color: "yellow"
    },
    goalsContainer: {
        flex: 5,

    },
    goalsList: {
        fontSize: 25,
        textAlign: "left",
        margin: 8,
        padding: 8,
        backgroundColor: "indigo",
        color: "yellow"
    }
})
export default Create