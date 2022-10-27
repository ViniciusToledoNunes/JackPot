import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  boxTitulo: {
    height: 80,
    backgroundColor: '#1f4f66',
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent: 'center'
  },

  titulo: {
    color: '#0fc3d4',
    fontWeight: '700',
    fontSize: 20,
    marginRight: 10
  },
  
  subtitulo: {
    color: '#fff'
  },
  linha: {
    flexDirection: 'row',
    alignItems: "center",
  }
});

export default estilo;