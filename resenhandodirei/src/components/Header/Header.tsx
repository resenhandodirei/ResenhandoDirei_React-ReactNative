import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import { styles } from './HeaderStyless';

const Header = () => {
  const navigateTo = (url: string) => {
    Linking.openURL(url);
  };

  return (
    

  <NavigationContainer>
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Resenhando Direi</Text>
        <Text style={styles.slogan}>Não é sobre regras, é sobre fazer a sua história.</Text>
      </View>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigateTo('http://localhost:8084/Home')}>
          <Text style={styles.navLink}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('http://localhost:8084/About')}>
          <Text style={styles.navLink}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('http://localhost:8084/Contact')}>
          <Text style={styles.navLink}>Contato</Text>
        </TouchableOpacity>
      </View>
    </View>
  </NavigationContainer>

  );
};

export default Header;
