import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'pink', // Temporário para visualização
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
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
    alignItems: 'center',
  },
  navLink: {
    fontSize: 16,
    color: '#FFD0D0',
    marginLeft: 20,
    fontWeight: 'bold',
  },
});
