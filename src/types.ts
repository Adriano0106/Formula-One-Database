export interface DriverChampion {
  year: number;
  driver: string;
  team: string;
  carNumber: number;
  nationality: string;
  wikipediaPage: string;
}

export interface TeamChampion {
  year: number;
  team: string;
  wikipediaPage: string;
}

export interface Driver {
  driver: string;
  team: string;
  country: string;
  carNumber: number;
  debutSeason: number;
  wikipediaPage: string;
}

export interface Team {
  name: string;
  nationality: string;
  wikipediaPage: string;
  debutYear: number;
}
