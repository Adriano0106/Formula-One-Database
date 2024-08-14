import express from 'express';
import driverChampionsRoutes from './routes/driversChampions';
import teamsChampionsRoutes from './routes/teamsChampions';
import driversRoutes from './routes/drivers';

const app = express();
app.use(express.json());

app.use('/api/champions/drivers', driverChampionsRoutes);
app.use('/api/champions/teams', teamsChampionsRoutes);
app.use('/api', driversRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`😎 Servidor rodando na porta ${PORT}`);
});
