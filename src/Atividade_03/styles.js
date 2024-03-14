import {StyleSheet} from "react-native"
import { inline } from "react-native-web/dist/cjs/exports/StyleSheet/compiler";

const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor:"#f5f5f5f5",
        width:"100%",
        alignItems:"center",
        padding:8,
        borderRadius:20,
    },
    container_conta: {
        padding:"2.5%",
        width:"35%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderWidth:10,
        borderColor:"#9E9E9E"
    },
    botao_soma: {
        alignItems:"center",
        backgroundColor:"#9E9E9E",
        width:"15%",
        height:"100%",
        justifyContent:"center",
    },
    botao_sub: {
        alignItems:"center",
        backgroundColor:"#9E9E9E",
        width:"15%",
        height:"100%",
        justifyContent:"center",

    },
    titulo: {
        fontSize:30,
        fontWeight :"bold",
        margin:8,
    },
    botao: {
        width:"15%",
        padding:16,
        backgroundColor:"#9E9E9E",
        alignItems:"center",
        margin:8,
        display:"block"
    }, 
    txtbotao: {
        color:"#f5f5f5",
        fontSize:20,
        display:"block",
        alignItems:"center",
        justifyContent:"center"
    }
});

export default styles;