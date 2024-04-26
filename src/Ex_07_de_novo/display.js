import * as React from "react";
import {Text, View, Dimensions} from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import styles from "./styles";

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue} numberofLines={1}>{props.value}</Text>
    </View>