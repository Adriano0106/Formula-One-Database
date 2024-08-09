import { Router, Request, Response } from 'express';

const router = Router();

interface ChampionTeam {
  year: number;
  team: string;
}

const championTeams: ChampionTeam[] = [
  { year: 2023, team: 'Red Bull Racing' },
  { year: 2022, team: 'Red Bull Racing' },
  { year: 2021, team: 'Mercedes' },
  { year: 2020, team: 'Mercedes' },
  { year: 2019, team: 'Mercedes' },
  // Adicione mais equipes campeãs conforme necessário
];

router.get('/teamsChampions', (req: Request, res: Response) => {
  console.log('opa')
  res.json(championTeams);
});

export default router;
