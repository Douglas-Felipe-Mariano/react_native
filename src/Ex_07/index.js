import {View } from "react-native";
import React, { useState } from "react";

import styles from "./styles";
import Button from "./button";
import display from "./display";
import Display from "./display";

export default function Ex_07 (){

    const [displayValue, setDisplayValue] = useState('0');

    function addDigit(n){
        setDisplayValue(n);
    }

    function clearMemory(){
        setDisplayValue('0');
    }

    function defineOperacao(operacao){

    }

    return(
        <View style={styles.container}>
            <Display value={displayValue}/>
            <View style={styles.buttons}>
                <Button label='AC' triple onClick={()=> clearMemory}/>
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
};

 