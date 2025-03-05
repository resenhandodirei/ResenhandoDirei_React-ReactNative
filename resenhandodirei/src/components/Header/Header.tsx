import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';


import { styles } from './HeaderStyless';

function Header( { navigation } : any) {
  function navToHome() {
    navigation.navigate('home');
  }

  function navToAbout() {
    navigation.navigate('about');
  }

  function navToContact() {
    navigation.navigate('contact');
  }

  return (  
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Resenhando Direi</Text>
        <Text style={styles.slogan}>Não é sobre regras, é sobre fazer a sua história.</Text>
      </View>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={navToHome}>
          <Text style={styles.navLink}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navToAbout}>
          <Text style={styles.navLink}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navToContact}>
          <Text style={styles.navLink}>Contato</Text>
        </TouchableOpacity>
      </View>
    </View>


  );
};

export default Header;
