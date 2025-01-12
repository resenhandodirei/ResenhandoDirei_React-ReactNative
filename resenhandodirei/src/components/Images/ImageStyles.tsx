import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row', // Para exibir as imagens na horizontal
    flexWrap: 'wrap', // Permite que as imagens "quebrem" para a linha seguinte se necessário
    justifyContent: 'center', // Alinha as imagens no centro
  },
  image: {
    margin: 5, // Adiciona margem entre as imagens
    width: 400,
    height: 500,
    borderRadius: 10,
  },
  text: {
    color: 'white', // Cor do texto para quando a imagem não for encontrada
    textAlign: 'center', // Centraliza o texto
    fontSize: 16, // Define um tamanho de fonte legível
  }
});
