import express from 'express';
import cors from 'cors';
import driverChampionsRoutes from './routes/driversChampions';
import teamsChampionsRoutes from './routes/teamsChampions';
import driversRoutes from './routes/drivers';
import teamsRoutes from './routes/teams';

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
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api/champions/drivers', driverChampionsRoutes);
app.use('/api/champions/teams', teamsChampionsRoutes);
app.use('/api', driversRoutes);
app.use('/api', teamsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`😎 Servidor rodando na porta ${PORT}`);
});
