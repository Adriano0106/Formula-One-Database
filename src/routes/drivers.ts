import { Router } from 'express';
import { drivers2024 } from '../data/drivers-by-year/drivers2024';
import { drivers2023 } from '../data/drivers-by-year/drivers2023';
import { drivers2022 } from '../data/drivers-by-year/drivers2022';
import { drivers2021 } from '../data/drivers-by-year/drivers2021';
import { drivers2020 } from '../data/drivers-by-year/drivers2020';

const router = Router();

router.get('/drivers/:year', (req, res) => {
  const { year } = req.params;

  switch (year) {
    case '2024':
      return res.json(drivers2024);
    case '2023':
      return res.json(drivers2023);
    case '2022':
      return res.json(drivers2022);
    case '2021':
      return res.json(drivers2021);
    case '2020':
      return res.json(drivers2020);
    default:
      return res.status(404).json({ message: 'Dados não encontrados para o ano desejado' });
  }
});

export default router;
