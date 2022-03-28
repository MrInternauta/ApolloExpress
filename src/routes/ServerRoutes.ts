import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
})

app.use('*', (req, res) => {
  res.status(404).send('Not Found!');
})

export default app;