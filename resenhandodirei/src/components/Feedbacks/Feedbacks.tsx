import React from 'react';
import { Container, Title } from './FeedbacksStyles';

// Importando as imagens
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

{/*
const img1 = require('../../../assets/1.jpg');
const img2 = require('../../../assets/2.jpg');
const img3 = require('../../../assets/3.jpg');
const img4 = require('../../../assets/4.jpg');
const img5 = require('../../../assets/5.jpg');
const img6 = require('../../../assets/6.jpg');
const img7 = require('../../../assets/7.jpg');
const img8 = require('../../../assets/8.jpg');
const img9 = require('../../../assets/9.jpg');
const img10 = require('../../../assets/10.jpg');
const img11 = require('../../../assets/11.jpg');*/}




const Feedbacks: React.FC = () => {
  return (
    <Container>
      <Title>Feedbacks de quem já foi meu aluno</Title>
      <div>
        <img src={img1} alt="Feedback 1" />
        <img src={img2} alt="Feedback 2" />
        <img src={img3} alt="Feedback 3" />
        <img src={img4} alt="Feedback 4" />
        <img src={img5} alt="Feedback 5" />
        <img src={img6} alt="Feedback 6" />
        <img src={img7} alt="Feedback 7" />
        <img src={img8} alt="Feedback 8" />
        <img src={img9} alt="Feedback 9" />
        <img src={img10} alt="Feedback 10" />
        <img src={img11} alt="Feedback 11" />
      </div>
    </Container>
  );
};

export default Feedbacks;
