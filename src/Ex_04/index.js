import { View, Text, TextInput, Pressable} from "react-native";
import styles from "./styles";
import {useState} from "react";




export default function Ex_04(){

    const [mensagem, setMensagem] = useState("Sua mensagem aqui");
    const [mensagem2, setMensagem2] = useState("Outra mensagem");
    const [mensagemTela, setMensagemTela] = useState("");    

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.txt_saida}>{mensagem}</Text>

            <TextInput 
            style={styles.txt_entrada}
            placeholder="Digite o texto aqui..."
            onChangeText={(txt) => setMensagem(txt)}
            />

            <Text style={styles.txt_saida}>{mensagemTela}</Text>

            <TextInput
            style={styles.txt_entrada}
            // placeholder="Digite a outra mensagem..."
            onChangeText={(entrada) => setMensagem2(entrada)}
            />

            <Pressable onPress={()=> setMensagemTela(mensagem2)} onChangeText={(mensagem2) => (mensagem2)}>
                <Text>Exibir Mensagem</Text>
            </Pressable>
        </View>
    );
}