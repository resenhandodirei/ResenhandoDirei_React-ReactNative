import React from 'react';
import {
  Container,
  NewsletterBox,
  TitleBox,
  Form,
  Input,
  Button
} from './FollowUsStyles';

const FollowUs: React.FC = () => {
  return (
    <Container>
      <NewsletterBox>
        <TitleBox>
          <h2>Quer saber das próximas novidades?</h2>
          <p>Deixe aqui seu contato e saberá de tudo em primeira mão.</p>
        </TitleBox>
        <Form>
          <Input type="text" placeholder="Nome" required />
          <Input type="email" placeholder="E-mail" required />
          <Input type="tel" placeholder="WhatsApp" required />
          <Button type="submit">Enviar</Button>
        </Form>
      </NewsletterBox>
    </Container>
  );
};

export default FollowUs;
