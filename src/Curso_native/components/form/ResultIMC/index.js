import { Text, View } from "react-native";
import styles from "../../../Styles/styles";


export default function ResultIMC(props){
    return(
        <View >
            <Text>{props.resultIMC}</Text>
            <Text>{props.mensageResultIMC}</Text>
        </View>
    );
};