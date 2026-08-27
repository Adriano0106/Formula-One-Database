import { Router } from 'express';
import { champions as teamsChampions } from './../data/teamsChampions';

const router = Router();

router.get('/', (req, res) => {
  res.json(teamsChampions);
});

export default router;
