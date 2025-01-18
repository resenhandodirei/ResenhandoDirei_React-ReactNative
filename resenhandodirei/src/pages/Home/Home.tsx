import React from 'react';
import { View } from 'react-native';

import { styles } from './HomeStyles';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export function Home() {
  return (
    <>
        <Header />
        <Footer />
    </>
  );
}

export default Home;
