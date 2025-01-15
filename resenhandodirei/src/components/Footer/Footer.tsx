import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import { styles } from './FooterStyles';

const Footer = () => {
  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View style={styles.divider} />
      <View style={styles.content}>
        <Text style={styles.text}>© 2025 ResenhandoDirei</Text>
        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => openLink('https://www.example.com/privacy')}>
            <Text style={styles.link}>Política de Privacidade</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://www.example.com/terms')}>
            <Text style={styles.link}>Termos de Serviço</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openLink('https://www.example.com/contact')}>
            <Text style={styles.link}>Contato</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Footer;
