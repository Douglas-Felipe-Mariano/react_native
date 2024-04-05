import { View, Text, Pressable, TextInput, Touchable } from "react-native";
import styles from "./syles";
import { useState } from "react";

export default function Ex_05(){

    const [n1, setN1] = useState()
    const [n2, setN2] = useState();
    const [total, setTotal] = useState();
  
    function soma(){
      setTotal(parseInt(n1)+parseInt(n2));
    }
    function sub(){
        setTotal(parseInt(n1)-parseInt(n2));
    }
    function mult(){
        setTotal(parseInt(n1)*parseInt(n2));
    }
    function div(){
        setTotal(parseInt(n1)/parseInt(n2));
    }
    function zerar(){
        setTotal(0)
        setN1('')
        setN2('')
    }
  
    return(
        <View style={styles.container} >
            <Text style={styles.txtexemplo}>Exemplo_5</Text>
            
            <Text style={styles.txtSaida}>Calculadora básica</Text>

            <Text style={styles.txtlabel}>1° número </Text>
            <TextInput 
                style={styles.txtentrada}
                onChangeText={ (entrada) => setN1(entrada)}
                value={n1}
            >

            </TextInput>

            <Text style={styles.txtSaida}>+</Text>

            <Text style={styles.txtlabel}>2° Número</Text>
            <TextInput 
                style={styles.txtentrada}
                onChangeText={(entrada)=> setN2(entrada)}
                value={n2}
            >
            </TextInput>

            <Text style={styles.txtSaida}>=</Text>

            <Text style={styles.txtlabel}>Total</Text>
            <TextInput 
                style={styles.txtentrada}
                editable={false}
                value={total}
            >
            </TextInput>


            <View style={styles.viewbotao}>
                <Pressable style={styles.button} onPress={() => soma()}> 
                    <Text style={styles.txtbutton}>+</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => sub()}> 
                    <Text style={styles.txtbutton}>-</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => mult()}> 
                    <Text style={styles.txtbutton}>X</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => div()}> 
                    <Text style={styles.txtbutton}>/</Text>
            </Pressable>
            </View>
            
            <Pressable 
                style={styles.button_zerar}
                onPress={() => zerar()}    
            >
                <Text style={styles.txtbutton}>Zerar</Text>
            </Pressable>

        </View>
    )
} 