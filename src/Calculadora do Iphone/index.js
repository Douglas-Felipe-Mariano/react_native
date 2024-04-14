import {View, Text, Pressable} from "react-native"
import { useState } from "react";
import styles from "./styles";

export default function calculadora(){
    return(
        <View style={styles.view_pai}>
            <View style={styles.view_botoes}>
                <Pressable style={styles.botoes_acao}><Text>AC</Text></Pressable>
                <Pressable style={styles.botoes_acao}><Text>%</Text></Pressable>
                <Pressable style={styles.botoes_acao}><Text>=</Text></Pressable>
                <Pressable style={styles.botoes_acao}><Text>off</Text></Pressable>
            </View>
            <View>

            </View>

            <View>

            </View>

            <View>

            </View>
        </View>
    );
}