import { TextInput } from "react-native";
import { useState } from "react";
import styles from "./styles";


export default function Inputs({ valor, alzValor, readOnly = false }) {

    const [isFocus, setIsFocus] = useState(false);

    return (
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
            readOnly={readOnly}
        />
    )

}