import { Router } from 'express';
import { champions as teamsChampions } from './../data/teamsChampions';
import { TeamChampion } from '../types';

const router = Router();

router.get('/', (req, res) => {
  res.json(teamsChampions);
});

router.post('/', (req, res) => {
  const newChampion: TeamChampion = req.body;

  if (!newChampion.year || !newChampion.team || !newChampion.wikipedia) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  teamsChampions.push(newChampion);
  res.status(201).json({ message: 'Equipe Campeã adicionada com sucesso!', champion: newChampion });
});

export default router;
