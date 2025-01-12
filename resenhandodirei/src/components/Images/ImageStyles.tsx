import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: 'row', // Exibe as imagens na horizontal (row)
    flexWrap: 'wrap', // Permite que as imagens "quebrem" para a linha seguinte quando o espaço for insuficiente
    justifyContent: 'center', // Centraliza as imagens horizontalmente
    alignItems: 'flex-start', // Alinha as imagens na parte superior (opcional, se preferir que as imagens fiquem no topo)
  },
  image: {
    margin: 5, // Adiciona espaço entre as imagens
    width: '50%', // Ajuste a largura das imagens para que caibam na tela
    height: 200, // Tamanho fixo de altura
    borderRadius: 10, // Bordas arredondadas
  },
  text: {
    color: 'white', // Cor do texto caso a imagem não seja encontrada
    textAlign: 'center', // Centraliza o texto
    fontSize: 16, // Ajuste no tamanho da fonte
  }
});
