import React, { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Database from "../database/Database";
import typesDatabase from "../database/typesDatabase"
import Load from "./Load";

export default function Card({route}){

    const [pokemon, setPokemon] = useState("")
    const [status, setStatus] = useState([])
    const [type, setType] = useState([])
    const [id, setId] = useState("")
    const [shyne, setShyne] = useState('img1')
    const [load, setLoad] = useState(true)

    async function getPokemon(){
        try{
            const res = await Database.get(`/pokemon/${route.params.names}`)
            setPokemon(res.data.name)
            setStatus(res.data.stats)
            setType(res.data.types)
            setId(res.data.id)
        }catch(error){
            console.log(error)
        }
    }

    let imagem = {
        img1: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        img2: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`
    }

    function tradeShyni(){
        setShyne(state => state === 'img1' ? 'img2': 'img1')
    }

    useEffect(() => {
        getPokemon()
    }, [])
    useEffect(()=> {
        setTimeout(()=>{
            setLoad(false)
        }, 5000)
    })

    if(load) return <Load/>

    return(
        <View>
            <View style={styles.container}>
                <TouchableOpacity onPress={tradeShyni}>
                    <ImageBackground source={{uri: imagem[shyne]}}
                    style={{width: 200, height: 200, resizeMode: "stretch"}} />
                </TouchableOpacity>
                <Text style={styles.name}>{pokemon}</Text>
                <View style={styles.typeContainer}>
                    {type.map(Type => (
                        <View style={{alignItems: "center"}}>
                            <Image source={typesDatabase[Type.type.name].imagem} style={{width: 50, height: 50, resizeMode: "stretch"}}/>
                            <Text style={styles.type}>{Type.type.name}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <View>
                {status.map(statos =>(
                    <View style={{paddingTop: 15, paddingLeft: 20}}>
                        <Text style={styles.status} adjustsFontSizeToFit>{statos.stat.name}: {statos.base_stat}</Text>
                        <TouchableOpacity 
                            style={{backgroundColor: "red",
                                width: 200*(statos.base_stat/100),
                                height: 10,
                                borderRadius: 5}} 
                            disabled/>
                    </View>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        justifyContent: "center",
    },
    name:{
        fontSize: 40,
        color: "black",
        textTransform:"uppercase",
    },
    typeContainer:{
        flexDirection: "row"
    },
    type:{
        fontSize: 20,
        color: "black",
        paddingHorizontal: 15,
        textTransform:"uppercase",
    },
    status:{
        fontSize: 20,
        color: "black",
        textTransform:"uppercase",
    },
})