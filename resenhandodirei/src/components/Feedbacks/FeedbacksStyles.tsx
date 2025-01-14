import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 90%;
  max-width: 600px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

// Novo container para as imagens
export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que as imagens quebrem para a próxima linha */
  justify-content: center; /* Centraliza as imagens horizontalmente */
  gap: 10px; /* Espaçamento entre as imagens */
  width: 100%; /* Garante que o container utilize todo o espaço disponível */
`;
