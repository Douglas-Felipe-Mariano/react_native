import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

import styles from './styles';

export default function Atividade_06() {

  const [massa, setMassa] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [conceito, setConceito] = useState('')
  const valor = massa / (altura * altura);


  function Calcular() {
    setResultado(valor);
  }
  function define_conceito (){
    if (18.5 > valor) {
        setConceito(`Abaixo do Peso`)
    }
    if (valor >= 18.5 && valor <= 24.9){
        setConceito(`Peso Normal`)
    }
    if (valor >= 25 && valor <= 29.9){
        setConceito(`Gordinho`)
    }
    if (valor >= 30 && valor <= 34.9){
        setConceito(`Gordo`)
    }
    if (valor >= 35 && valor <= 39.9){
        setConceito(`Gordao`)
    }
    if (valor >= 40){
        setConceito(`CARALHOO`)
    }
  }
    




  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}> Exemplo 6 </Text>
      <View style={styles.entradaImc}>
        <TextInput 
          placeholder='Massa' 
          placeholderTextColor='lightgray' 
          keyboardType='numeric' 
          style={styles.input} 
          onChangeText={(entrada) => setMassa(entrada)}
        />
        <TextInput 
          placeholder='Altura' 
          placeholderTextColor='lightgray' 
          keyboardType='numeric' 
          style={styles.input} 
          onChangeText={(entrada) => setAltura(entrada)}
        />
      </View>

      <Text style={styles.resultados}>{conceito}</Text>

      <Pressable style={styles.button} 
      onPress={()=> {
        Calcular()
        define_conceito()
        }}>
        <Text style={styles.buttonText}> Calcular </Text>
      </Pressable> 
      <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>

      
    </View>    

  );
}