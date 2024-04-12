import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';
import Input from './inputs';
import Botao from './botao';

export default function Exemplo_5() {

    const [isFocusN1, setIsFocusN1] = useState(false);
    const [isFocusN2, setIsFocusN2] = useState(false);
    const [isFocusTotal, setIsFocusTotal] = useState(false);
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState('');

    function soma() {
        setTotal(parseFloat(n1) + parseFloat(n2));
    }

    function subtrai() {
        setTotal(parseFloat(n1) - parseFloat(n2));
    }

    function multiplica() {
        setTotal(parseFloat(n1) * parseFloat(n2));
    }

    function divide() {
        setTotal(parseFloat(n1) / parseFloat(n2));
    }

    function limpa() {
        setN1(0);
        setN2(0);
        setTotal('');
    } 

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Exemplo 5 </Text>

            <Text style={styles.txtSaida}> Calculadora básica </Text>

            <Text style={styles.textLabel}> 1º número </Text>
            <Input valor={n1} alzValor={setN1}/>

            <Text style={styles.txtSaida}> + </Text>

            <Text style={styles.textLabel}> 2º número </Text>
            <Input valor={n2} alzValor={setN2}/>

            <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

            <Text style={styles.textLabel}> Total </Text>
            <Input valor={total} alzValor={setTotal} editable={false}/>

            <View style={styles.botoes}>                
                <Botao sinal={'+'} operacao={soma} />
                <Botao sinal={'-'} operacao={subtrai} />
                <Botao sinal={'x'} operacao={multiplica} />
                <Botao sinal={'/'} operacao={divide} />
            </View>
            
            <Botao sinal={'Limpar'} operacao={limpa} />

        </View>
    );
}