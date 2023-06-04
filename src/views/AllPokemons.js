import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Database from "../database/Database"
import { StyleSheet } from "react-native";

export function AllPokemons({navigation}){

    const [nome, setNome] = useState("")

    return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <TextInput style={styles.textinput} placeholder="Nome do Pokemon" value={nome} onChangeText={setNome}/>
            <TouchableOpacity style={styles.botao} onPress={() => {
                Database.get(`pokemon/${nome}`)
                navigation.navigate('Pokemon', {names: nome})
            }}><Text style={styles.txtBotao}>Pesquisar</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    textinput: {
        fontSize: 30,
        textAlign: "center",
        borderBottomColor: "black",
        width: 300,
        borderBottomWidth: 1
    },
    txtBotao:{
        fontSize: 25,
        color: "white",
    },
    botao:{
        width: 150,
        height: 50,
        backgroundColor: "red",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50
    }
})