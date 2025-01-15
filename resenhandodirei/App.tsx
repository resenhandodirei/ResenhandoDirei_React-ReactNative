import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import AnimationWord from './src/components/Animations/AnimationWord/AnimationWord';
import Feedback from './src/components/Feedbacks/Feedbacks';
import React from 'react';
import Feedbacks from './src/components/Feedbacks/Feedbacks';
import FollowUs from './src/components/FollowUs/FollowUs';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#C72F64', '#41247C']} // Adicione as cores desejadas aqui
      style={styles.container}
    >
      <AnimationWord />
      <Feedbacks />
      <FollowUs />
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
