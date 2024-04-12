import { TextInput } from "react-native";
import { useState } from "react";
import styles from "./styles";


export default function Input({valor, alzValor, editable=true}) {

    const [isFocus, setIsFocus] = useState(false);
    
    <TextInput
    style={
        [
            styles.txtEntrada,
            isFocus ?
                {
                    borderColor: '#C51162',
                    outline: 'none',
                }
                :
                {}
        ]
    }
    onFocus={() => setIsFocus(true)}
    onBlur={() => setIsFocus(false)}
    onChangeText={(num) => alzValor(num)}
    value={valor}
    keyboardType='numeric'
    editable={editable}
/>

}