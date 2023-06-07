import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Database from "../database/Database";
import ButtonSelectPokemon from "../components/ButtonSelectPokemon";
import Load from "./Load";

export function AllPokes({navigation}){

    const [pokemons, setPokemons] = useState([])
    const [pesquisa, setPesquisa] = useState('')
    const [load, setLoad] = useState(true)
    const [iniciar, setIniciar] = useState("pokemon?limit=1010&offset=0")

    async function getPokemons(){
        try{
            const res = await Database.get(`/${iniciar}`)
            setPokemons(res.data.results)
        }catch(error){
            console.log(error)
        }
    }

    function setName(){
        setIniciar(`pokemon/${pesquisa}`)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    useEffect(()=> {
        setTimeout(()=>{
            setLoad(false)
        }, 5000)
    })

    if(load) return <Load/>

    return(
        <View>
            <TextInput placeholder="Id ou Nome" value={pesquisa} onChangeText={setPesquisa} style={styles.txtInput}/>
            <FlatList 
            data={pokemons}
            renderItem={({item}) => 
            <ButtonSelectPokemon name={item.name} navigation={navigation}/>}
            keyExtractor={item => item.name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    txtInput:{
        borderBottomColor: "black",
        width: 350,
        borderBottomWidth: 1,
        textTransform: "lowercase",
        color: "black",
        marginLeft: 15,
    }
})