import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
 

// import Props from './src/Ex_02';
// import Index from './src/Atividade_01';
// import Ex_03 from './src/Ex_03';
// import Atividade_03   from './src/Atividade_03';
import Ex_04 from './src/Ex_04';


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
      <Ex_04/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b71c1c",
    padding: 16,
    alignItems:"center",
    justifyContent:"center",
  },

});
