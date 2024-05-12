import {Pressable, Text, TextInput, View } from "react-native";
import styles from "../../Styles/styles";

export default function form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                placeholder="Ex: 1.75"
                keyboardType="numeric"/>


                <Text>Peso</Text>
                <TextInput
                placeholder="Ex: 75kg"
                keyboardType="numeric"/>
                <Pressable>Calcular IMC</Pressable>
            </View>
            <ResultIMC messageResultIMC={messageIMC} ResultIMC={IMC}/>
        </View>
    )
};