import express from 'express';
import fibonacci from 'fibonacci';
import { runFibonacci } from './threads-functions';

const app = express();

app.get('/thread/fibonacci', async (req, res) => {
  runFibonacci({ interations: 10000 }).then(result => console.log(result))
  return res.send('Prossesing');
});

app.get('/fibonacci', async (req, res) => {
  const bigNumber = fibonacci.iterate(10000);
  return res.json(bigNumber);
});

export default app;
