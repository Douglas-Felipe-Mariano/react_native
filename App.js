import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
 

// import Props from './src/Ex_02';
// import Index from './src/Atividade_01';
// import Ex_03 from './src/Ex_03';
// import Atividade_03   from './src/Atividade_03';
// import Ex_04 from './src/Ex_04';
// import Ex_05 from './src/Ex_05';
// import { useState } from 'react';
import Exemplo_5 from './src/Atividade_5-Ewerto';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Props mensagem={"Sistema react-native"}/>
//       <Props mensagem={"Hoje está calor"}/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App(){
  return(
    <View style={styles.container}>
      <Exemplo_5/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c51162",
    padding: 8
    ,
    alignItems:"center",
    justifyContent:"center",
  },

});
