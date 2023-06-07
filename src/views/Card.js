import React, { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Database from "../database/Database";
import typesDatabase from "../database/typesDatabase"
import Load from "./Load";
import estrelaVazada from "../images/estrelaVazada.png"
import estrelaAmarela from "../images/estrelaAmarela.png"

export default function Card({route}){

    const [pokemon, setPokemon] = useState("")
    const [status, setStatus] = useState([])
    const [type, setType] = useState([])
    const [id, setId] = useState("")
    const [shyne, setShyne] = useState('img1')
    const [load, setLoad] = useState(true)
    const [estrela, setEstrela] = useState('img1')

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
        img1: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
        img2: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`
    }

    let imgEstrela ={
        img1: estrelaVazada,
        img2: estrelaAmarela,
    }

    function tradeShyni(){
        setShyne(state => state === 'img1' ? 'img2': 'img1')
    }

    function tradeEstrela(){
        setEstrela(state => state === 'img1' ? 'img2': 'img1')
        console.log(pokemon)
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
                <View style={{marginLeft: 5, marginTop: 5}}>
                    <TouchableOpacity onPress={tradeEstrela}>
                        <ImageBackground source={imgEstrela[estrela]}
                        style={{width: 30, height: 30}}/>
                    </TouchableOpacity>
                </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={tradeShyni}>
                    <ImageBackground source={{uri: imagem[shyne]}}
                    style={{width: 150, height: 150, resizeMode: "stretch"}} />
                </TouchableOpacity>
                <Text adjustsFontSizeToFit style={styles.name}>{pokemon} #{id}</Text>
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
                                width: 100*(statos.base_stat/100),
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
        fontSize: 30,
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