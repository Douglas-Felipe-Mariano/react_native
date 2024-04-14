import {StyleSheet} from 'react-native'
    
const styles = StyleSheet.create({
    view_pai:{
        flex:1,
        width:"100%",
        justifyContent:"center",
        backgroundColor:"gray",
        alignItems:"center"
    },
    view_botoes:{

        flexDirection:"row",
        justifyContent:"center",
        width:"%100",   
    },
    view_calculadora:{
        flex:1,
        width:"30%",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#000",
        borderRadius:25
    },
    botoes_acao:{
        backgroundColor:'#d9d9d9',
        width:50,
        height:50,
        alignItems:'center',
        margin:15,
        borderRadius:"100%",
        padding:8,
        justifyContent:"center"
    },
    txt_preto:{
        color:"000",
        fontSize:20 ,
        fontWeight:"bold"
    },
    botao_amarelo:{
        backgroundColor:"#ffa500",
        width:50,
        height:50,
        alignItems:'center',
        margin:15,
        borderRadius:"100%",
        padding:8,
        justifyContent:"center"
    },
    txt_branco:{
        color:"#fff",
        fontSize:20,
        fontWeight:"bold"
    },
    botao_zero:{
        backgroundColor:'#d9d9d9',
        width:"60%",
        height:"80%",
        alignItems:'flex-start',
        margin:15,
        borderRadius:20,
        padding:8,
        justifyContent:"center"
    },
})

export default styles