import React, {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./style";

export default function Ex_03 () {

    const [numero, setNumero] = useState(0);

    function ola(mundo){
        alert("Olá " + mundo);
    }

    function incremento(){
        const inc = numero +1;
        setNumero(inc);
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.titulo}>
                Exemplo 3
            </Text>
            <TouchableOpacity 
            style = {styles.botao}
            onPress={() => {ola ("Mundo")}}
            >

                <Text style = {styles.txtbotao}>Diga "Olá Mundo"</Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>Valor: {numero}</Text>

            <TouchableOpacity 
            style = {styles.botao}
            onPress={() => incremento()}
            >

            <Text style = {styles.txtbotao}>+ 1"</Text>
            </TouchableOpacity>
        </View>
    );
}