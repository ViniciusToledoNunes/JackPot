import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import estilo from './estilos';

const TelaInicial = () => {
  const [ numeroSorteado1, setNumeroSorteado1 ] = useState(0);
  const [ numeroSorteado2, setNumeroSorteado2 ] = useState(0);
  const [ numeroSorteado3, setNumeroSorteado3 ] = useState(0);  
  const [ numeroSorteado4, setNumeroSorteado4 ] = useState(0);
  const [ numeroSorteado5, setNumeroSorteado5 ] = useState(0);
  const [ numeroSorteado6, setNumeroSorteado6 ] = useState(0); 
  const [ valorMinimo, setValorMinimo ] = useState(1);
  const [ valorMaximo, setValorMaximo ] = useState(60);

  const [ flagInputFocus, setFlagInputFocus ] = useState("");

  const validarCampos = (minimo, maximo) => {
    if ( isNaN(minimo) || isNaN(maximo)) {
      alert('Digite os valores');
      return false;
    }
    if ( (maximo - minimo) < 5 ){
      alert('O valor mínimo e máximo deve estar em um intervalo maior do que 5 números');
      return false;
    }
    if ( minimo > maximo ) {
      alert('O valor mínimo deve ser menor que o valor máximo');
      return false;
    }

    return true;
  }


  const gerarNumero = () => {
    const min = parseInt(valorMinimo);
    const max = parseInt(valorMaximo);
    var num = 0;
    var nume = 0;
    var numerosSorteados = [];

    if ( !validarCampos(min, max) ) {
      return;
    }
    
    while (num < 6) {
      nume = Math.floor(Math.random() * (max + 1 - min) + min);
      if (numerosSorteados.indexOf(nume) == -1){
        numerosSorteados[num] = nume;
        num++;
      }
    }

    setNumeroSorteado1(numerosSorteados[0]);
    setNumeroSorteado2(numerosSorteados[1]);
    setNumeroSorteado3(numerosSorteados[2]);
    setNumeroSorteado4(numerosSorteados[3]);
    setNumeroSorteado5(numerosSorteados[4]);
    setNumeroSorteado6(numerosSorteados[5]);

  }

  return (
    <View style = { estilo.tela }>
      <Text style = { estilo.titulo }>
        Escolha os valores mínimo e máximo para fazer o sorteio
      </Text>

      <View style = { estilo.linhaInput }>
        <Text>Valor Mínimo: </Text>

        <TextInput 
          textAlign = "center"
          keyboardType = "number-pad" 
          maxLength = { 5 } 
          autoFocus = { true }
          style = { flagInputFocus === "txt_min" ? estilo.inputFocus : estilo.inputNormal }
          onFocus={ () => setFlagInputFocus("txt_min")}
          onBlur = { () => setFlagInputFocus("") }
          value = { valorMinimo.toString() } 
          onChangeText = { valor => setValorMinimo(valor) } />
      </View>

      <View style = { estilo.linhaInput }>
        <Text>Valor Máximo: </Text>

        <TextInput 
          textAlign="center"
          keyboardType="number-pad" 
          maxLength={5}
          style = { flagInputFocus === "txt_max" ? estilo.inputFocus : estilo.inputNormal }
          onFocus = { ()=>setFlagInputFocus("txt_max") }
          onBlur = { ()=>setFlagInputFocus("") }
          value = { valorMaximo.toString() } 
          onChangeText = { setValorMaximo } />
      </View>



      <View style = { estilo.linhaInput }>
        <View style = { estilo.boxNumero }>
          <Text style = { estilo.numero }>{ numeroSorteado1 }</Text>
        </View>
        <View style = { estilo.boxNumero }>
          <Text style = { estilo.numero }>{ numeroSorteado2 }</Text>
        </View>     
        <View style = { estilo.boxNumero }>
          <Text style = { estilo.numero }>{ numeroSorteado3 }</Text>
        </View>        
      </View>
      <View style = { estilo.linhaInput }>
        <View style = { estilo.boxNumero }>
          <Text style = { estilo.numero }>{ numeroSorteado4 }</Text>
        </View>
        <View style = { estilo.boxNumero }>
          <Text style = { estilo.numero }>{ numeroSorteado5 }</Text>
        </View>     
        <View style = { estilo.boxNumero }>
          <Text style = { estilo.numero }>{ numeroSorteado6 }</Text>
        </View>        
      </View>
      <View style = { estilo.boxBotao }>
        <Button title="Sortear" onPress = { gerarNumero } color="#1f4f66"/>
      </View>      
    </View>
  );
}

export default TelaInicial;