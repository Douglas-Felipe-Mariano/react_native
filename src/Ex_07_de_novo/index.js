import { View, Text, } from "react-native";
import react, {useState} from "react";
import styles from "./styles";
import Button from "./Buttons";
import Display from "./display";

export default function Ex_07_de_novo (){

    const [displayValue, setDisplayValue] = useState('0');

    return(
        <View style={styles.container}>
            <Display value={displayValue}/>
            <View style={styles.buttons}>
                <Button label='AC'/>
                <Button label='/'/>
                <Button label='7'/>
                <Button label='8'/>
                <Button label='9'/>
                <Button label='*'/>
                <Button label='4'/>
                <Button label='5'/>
                <Button label='6'/>
                <Button label='-'/>
                <Button label='1'/>
                <Button label='2'/>
                <Button label='3'/>
                <Button label='+'/>
                <Button label='0'/>
                <Button label='.'/>
                <Button label='='/>
            </View>
        </View>
    )
}