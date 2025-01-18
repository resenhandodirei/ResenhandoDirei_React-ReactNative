import React from 'react';
import { View } from 'react-native';

import { styles } from './HomeStyles';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { LinearGradient } from 'expo-linear-gradient';
import AnimationWord from '../../components/Animations/AnimationWord/AnimationWord';
import Feedbacks from '../../components/Feedbacks/Feedbacks';
import FollowUs from '../../components/FollowUs/FollowUs';

export function Home() {
  return (
    <>
      <LinearGradient colors={['#C72F64', '#41247C']} style={styles.container}>
        <Header />
        <AnimationWord />
        <Feedbacks />
        <FollowUs />
        <Footer />
    </LinearGradient>
    </>
  );
}

export default Home;





function Home() {
  return (
    <LinearGradient colors={['#C72F64', '#41247C']} style={styles.container}>
      <Header />
      <AnimationWord />
      <Feedbacks />
      <FollowUs />
      <Footer />
    </LinearGradient>
  );
}


