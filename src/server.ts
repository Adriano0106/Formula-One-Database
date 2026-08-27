import express from 'express';
import cors from 'cors';
import driverChampionsRoutes from './routes/driversChampions';
import teamsChampionsRoutes from './routes/teamsChampions';
import driversRoutes from './routes/drivers';
import teamsRoutes from './routes/teams';
import seasonsRoutes from './routes/seasons';

const app = express();
app.use(express.json());

// Configuração do CORS
const defaultOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
];
const allowedOrigins = (process.env.CORS_ALLOWED_ORIGINS ?? defaultOrigins.join(','))
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.use('/api/seasons', seasonsRoutes);
app.use('/api/champions/drivers', driverChampionsRoutes);
app.use('/api/champions/teams', teamsChampionsRoutes);
app.use('/api', driversRoutes);
app.use('/api', teamsRoutes);

app.use((_req, res) => {
  res.status(404).json({ code: 'ROUTE_NOT_FOUND', message: 'Rota não encontrada.' });
});

app.use((error: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  if (error.message === 'Not allowed by CORS') {
    return res.status(403).json({ code: 'ORIGIN_NOT_ALLOWED', message: 'Origem não autorizada.' });
  }
  console.error(error);
  return res.status(500).json({ code: 'INTERNAL_ERROR', message: 'Erro interno do servidor.' });
});

export default app;
