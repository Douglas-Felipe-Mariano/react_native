import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Ex_07 from './src/Ex_07';
 

// import Props from './src/Ex_02';
// import Index from './src/Atividade_01';
// import Ex_03 from './src/Ex_03';
// import Atividade_03   from './src/Atividade_03';
// import Ex_04 from './src/Ex_04';
// import Ex_05 from './src/Ex_05';
// import Ex_06 from './src/ex_6';
// import Atividade_06 from './src/Atividade_06';

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
      <Ex_07/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#AAA",
    padding: 8,
  },

});
