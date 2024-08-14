import { Router } from 'express';
import { drivers2024 } from '../data/drivers-by-year/drivers2024';
import { drivers2023 } from '../data/drivers-by-year/drivers2023';

const router = Router();

router.get('/drivers/:year', (req, res) => {
  const { year } = req.params;

  switch (year) {
    case '2024':
      return res.json(drivers2024);
    case '2023':
      return res.json(drivers2023);
    default:
      return res.status(404).json({ message: 'Dados não encontrados para o ano desejado' });
  }
});

export default router;
