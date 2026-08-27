import { Router } from 'express';
import { champions as driversChampions } from './../data/driversChampions';

const router = Router();

router.get('/', (req, res) => {
  res.json(driversChampions);
});

export default router;
