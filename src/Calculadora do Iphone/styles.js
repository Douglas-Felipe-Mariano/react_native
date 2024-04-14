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
        justifyContent:"space-between",
        width:"%100",   
    },
    botoes_acao:{
        backgroundColor:'#d9d9d9',
        width:"25%",
        alignItems:'center',
        margin:15,
        borderRadius:15
    },
})

export default styles