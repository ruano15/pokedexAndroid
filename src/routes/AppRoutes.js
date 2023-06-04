import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../views/Home";
import Region from "../views/Region";
import Card from "../views/Card";
import { AllPokemons } from "../views/AllPokemons";

function AppRoutes(){

    const { Navigator, Screen } = createNativeStackNavigator()

    return(
        <NavigationContainer>
            <Navigator>
                <Screen name='Home' component={Home} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='Region' component={Region} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='Pokemon' component={Card} options={{title: '', headerTransparent: true, headerShown: false}}/>
                <Screen name='AllPokemons' component={AllPokemons} options={{title: '', headerTransparent: true, headerShown: false}}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default AppRoutes