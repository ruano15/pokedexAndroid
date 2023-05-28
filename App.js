import React from "react";
import { View } from "react-native";
import AppRoutes from "./src/routes/AppRoutes";

export default function App(){

  return(
    <View style={{flex: 1}}>
      <AppRoutes/>
    </View>
  )
}