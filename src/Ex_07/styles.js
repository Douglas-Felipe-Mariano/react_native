import { StyleSheet } from "react-native";
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Dimensions } from "react-native";



const styles = StyleSheet.create ({
    container:{
        flex:1,
        alignItems:"center",
        width:"100%",
        justifyContent:"center",
        backgroundColor:"#EEE",
        padding:8
    },
    paragraph:{
        margin:6,
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        color:"#AAA"
    },
    buttons:{
        flexDirection:'row',
        flexWrap:"wrap"
    },
    button: {
        fontSize: RFPercentage(5),
        height: (Dimensions.get('window').width / 4) - 4,
        width: (Dimensions.get('window').width / 4) - 4,
        padding: 20,
        backgroundColor: "#F0F0F0",
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#888",
    },
    display:{
        flex:1,
        padding:10,
        justifyContent:"center",
        backgroundColor:'rgba(0,0,0,0.6)',
        alignItems:"flex-end",
    },
    displayValue:{
        fontSize: RFPercentage(8),
        color:"#FFF"
    },
    operationButton:{
        color:"#FFF",
        backgroundColor:"#FA8231",
    },
    buttonDouble:{
        width:((Dimensions.get("window").width/4)-4)*2,
    },
    buttonTriple:{
        width:((Dimensions.get("window").width/4)-4)*3,
    },
});

export default styles