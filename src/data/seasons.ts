import { Driver, Team } from "../types"
import { drivers2020 } from "./drivers-by-year/drivers2020"
import { drivers2021 } from "./drivers-by-year/drivers2021"
import { drivers2022 } from "./drivers-by-year/drivers2022"
import { drivers2023 } from "./drivers-by-year/drivers2023"
import { drivers2024 } from "./drivers-by-year/drivers2024"
import { drivers2025 } from "./drivers-by-year/drivers2025"
import { drivers2026 } from "./drivers-by-year/drivers2026"
import { teams2024 } from "./teams-by-year/teams2024"
import { teams2025 } from "./teams-by-year/teams2025"
import { teams2026 } from "./teams-by-year/teams2026"

export const driversBySeason: Readonly<Record<number, readonly Driver[]>> = {
  2020: drivers2020,
  2021: drivers2021,
  2022: drivers2022,
  2023: drivers2023,
  2024: drivers2024,
  2025: drivers2025,
  2026: drivers2026,
}

export const teamsBySeason: Readonly<Record<number, readonly Team[]>> = {
  2024: teams2024,
  2025: teams2025,
  2026: teams2026,
}

export const seasons = {
  drivers: Object.keys(driversBySeason).map(Number).sort((a, b) => b - a),
  teams: Object.keys(teamsBySeason).map(Number).sort((a, b) => b - a),
}
