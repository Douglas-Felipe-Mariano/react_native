import * as React from 'react';
import { Text, TouchableHighlight, Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styles from './styles';

export default function Button(props) {

    const stylesButton = [styles.button];
    if (props.double) stylesButton.push(styles.buttonDouble);
    if (props.triple) stylesButton.push(styles.buttonTriple);
    if (props.operation) stylesButton.push(styles.operationButton);

    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    );
}


