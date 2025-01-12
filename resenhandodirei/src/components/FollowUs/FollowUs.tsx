import React, { useState } from 'react';
import {
  Container,
  NewsletterBox,
  TitleBox,
  Form,
  Input,
  Button
} from './FollowUsStyles';

const FollowUs: React.FC = () => {
  const [whatsapp, setWhatsapp] = useState('');

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setWhatsapp(value);
    }
  };

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
          <Input
            type="tel"
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={handleWhatsappChange}
            required
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </NewsletterBox>
    </Container>
  );
};

export default FollowUs;
