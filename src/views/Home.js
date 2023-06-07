import React, { useEffect, useState } from "react";
import Database from "../database/Database";
import { ScrollView, View } from "react-native";
import ButtonSelect from "../components/ButtonSelect";
import Load from "./Load";

export default function Home({navigation}){

    const [generations, setGenerations] = useState([])
    const [load, setLoad] = useState(true)


    async function getRegion(){
        const res = await Database.get(`generation/`)
        try{
            setGenerations(res.data.results)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        getRegion()
    }, [])

    useEffect(()=> {
        setTimeout(()=>{
            setLoad(false)
        }, 3500)
    })

    if(load) return <Load/>

    return(
        <View style={{justifyContent: "center", alignItems: "center"}}> 
            <ScrollView>
                {generations.map( generation => (
                    <ButtonSelect name={generation.name} navigation={navigation} option="Region"/>
                ))}
            </ScrollView>
        </View>
    )
}