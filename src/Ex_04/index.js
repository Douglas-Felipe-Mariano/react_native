import { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Exemplo4() {

    const [isFocus, setIsFocus] = useState(false);

    function focusHandler() {
        setIsFocus(true);
    }

    function blurHandler() {
        setIsFocus(false);
    }

    const [mensagem, setMensagem] = useState('Seu Nome aqui!');
    const [mens1, setMens1] = useState("Digite seu Nome");
    const [mens2, setMens2] = useState('Digite seu Sobrenome');
    const [mensTela, setMensTela] = useState('');

    function atualizaMensagemHandler() {
        setMensagem(mens1+ ' ' + mens2);
        setMens1('');
        setMens2('');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.txtSaida}>{mensagem}</Text>

            <View style={styles.nome_sobrenome}>
            <Text style={styles.txtnome}>Nome:</Text>
            </View>

            <TextInput
                style={styles.txtEntrada}
                onChangeText={(entrada) => setMens1(entrada)}
                value={mens1}
            />

            <Text style={styles.txtSaida}>{mensTela}</Text>

            <View style={styles.nome_sobrenome}>
                <Text style={styles.txtnome}>Sobrenome:</Text>
            </View>

            <TextInput
                style={styles.txtEntrada}
                onChangeText={(entrada) => setMens2(entrada)}
                value={mens2}
            />
            <Pressable
                onPress={() => atualizaMensagemHandler()}
                style={styles.botao}
            >
                <Text style={styles.txtBotao}>Exibir mensagem</Text>
            </Pressable>
        </View>
    );
}