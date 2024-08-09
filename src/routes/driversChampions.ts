import { Router, Request, Response } from 'express';

const router = Router();

interface Champion {
  year: number;
  driver: string;
  team: string;
  carNumber: number;
  nationality: string;
}

const champions: Champion[] = [
  { year: 2023, driver: 'Max Verstappen', team: 'Red Bull Racing', carNumber: 1, nationality: 'Dutch' },
  { year: 2022, driver: 'Max Verstappen', team: 'Red Bull Racing', carNumber: 1, nationality: 'Dutch' },
  { year: 2021, driver: 'Max Verstappen', team: 'Red Bull Racing', carNumber: 33, nationality: 'Dutch' },
  { year: 2020, driver: 'Lewis Hamilton', team: 'Mercedes', carNumber: 44, nationality: 'British' },
  { year: 2019, driver: 'Lewis Hamilton', team: 'Mercedes', carNumber: 44, nationality: 'British' },
  { year: 2018, driver: 'Lewis Hamilton', team: 'Mercedes', carNumber: 44, nationality: 'British' },
  { year: 2017, driver: 'Lewis Hamilton', team: 'Mercedes', carNumber: 44, nationality: 'British' },
  { year: 2016, driver: 'Nico Rosberg', team: 'Mercedes', carNumber: 6, nationality: 'German' },
  { year: 2015, driver: 'Lewis Hamilton', team: 'Mercedes', carNumber: 44, nationality: 'British' },
  { year: 2014, driver: 'Lewis Hamilton', team: 'Mercedes', carNumber: 44, nationality: 'British' },
  { year: 2013, driver: 'Sebastian Vettel', team: 'Red Bull Racing', carNumber: 1, nationality: 'German' },
  { year: 2012, driver: 'Sebastian Vettel', team: 'Red Bull Racing', carNumber: 1, nationality: 'German' },
  { year: 2011, driver: 'Sebastian Vettel', team: 'Red Bull Racing', carNumber: 1, nationality: 'German' },
  { year: 2010, driver: 'Sebastian Vettel', team: 'Red Bull Racing', carNumber: 5, nationality: 'German' },
  { year: 2009, driver: 'Jenson Button', team: 'Brawn GP', carNumber: 22, nationality: 'British' },
  { year: 2008, driver: 'Lewis Hamilton', team: 'McLaren', carNumber: 22, nationality: 'British' },
  { year: 2007, driver: 'Kimi Räikkönen', team: 'Ferrari', carNumber: 6, nationality: 'Finnish' },
  { year: 2006, driver: 'Fernando Alonso', team: 'Renault', carNumber: 1, nationality: 'Spanish' },
  { year: 2005, driver: 'Fernando Alonso', team: 'Renault', carNumber: 5, nationality: 'Spanish' },
  { year: 2004, driver: 'Michael Schumacher', team: 'Ferrari', carNumber: 1, nationality: 'German' },
  { year: 2003, driver: 'Michael Schumacher', team: 'Ferrari', carNumber: 1, nationality: 'German' },
  { year: 2002, driver: 'Michael Schumacher', team: 'Ferrari', carNumber: 1, nationality: 'German' },
  { year: 2001, driver: 'Michael Schumacher', team: 'Ferrari', carNumber: 1, nationality: 'German' },
  { year: 2000, driver: 'Michael Schumacher', team: 'Ferrari', carNumber: 3, nationality: 'German' },
  { year: 1999, driver: 'Mika Häkkinen', team: 'McLaren', carNumber: 1, nationality: 'Finnish' },
  { year: 1998, driver: 'Mika Häkkinen', team: 'McLaren', carNumber: 8, nationality: 'Finnish' },
  { year: 1997, driver: 'Jacques Villeneuve', team: 'Williams', carNumber: 3, nationality: 'Canadian' },
  { year: 1996, driver: 'Damon Hill', team: 'Williams', carNumber: 5, nationality: 'British' },
  { year: 1995, driver: 'Michael Schumacher', team: 'Benetton', carNumber: 1, nationality: 'German' },
  { year: 1994, driver: 'Michael Schumacher', team: 'Benetton', carNumber: 5, nationality: 'German' },
  { year: 1993, driver: 'Alain Prost', team: 'Williams', carNumber: 2, nationality: 'French' },
  { year: 1992, driver: 'Nigel Mansell', team: 'Williams', carNumber: 5, nationality: 'British' },
  { year: 1991, driver: 'Ayrton Senna', team: 'McLaren', carNumber: 1, nationality: 'Brazilian' },
  { year: 1990, driver: 'Ayrton Senna', team: 'McLaren', carNumber: 27, nationality: 'Brazilian' },
  { year: 1989, driver: 'Alain Prost', team: 'McLaren', carNumber: 1, nationality: 'French' },
  { year: 1988, driver: 'Ayrton Senna', team: 'McLaren', carNumber: 12, nationality: 'Brazilian' },
  { year: 1987, driver: 'Nelson Piquet', team: 'Williams', carNumber: 6, nationality: 'Brazilian' },
  { year: 1986, driver: 'Alain Prost', team: 'McLaren', carNumber: 1, nationality: 'French' },
  { year: 1985, driver: 'Alain Prost', team: 'McLaren', carNumber: 2, nationality: 'French' },
  { year: 1984, driver: 'Niki Lauda', team: 'McLaren', carNumber: 8, nationality: 'Austrian' },
  { year: 1983, driver: 'Nelson Piquet', team: 'Brabham', carNumber: 5, nationality: 'Brazilian' },
  { year: 1982, driver: 'Keke Rosberg', team: 'Williams', carNumber: 6, nationality: 'Finnish' },
  { year: 1981, driver: 'Nelson Piquet', team: 'Brabham', carNumber: 5, nationality: 'Brazilian' },
  { year: 1980, driver: 'Alan Jones', team: 'Williams', carNumber: 27, nationality: 'Australian' },
  { year: 1979, driver: 'Jody Scheckter', team: 'Ferrari', carNumber: 11, nationality: 'South African' },
  { year: 1978, driver: 'Mario Andretti', team: 'Lotus', carNumber: 5, nationality: 'American' },
  { year: 1977, driver: 'Niki Lauda', team: 'Ferrari', carNumber: 11, nationality: 'Austrian' },
  { year: 1976, driver: 'James Hunt', team: 'McLaren', carNumber: 11, nationality: 'British' },
  { year: 1975, driver: 'Niki Lauda', team: 'Ferrari', carNumber: 12, nationality: 'Austrian' },
  { year: 1974, driver: 'Emerson Fittipaldi', team: 'McLaren', carNumber: 5, nationality: 'Brazilian' },
  { year: 1973, driver: 'Jackie Stewart', team: 'Tyrrell', carNumber: 5, nationality: 'British' },
  { year: 1972, driver: 'Emerson Fittipaldi', team: 'Lotus', carNumber: 5, nationality: 'Brazilian' },
  { year: 1971, driver: 'Jackie Stewart', team: 'Tyrrell', carNumber: 11, nationality: 'British' },
  { year: 1970, driver: 'Jochen Rindt', team: 'Lotus', carNumber: 2, nationality: 'Austrian' },
  { year: 1969, driver: 'Jackie Stewart', team: 'Matra', carNumber: 10, nationality: 'British' },
  { year: 1968, driver: 'Graham Hill', team: 'Lotus', carNumber: 10, nationality: 'British' },
  { year: 1967, driver: 'Denny Hulme', team: 'Brabham', carNumber: 2, nationality: 'New Zealander' },
  { year: 1966, driver: 'Jack Brabham', team: 'Brabham', carNumber: 5, nationality: 'Australian' },
  { year: 1965, driver: 'Jim Clark', team: 'Lotus', carNumber: 1, nationality: 'British' },
  { year: 1964, driver: 'John Surtees', team: 'Ferrari', carNumber: 7, nationality: 'British' },
  { year: 1963, driver: 'Jim Clark', team: 'Lotus', carNumber: 8, nationality: 'British' },
  { year: 1962, driver: 'Graham Hill', team: 'BRM', carNumber: 7, nationality: 'British' },
  { year: 1961, driver: 'Phil Hill', team: 'Ferrari', carNumber: 4, nationality: 'American' },
  { year: 1960, driver: 'Jack Brabham', team: 'Cooper', carNumber: 12, nationality: 'Australian' },
  { year: 1959, driver: 'Jack Brabham', team: 'Cooper', carNumber: 12, nationality: 'Australian' },
  { year: 1958, driver: 'Mike Hawthorn', team: 'Ferrari', carNumber: 2, nationality: 'British' },
  { year: 1957, driver: 'Juan Manuel Fangio', team: 'Maserati', carNumber: 1, nationality: 'Argentine' },
  { year: 1956, driver: 'Juan Manuel Fangio', team: 'Ferrari', carNumber: 34, nationality: 'Argentine' },
  { year: 1955, driver: 'Juan Manuel Fangio', team: 'Mercedes', carNumber: 2, nationality: 'Argentine' },
  { year: 1954, driver: 'Juan Manuel Fangio', team: 'Maserati/Mercedes', carNumber: 12, nationality: 'Argentine' },
  { year: 1953, driver: 'Alberto Ascari', team: 'Ferrari', carNumber: 101, nationality: 'Italian' },
  { year: 1952, driver: 'Alberto Ascari', team: 'Ferrari', carNumber: 101, nationality: 'Italian' },
  { year: 1951, driver: 'Juan Manuel Fangio', team: 'Alfa Romeo', carNumber: 34, nationality: 'Argentine' },
  { year: 1950, driver: 'Giuseppe Farina', team: 'Alfa Romeo', carNumber: 34, nationality: 'Italian' },
];


router.get('/driversChampions', (req: Request, res: Response) => {
  res.json(champions);
});

export default router;
