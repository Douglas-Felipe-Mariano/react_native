import { Text, View } from "react-native";
import styles from "../../Styles/styles";

export default function ResultIMC(Props){
    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>{Props.resultIMC}</Text>
            <Text style={styles.paragraph}>{Props.mensageResultIMC}</Text>
        </View>
    );
};