import express from 'express';

const app = express();

// http://localhost:3333/

app.get('/', (req, res) => {
  return res.json({ message: 'hello world' });
});

//1 param => rota(Recurso api)
//2 param => request, response

app.post('/', (req, res) => {
  //recebeu os dados para salvar
  return res.json({ message: 'os dados foram salvos com sucesso!' });
});

app.listen(3333, () => console.log('Server is running!'));
