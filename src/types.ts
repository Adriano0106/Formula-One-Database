export interface DriverChampion {
  year: number;
  driver: string;
  team: string;
  carNumber: number;
  nationality: string;
  wikipedia: string;
}

export interface TeamChampion {
  year: number;
  team: string;
  wikipedia: string;
}

export interface Driver {
  driver: string;
  team: string;
  country: string;
  carNumber: number;
  debutSeason: number;
}
