import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%', // Garantir que o header ocupe toda a largura
    backgroundColor: '#41247C',
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row', // Distribui os elementos horizontalmente
    justifyContent: 'space-between', // Distancia título e navegação
    alignItems: 'center', // Alinha verticalmente
  },
  leftContainer: {
    // Contêiner para o título e slogan, alinhado à esquerda
  },
  title: {
    fontSize: 24,
    color: '#FFD0D0',
    fontWeight: 'bold',
  },
  slogan: {
    fontSize: 14,
    color: '#FFD0D0',
    marginTop: 5,
    fontStyle: 'italic',
  },
  navContainer: {
    flexDirection: 'row',
    // Os links de navegação são alinhados à direita automaticamente
  },
  navLink: {
    fontSize: 16,
    color: '#FFD0D0',
    marginLeft: 20,
    fontWeight: 'bold',
  },
});
