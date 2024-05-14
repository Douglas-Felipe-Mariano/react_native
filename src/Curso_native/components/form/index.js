import {Button, Pressable, Text, TextInput, View, useState } from "react-native";

import styles from "../../Styles/styles";
import ResultIMC from './ResultIMC'



export default function form(){

    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [MessageImc, setMessageImc] = useState('Preencha o Peso e Altura')
    const [imc, setIMC] = useState('')
    const [txtbuton, setTxtbuton] = useState('Calcular')

    function imcCalculator(){
        return (
            setIMC (weight/(height * height).toFixed(2))
        )
    }

    function validationIMC (){
        if (weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu IMC é igual: ')
            setTxtbuton('Calcular de Novo')
            return
        }
        setIMC(null)
        setTxtbuton('Calcular')
        setMessageImc('Preencha Peso e altura')
    }
    
    return(
        <View>
            <View> 
                <Text>Altura</Text>
                <TextInput
                onChangeText={setHeight}
                value={height}
                placeholder="Ex: 1.75"
                keyboardType="numeric"/>


                <Text>Peso</Text>
                <TextInput
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex: 75kg"
                keyboardType="numeric"/>
                <Button
                title={txtbuton}
                onPress={() => validationIMC()}
                >
                    Calcular IMC
                </Button>
            </View>
            <ResultIMC messageResultIMC={MessageImc} ResultIMC={imc}/>
        </View>
    )
};