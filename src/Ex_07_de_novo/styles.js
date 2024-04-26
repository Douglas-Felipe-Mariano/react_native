import { StyleSheet} from "react-native";
import * as React from 'react';
import { RFPercentage } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex:1,
        width:"100%",
        justifyContent:"center",
        backgroundColor:"#EEE",
        padding:8,
    },
    paragraph: {
        margin:6,
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        color:"#AAA",
    },
    button:{
        fontSize:RFPercentage(5),
        width: (Dimensions.get('window').width/4) - 4,
        height: (Dimensions.get('window').width/4) - 4,
        padding:20,
        backgroundColor:"#F0F0F0",
        textAlign:"center",
        borderWidth:1,
        borderColor:"#888"
    },
    buttons:{
        flexDirection:'row',
        flexWrap:"wrap"
    },
    display:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"rgba(0,0,0,0.6)",
        alignItems:"flex-end"
    },
    displayValue:{
        fontSize: RFPercentage(8),
        color:'#FFF',
    },
    operationButton:{
        color:"#FFF",
        backgroundColor:"#FAB231",
    },
    buttonDouble:{
        width: ((Dimensions.get('window').width/4)-4 ) *2,
    },
    buttonTriple:{
        width: ((Dimensions.get('window').width/4)-4 ) *3,
    },
})

export default styles