import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import AnimationWord from './src/components/Animations/AnimationWord/AnimationWord';
import Feedback from './src/components/Feedbacks/Feedbacks';
import React from 'react';
import Feedbacks from './src/components/Feedbacks/Feedbacks';
import FollowUs from './src/components/FollowUs/FollowUs';


export default function App() {
  return (
    <View style={styles.container}>
      <AnimationWord />
      <Feedbacks />
      <FollowUs />
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
