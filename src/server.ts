import express from 'express';
import cors from 'cors';
import driverChampionsRoutes from './routes/driversChampions';
import teamsChampionsRoutes from './routes/teamsChampions';
import driversRoutes from './routes/drivers';

const app = express();
app.use(express.json());

// Configuração do CORS
app.use(cors({
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://adriano-formulaonenext.netlify.app'
    ];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use('/api/champions/drivers', driverChampionsRoutes);
app.use('/api/champions/teams', teamsChampionsRoutes);
app.use('/api', driversRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`😎 Servidor rodando na porta ${PORT}`);
});
