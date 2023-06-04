import React, { useEffect, useState } from "react";
import Database from "../database/Database";
import { ScrollView, View } from "react-native";
import ButtonSelect from "../components/ButtonSelect";

export default function Home({navigation}){

    const [region, setRegion] = useState([])

    async function getRegion(){
        const res = await Database.get(`region/`)
        try{
            setRegion(res.data.results)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getRegion()
    }, [])

    return(
        <ScrollView style={{flex: 1}}>
            {region.map( regions => (
                <ButtonSelect name={regions.name} navigation={navigation} option="Region"/>
            ))}
            <ButtonSelect name="Pesquisar Pokemons" navigation={navigation} option="AllPokemons"/>
        </ScrollView>
    )
}