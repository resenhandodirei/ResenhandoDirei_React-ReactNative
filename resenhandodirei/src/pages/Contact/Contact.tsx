import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FollowUs from '../../components/FollowUs/FollowUs';
import { LinearGradient } from 'expo-linear-gradient';

export function Contact() {
  return (
    <LinearGradient colors={['#C72F64', '#41247C']} style={styles.container}>
      <Header />
      <View style={styles.content}>
        <FollowUs />
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
    flex: 1, // Garante que o conteúdo principal empurre o Footer para baixo
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Contact;
