import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './HeaderStyless';
export default function Header() {
  const navigation = useNavigation(); // Obtendo a instância de navegação

  return (  
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Resenhando Direi</Text>
        <Text style={styles.slogan}>Não é sobre regras, é sobre fazer a sua história.</Text>
      </View>

      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Text style={styles.navLink}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('about')}>
          <Text style={styles.navLink}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('contact')}>
          <Text style={styles.navLink}>Contato</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}