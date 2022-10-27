import React from 'react';
import { View, Text } from 'react-native';
import estilo from './estilos';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const Titulo = () => {
  return (
    <View style={estilo.boxTitulo}>
      <View style = { estilo.linha }>
        <Text style={estilo.titulo}>JackPot</Text>
        <MaterialCommunityIcons name="clover" size={24} color="white"/>
      </View>
      <Text style={estilo.subtitulo}>Hora de ver quais são os números da sorte</Text>
    </View>
  );
}

export default Titulo;
