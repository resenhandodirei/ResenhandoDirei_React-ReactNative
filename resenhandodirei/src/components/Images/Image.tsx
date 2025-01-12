import React from 'react';
import { Image as RNImage, View, Text } from 'react-native'; // Usando o componente Image do React Native
import { styles } from './ImageStyles';

// Importação das imagens
import img1 from '../../../assets/1.jpg';
import img2 from '../../../assets/2.jpg';
import img3 from '../../../assets/3.jpg';
import img4 from '../../../assets/4.jpg';
import img5 from '../../../assets/5.jpg';

interface ImageProps {
  id: number;
}

const imageMap: { [key: number]: any } = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
};

export const Image = ({ id }: ImageProps) => {
  // Obtém a imagem correspondente ao id
  const imageSrc = imageMap[id];

  if (!imageSrc) {
    return (
      <View>
        <Text style={styles.text}>Imagem não encontrada</Text>
      </View> // Exibe texto caso a imagem não exista
    );
  }

  return (
    <View style={styles.imageContainer}>
      <RNImage source={imageSrc} style={styles.image} />
    </View>
  );
};
