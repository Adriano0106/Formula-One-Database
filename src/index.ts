import express from 'express';
import championsRoute from './routes/driversChampions';
import teamsRoute from './routes/teamsChampions';

export const app = express();
const port = 3000;

app.use('/api', championsRoute);
app.use('/api', teamsRoute);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
