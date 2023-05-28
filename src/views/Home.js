import React, { useEffect, useState } from "react";
import Database from "../database/Database";
import { View } from "react-native";
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
        <View style={{flex: 1,alignItems: "center", justifyContent: "center"}}>
            {region.map( regions => (
                <ButtonSelect name={regions.name} navigation={navigation} option="region"/>
            ))}
        </View>
    )
}