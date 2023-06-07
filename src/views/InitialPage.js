import React from "react";
import { View } from "react-native";
import ButtonSelect from "../components/ButtonSelect";

export function InitialPage({navigation}){

    return(
        <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
            <ButtonSelect name="Todos Pokemons" navigation={navigation} option="AllPokes"/>
            <ButtonSelect name="Nativos por Geração" navigation={navigation} option="Home"/>
            <ButtonSelect name="Meus Pokemons" navigation={navigation} option="Favoritos"/>
        </View>
    )
}