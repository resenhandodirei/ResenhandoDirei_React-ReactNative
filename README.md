# ResenhandoDirei_React-ReactNative

## Descrição do Projeto

Este repositório contém o código-fonte de uma plataforma para redação e correção de redações, desenvolvida utilizando React para a interface web e React Native para a interface móvel. A plataforma visa auxiliar estudantes e professores no processo de criação e revisão de textos, oferecendo uma experiência intuitiva e integrada em múltiplos dispositivos.

## Funcionalidades Principais

- **Cadastro e Login de Usuários:** Permite que estudantes e professores se registrem e acessem a plataforma.
- **Criação de Redações:** Ferramentas para que os alunos possam criar, editar e salvar suas redações.
- **Correção de Redações:** Professores podem acessar e corrigir redações submetidas, adicionando comentários e feedback.
- **Painel de Controle:** Exibe estatísticas de desempenho, histórico de redações e feedbacks recebidos.
- **Notificações:** Notificações em tempo real sobre submissões e correções.

## Tecnologias Utilizadas

- **Frontend Web:** [React](https://reactjs.org/)
- **Frontend Móvel:** [React Native](https://reactnative.dev/)
- **Gerenciamento de Estado:** [Redux](https://redux.js.org/) ou [Context API](https://reactjs.org/docs/context.html)
- **Backend:** [Node.js](https://nodejs.org/) com [Express](https://expressjs.com/)
- **Banco de Dados:** [MongoDB](https://www.mongodb.com/) ou [PostgreSQL](https://www.postgresql.org/)
- **Autenticação:** [Firebase Authentication](https://firebase.google.com/products/auth) ou [Auth0](https://auth0.com/)
- **Hospedagem:** [Heroku](https://www.heroku.com/), [Vercel](https://vercel.com/) ou [Netlify](https://www.netlify.com/)

## Estrutura do Projeto

```
/
├── frontend-web
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.js
├── mobile-app
│   ├── android
│   ├── ios
│   ├── src
│   │   ├── components
│   │   ├── screens
│   │   ├── services
│   │   └── App.js
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
└── README.md
```

## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- Node.js
- NPM ou Yarn
- React Native CLI para desenvolvimento móvel
- MongoDB ou PostgreSQL para banco de dados

### Instruções para Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/usuario/nome-do-repositorio.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências do frontend web:
   ```bash
   cd frontend-web
   npm install
   ```

4. Instale as dependências do app móvel:
   ```bash
   cd ../mobile-app
   npm install
   ```

5. Instale as dependências do backend:
   ```bash
   cd ../backend
   npm install
   ```

6. Configure as variáveis de ambiente conforme o arquivo `.env.example`.

### Executando o Projeto

1. Inicie o servidor backend:
   ```bash
   cd backend
   npm start
   ```

2. Inicie o frontend web:
   ```bash
   cd ../frontend-web
   npm start
   ```

3. Inicie o app móvel:
   ```bash
   cd ../mobile-app
   npm start
   ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests. Por favor, siga as diretrizes de contribuição especificadas no repositório.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## Contato

Para mais informações ou questões relacionadas ao projeto, entre em contato:

- **Nome:** Larissa Correa
- **E-mail:** larissamscorrea@gmail..com
- **GitHub:** [github.com/resenhandodirei](https://github.com/resenhandodirei)
