import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        flex:1,
        borderWidth:2,
        backgroundColor:"#C51162",
    },
    txtSaida:{
        color:"#E914E63",
        margin:6,
        fontSize:22,
        textAlign:"center",
        fontWeight:"Bold"
    },
    txtentrada:{
        borderWidth:4,
        textAlign:"center",
        fontSize:22,
        borderColor:"#E91E63",
        height:40,
        color:"#E53935",
        borderRadius:10,
        marginTop:10,
    },
    button:{
        borderColor:"#E91E63",
        height:40,
        justifyContent:"center",
        borderRadius:10,
        marginTop:20,
    },
    txtbutton:{
        fontSize:22,
        color:"#FF80AB",
        textAlign:"center",
    },
    txtexemplo:{
        fontSize:16,
        fontWeight:"bold",
        color:"#C51162",
    },
});

export default styles;