// import React, {useState} from "react";
// import {View, Text, TouchableOpacity} from "react-native";
// import styles from "./styles";

// export default function Atividade () {

//     const [numero, setNumero] = useState(0);

//     function ola(mundo){
//         alert("Olá " + mundo);
//     }

//     function adicao(){
//         const add = numero +1;
//         setNumero(add);
//     }
//     function subtracao(){
//         const sub = numero -1;
//         setNumero(sub);
//     }

//     function zerar (){
//         const zerar = numero * 0;
//         setNumero(zerar);
//     }

//     return (
//         <View style = {styles.container}>
//             <Text style = {styles.titulo}>
//                 Exemplo 3
//             </Text>

//             <TouchableOpacity 
//             style = {styles.botao}
//             onPress={() => {ola ("Mundo")}}
//             >
//             <Text style = {styles.txtbotao}>Diga "Olá Mundo"</Text>
//             </TouchableOpacity>

//             <View style ={styles.container_conta}>
//             <TouchableOpacity 
//                     style = {styles.botao_sub}
//                     onPress={() => subtracao()}
//                 >
//                 <Text style = {styles.txtbotao}>"- "</Text>
//                 </TouchableOpacity>

//                 <Text style={styles.titulo}>Valor: {numero}</Text>

//                 <TouchableOpacity 
//                     style = {styles.botao_soma}
//                     onPress={() => adicao()}
//                 >
//                 <Text style = {styles.txtbotao}>"+"</Text>
//                 </TouchableOpacity>
                

//             </View>

//             <TouchableOpacity 
//                     style = {styles.botao}
//                     onPress={() => zerar()}
//                 >
//                 <Text style = {styles.txtbotao}>Zerar</Text>
//                 </TouchableOpacity>
//         </View>












//     );
// }