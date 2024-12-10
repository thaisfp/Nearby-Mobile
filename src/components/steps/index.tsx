import { View, Text } from "react-native";
import { s } from "./style";
import {Step} from "../step"

export function Steps (){
    return(
        <View style={s.container}>
            <Text style={s.title}>Veja como funciona:</Text>
            <Step/>
        </View>
    )
}