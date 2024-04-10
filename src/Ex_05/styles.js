import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: '#FF80AB', 
        padding:8,
        width:'100%',
        
    },
    paragrafo:{
        margin:6,
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        color:'#C51162'
    },
    txtSaida:{
        margin:6,
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center',
        color:'#E91E63',
        
    },
    txtentrada:{
        borderWidth:4,
        textAlign:'center',
        fontSize:22,
        borderColor:'#E91E63',
        height:40,
        color:'#E53935',
        borderRadius:10,
        marginTop:10,
    
    },
    txtlabel:{
        fontSize:16,
        fontWeight:'bold',
        color:'#C51162'
    },
    button:{
        backgroundColor:'#E91E63',
        height:'40',
        justifyContent:'center',
        borderRadius:10,
        marginTop:20,
        textAlign:'center',
        justifyContent:"center",
        alignItems:"center",
        width:'23%',
       
    },
    txtbutton:{
        fontSize:22,
        color:'#FF80AB',
        padding:8,
    },
    viewbotao:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
    },
    button_zerar:{
        backgroundColor:'#E91E63',
        height:35,
        justifyContent:'center',
        borderRadius:10,
        marginTop:10,
        textAlign:'center',
        alignItems:"center",
        width:'100%',
    },
}); 

export default styles;