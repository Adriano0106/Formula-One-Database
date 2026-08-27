import { describe, expect, it } from "vitest"
import { driversBySeason, teamsBySeason } from "./seasons"

const isHttpUrl = (value: string) => {
  try {
    return new URL(value).protocol === "https:"
  } catch {
    return false
  }
}

describe("season data", () => {
  it("contains valid and unique drivers per season", () => {
    for (const [year, drivers] of Object.entries(driversBySeason)) {
      expect(drivers.length, year).toBeGreaterThan(0)
      expect(new Set(drivers.map((driver) => driver.driver)).size, year).toBe(drivers.length)
      for (const driver of drivers) {
        expect(driver.carNumber, driver.driver).toBeGreaterThan(0)
        expect(driver.debutSeason, driver.driver).toBeLessThanOrEqual(Number(year))
        expect(isHttpUrl(driver.wikipediaPage), driver.driver).toBe(true)
      }
    }
  })

  it("contains valid and unique teams per season", () => {
    for (const [year, teams] of Object.entries(teamsBySeason)) {
      expect(teams.length, year).toBeGreaterThan(0)
      expect(new Set(teams.map((team) => team.name)).size, year).toBe(teams.length)
      for (const team of teams) {
        expect(team.debutYear, team.name).toBeLessThanOrEqual(Number(year))
        expect(isHttpUrl(team.wikipediaPage), team.name).toBe(true)
      }
    }
  })
})
