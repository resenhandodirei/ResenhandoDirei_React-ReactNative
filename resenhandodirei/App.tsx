import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AnimationWord from './src/components/Animations/AnimationWord/AnimationWord';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <AnimationWord />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
