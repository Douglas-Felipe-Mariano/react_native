import * as React from 'react'
import {Text, TouchableHighlight } from 'react-native'
import styles from './styles';

export default function Button(props) {

    const stylesButton = [styles.button];
    if (props.double) stylesButton.push(styles.buttonDouble);
    if (props.triple) stylesButton.push(styles.buttonTriple);
    if (props.double) stylesButton.push(styles.operationButton);


    return(
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styles.button}>{props.label}</Text>
        </TouchableHighlight>
    );
}