import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AnimationWord from './src/components/Animations/AnimationWord/AnimationWord';
import Feedback from './src/components/Feedbacks/Feedbacks';
import React from 'react';
import Feedbacks from './src/components/Feedbacks/Feedbacks';
import FollowUs from './src/components/FollowUs/FollowUs';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from './src/components/Footer/Footer';
import Header from './src/components/Header/Header';
import About from './src/pages/About/About';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />


    </Stack.Navigator>
  );
}

//const Navigation = createStaticNavigation(RootStack);

export default function Home() {
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
