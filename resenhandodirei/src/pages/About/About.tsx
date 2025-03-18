import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { LinearGradient } from 'expo-linear-gradient';

export function About() {
  return (
    <LinearGradient colors={['#C72F64', '#41247C']} style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.text}>Sobre nós</Text>
      </View>
      <Footer />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1, // Faz com que esse View ocupe todo o espaço disponível
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default About;
