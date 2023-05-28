import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import Database from "../database/Database";
import ButtonSelectPokemon from "../components/ButtonSelectPokemon";
import Load from "./Load";

export default function Region({route, navigation}){

    const [pokemons, setPokemons] = useState([])
    const [load, setLoad] = useState(true)

    async function getPokemons(){
        const res = await Database.get(`/pokedex/${route.params.names}`)
        try{
            setPokemons(res.data.pokemon_entries)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getPokemons()
    }, [])
    useEffect(()=> {
        setTimeout(()=>{
            setLoad(false)
        }, 3500)
    })

    if(load) return <Load/>

    return(
        <View>
            <ScrollView>
                {pokemons.map(pokemon => (
                    <ButtonSelectPokemon name={pokemon.pokemon_species.name} navigation={navigation}/>
                ))}
            </ScrollView>
        </View>
    )
}