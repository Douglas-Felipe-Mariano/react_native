import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:"#FF80AB",
        padding:8,
        width:"100%",
    },
    txtSaida:{
        color:"#E91E63",
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
    txtlabel:{
        fontSize:16,
        fontWeight:"bold",  
        color:"#C51162",
    },
    button_zerar:{
        backgroundColor:"#E91E63",
        width:"99%",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        margin:10,
    },
    button:{
        backgroundColor:"#E91E63",
        width:"22%",
        justifyContent:"center",
        borderRadius:10,
        margin:15,
    },
    viewbotao:{
        flexDirection:"row",
        flex:1,
        width:"100%",
    },
});

export default styles;