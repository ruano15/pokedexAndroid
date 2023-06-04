import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ButtonSelect(props){

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.Button} onPress={() => {
                    props.navigation.navigate(`${props.option}`, {names: props.name})
                }}>
                <Text style={styles.Text} adjustsFontSizeToFit >
                    {props.name}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    Button: {
        height: 50,
        width: 300,
        borderRadius: 30,
        backgroundColor: "red",  
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 10,  
    },
    Text: {
        color: "white",
        fontSize: 25,
        textTransform:"uppercase",
    }
})