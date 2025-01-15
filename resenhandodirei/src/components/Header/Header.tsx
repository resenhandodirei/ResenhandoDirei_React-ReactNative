import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { styles } from './HeaderStyless';

const Header = () => {
  const navigateTo = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Resenhando Direito</Text>
        <Text style={styles.slogan}>Sua fonte de resenhas jurídicas</Text>
      </View>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigateTo('https://www.example.com/home')}>
          <Text style={styles.navLink}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('https://www.example.com/about')}>
          <Text style={styles.navLink}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('https://www.example.com/contact')}>
          <Text style={styles.navLink}>Contato</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
