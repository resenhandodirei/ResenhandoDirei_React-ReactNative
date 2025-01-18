import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: '#C72F64',
    marginTop: 30,
    width: '100%', // Garantir que o footer ocupe 100% da largura
    alignItems: 'center', // Centraliza o conteúdo
  },
  divider: {
    height: 1,
    backgroundColor: '#FFF',
    width: '100%', // A linha de divisão ocupa toda a largura
    marginBottom: 15,
  },
  content: {
    width: '100%', // Garantir que o conteúdo ocupe toda a largura
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribui o conteúdo nas extremidades
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    color: '#FFD0D0',
    fontWeight: 'bold'
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end', // Alinha os links à direita
  },
  link: {
    fontSize: 14,
    color: '#FFD0D0',
    marginLeft: 20,
  },
});
