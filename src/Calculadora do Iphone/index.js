import { View, Text, Pressable } from "react-native"
import { useState } from "react";
import styles from "./styles";
import { TextInput } from "react-native-web";

export default function calculadora() {

    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)
    const [n4, setN4] = useState(0)
    const [n5, setN5] = useState(0)
    const [n6, setN6] = useState(0)
    const [n7, setN7] = useState(0)
    const [total, setTotal] = useState(0)

    return (
        <View style={styles.view_pai}>
            <View style={styles.view_calculadora}>

                <TextInput ></TextInput>

                <View style={styles.view_botoes}>
                    <Pressable style={styles.botoes_acao}><Text style={styles.txt_preto}>C</Text></Pressable>
                    <Pressable style={styles.botoes_acao}><Text style={styles.txt_preto}>+/-</Text></Pressable>
                    <Pressable style={styles.botoes_acao}><Text style={styles.txt_preto}>%</Text></Pressable>
                    <Pressable style={styles.botao_amarelo}><Text style={styles.txt_branco}>÷</Text></Pressable>
                </View>

                <View style={styles.view_botoes}>
                    <Pressable style={styles.botoes_acao}><Text style={styles.txt_preto}>7</Text></Pressable>
                    <Pressable style={styles.botoes_acao}><Text style={styles.txt_preto}>8</Text></Pressable>
                    <Pressable style={styles.botoes_acao}><Text style={styles.txt_preto}>9</Text></Pressable>
                    <Pressable style={styles.botao_amarelo}><Text style={styles.txt_branco}>X</Text></Pressable>
                </View>

                <View style={styles.view_botoes}>
                    <Pressable style={styles.botoes_acao}><Text style={styles.txt_preto}>4</Text></Pressable>
                    <Pressable style={styles.botoes_acao}><Text style={styles.txt_preto}>5</Text></Pressable>
                    <Pressable style={styles.botoes_acao}><Text style={styles.txt_preto}>6</Text></Pressable>
                    <Pressable style={styles.botao_amarelo}><Text style={styles.txt_branco}>-</Text></Pressable>
                </View>

                <View style={styles.view_botoes}>
                    <Pressable style={styles.botoes_acao}><Text style={styles.txt_preto}>1</Text></Pressable>
                    <Pressable style={styles.botoes_acao}><Text style={styles.txt_preto}>2</Text></Pressable>
                    <Pressable style={styles.botoes_acao}><Text style={styles.txt_preto}>3</Text></Pressable>
                    <Pressable style={styles.botao_amarelo}><Text style={styles.txt_branco}>+</Text></Pressable>
                </View>

                <View style={styles.view_botoes}>
                    <Pressable style={styles.botao_zero}><Text style={styles.txt_preto}>0</Text></Pressable>
                    <Pressable style={styles.botoes_acao}><Text style={styles.txt_preto}>,</Text></Pressable>
                    <Pressable style={styles.botao_amarelo}><Text style={styles.txt_preto}>=</Text></Pressable>
                </View>
            </View>
        </View>
    );
}