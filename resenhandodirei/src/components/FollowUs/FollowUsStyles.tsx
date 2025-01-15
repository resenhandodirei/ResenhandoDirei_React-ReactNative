import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  max-width: 600px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza verticalmente */
  align-items: center;
  height: auto;
  min-height: 100vh;
  font-family: 'Montserrat', sans-serif;
`;

export const NewsletterBox = styled.div`
  background-color: #41247C;
  color: #C72F64;
  padding: 20px;
  border-radius: 15px;
  position: relative;
  text-align: center;
  width: 100%;
  max-width: 700px;
  height: auto;
  min-height: 320px;
  padding-top: 20px; /* Aumentar o espaçamento superior */
`;

export const TitleBox = styled.div`
  background-color: #fff;
  color: #C72F64;
  border-radius: 10px;
  position: absolute;
  top: 10px; /* Ajuste a posição superior */
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  height: auto;
  padding: 20px; /* Adiciona espaçamento interno */
  box-sizing: border-box;
  margin-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Aumenta o espaçamento entre os campos */
  margin-top: 150px; /* Ajuste para centralizar melhor */
`;

export const Input = styled.input`
  padding: 15px; /* Aumenta o espaçamento interno */
  border: none;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 15px; /* Aumenta o espaçamento interno */
  background-color: #C72F64;
  color: #FFD0D0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background-color: #ddd;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Aumenta o espaçamento entre as imagens */
  margin-top: 20px;
`;
