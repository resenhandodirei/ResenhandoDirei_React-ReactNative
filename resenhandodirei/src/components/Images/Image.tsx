import React from 'react';
import { Image as RNImage, View, Text } from 'react-native';
import { styles } from './ImageStyles';

// Importação das imagens
import img1 from '../../../assets/1.jpg';
import img2 from '../../../assets/2.jpg';
import img3 from '../../../assets/3.jpg';
import img4 from '../../../assets/4.jpg';
import img5 from '../../../assets/5.jpg';
import img6 from '../../../assets/6.jpg';
import img7 from '../../../assets/7.jpg';
import img8 from '../../../assets/8.jpg';
import img9 from '../../../assets/9.jpg';
import img10 from '../../../assets/10.jpg';
import img11 from '../../../assets/11.jpg';

interface ImageProps {
  id: number;
}

const imageMap: { [key: number]: any } = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9,
  10: img10,
  11: img11,
};

export const Image = ({ id }: ImageProps) => {
  const imageSrc = imageMap[id];

  if (!imageSrc) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Imagem não encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.imageWrapper}>
      <RNImage source={imageSrc} style={styles.image} />
    </View>
  );
};
