import React from "react";
import AnimatedLottieView from "lottie-react-native";
import animation from "../icons/96855-pokeball-loading-animation.json"
import { View } from "react-native";

export default function Load(){

    return(
        <View style={{flex: 1, alignSelf: "center", justifyContent: "center"}}>
            <AnimatedLottieView 
            autoPlay
            source={animation}
            loop
            style={{width: 200, height: 200, backgroundColor: "transparent"}}
            />
        </View>
    )
}