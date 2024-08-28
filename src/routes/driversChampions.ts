import { Router } from 'express';
import { champions as driversChampions } from './../data/driversChampions';
import { DriverChampion } from '../types';

const router = Router();

router.get('/', (req, res) => {
  res.json(driversChampions);
});

router.post('/', (req, res) => {
  const newChampion: DriverChampion = req.body;

  if (!newChampion.year || !newChampion.driver || !newChampion.team || !newChampion.carNumber || !newChampion.nationality || !newChampion.wikipediaPage) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  driversChampions.push(newChampion);
  res.status(201).json({ message: 'Campeão adicionado com sucesso!', champion: newChampion });
});

export default router;
