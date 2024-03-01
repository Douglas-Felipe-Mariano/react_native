import { Text, View, Image } from "react-native";
import styles from "./styles";
import Saudacoes from "./saudacoes";

import logo from '../../assets/002-1-react-native.png'

const saudacoes = [
    {nome: "Cleito", idade:"23 Anos", orientacao:"Não Binarie"},
    {nome: "Doga", idade:"19 Anin", orientacao:"MACHO"},

]
export default function Index() {
    return(
        <View style={styles.container}>
            {/* resizeMode adapta o tamanho da imagem conforme a tela */}
            <Image source={logo} style={styles.image} resizeMode="contain"/> 
            <Text style={styles.paragraph}>
                Exemplo 2
            </Text>
                {saudacoes.map(Pessoa =>
                    <Saudacoes name={Pessoa.nome}idade={Pessoa.idade}orientacao={Pessoa.orientacao}></Saudacoes>)}
                
                {/* <Saudacoes name='Mario'/>
                <Saudacoes name='Maria'/>
                <Saudacoes name='Bruna'/>
                <Saudacoes name='Bruno'/> */}
        </View>
    );
}