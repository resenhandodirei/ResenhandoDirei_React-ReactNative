import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageWrapper: {
    margin: 5, // Espaço entre as imagens
  },
  image: {
    width: 150, // Largura das imagens
    height: 200, // Altura das imagens
    borderRadius: 10, // Bordas arredondadas
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5, // Espaço entre o texto e outras imagens ou elementos
  },
  text: {
    color: 'white', // Cor do texto caso a imagem não seja encontrada
    textAlign: 'center', // Centraliza o texto
    fontSize: 16, // Tamanho da fonte
  },
});
