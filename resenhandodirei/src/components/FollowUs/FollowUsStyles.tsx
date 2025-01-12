import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 90%;
  max-width: 600px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
`;

export const NewsletterBox = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 15px;
  position: relative;
  text-align: center;
  width: 700px;
  height: 320px;

`;

export const TitleBox = styled.div`
  background-color: #fff;
  color: #000;
  border-radius: 10px;
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  height: 98px;
  box-sizing: border-box;
  margin-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 130px;
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 96%;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  width: 100%;

  

  &:hover {
    background-color: #ddd;
  }
`;
