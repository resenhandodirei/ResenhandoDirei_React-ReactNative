import React from 'react';
import { Container, Title, ImageContainer } from './FeedbacksStyles';
import { Image } from '../Images/Image';

// Lista de IDs das imagens
const imageIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const Feedbacks: React.FC = () => {
  return (
    <Container>
      <Title>Feedbacks de quem já foi meu aluno</Title>
      <ImageContainer>
        {/* Mapeia os IDs das imagens e renderiza o componente Image para cada um */}
        {imageIds.map((id) => (
          <Image key={id} id={id} />
        ))}
      </ImageContainer>
    </Container>
  );
};

export default Feedbacks;
