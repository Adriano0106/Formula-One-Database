import request from "supertest"
import { describe, expect, it } from "vitest"
import app from "./server"

describe("API", () => {
  it("reports health", async () => {
    const response = await request(app).get("/health")
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ status: "ok" })
  })

  it("allows the Netlify origin during the Vercel migration", async () => {
    const origin = "https://adriano-formulaonenext.netlify.app"
    const response = await request(app).get("/api/seasons").set("Origin", origin)
    expect(response.status).toBe(200)
    expect(response.headers["access-control-allow-origin"]).toBe(origin)
  })

  it("lists available seasons in descending order", async () => {
    const response = await request(app).get("/api/seasons")
    expect(response.status).toBe(200)
    expect(response.body.drivers[0]).toBe(2026)
    expect(response.body.teams).toEqual([2026, 2025, 2024])
  })

  it("returns drivers for a supported season", async () => {
    const response = await request(app).get("/api/drivers/2026")
    expect(response.status).toBe(200)
    expect(response.body.length).toBeGreaterThan(0)
  })

  it("rejects malformed and unavailable seasons consistently", async () => {
    const invalid = await request(app).get("/api/drivers/year")
    const missing = await request(app).get("/api/teams/2020")
    expect(invalid.status).toBe(400)
    expect(invalid.body.code).toBe("INVALID_YEAR")
    expect(missing.status).toBe(404)
    expect(missing.body.code).toBe("SEASON_NOT_FOUND")
  })

  it("does not expose write routes", async () => {
    const response = await request(app).post("/api/champions/drivers").send({})
    expect(response.status).toBe(404)
    expect(response.body.code).toBe("ROUTE_NOT_FOUND")
  })
})
