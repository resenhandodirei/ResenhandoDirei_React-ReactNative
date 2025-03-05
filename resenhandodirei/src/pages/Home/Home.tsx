import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createStaticNavigation } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AnimationWord from '../../components/Animations/AnimationWord/AnimationWord';
import Feedback from '../../components/Feedbacks/Feedbacks';
import React from 'react';
import Feedbacks from '../../components/Feedbacks/Feedbacks';
import FollowUs from '../../components/FollowUs/FollowUs';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import About from '../../pages/About/About';

export default function Home( { navigation } : any) {

  return (
    <LinearGradient
      colors={['#C72F64', '#41247C']} 
      style={styles.container}
    >
      <Header />
      <AnimationWord />
      <Feedbacks />
      <FollowUs />
      <Footer />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
