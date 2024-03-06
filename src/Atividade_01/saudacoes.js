import { Text } from "react-native";

const Saudacoes = (props) => {
    return(
        <Text style={{textAlign:"center"}}>
            Olá {props.name}
            {/* Idade: {props.idade}
            Orinetação Sexual: {props.orientacao} */}
        </Text>
    );
}


export default Saudacoes