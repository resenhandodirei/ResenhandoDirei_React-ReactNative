import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const NewsletterBox = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
  border-radius: 15px;
  position: relative;
  text-align: center;
`;

export const TitleBox = styled.div`
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  box-sizing: border-box;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 60px;
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;
