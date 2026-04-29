import { Router } from "express"
import { teams2024 } from "../data/teams-by-year/teams2024"
import { teams2025 } from "../data/teams-by-year/teams2025"
import { teams2026 } from "../data/teams-by-year/teams2026"

const router = Router()

router.get("/teams/:year", (req, res) => {
  const { year } = req.params

  switch (year) {
    case "2024":
      return res.json(teams2024)
    case "2025":
      return res.json(teams2025)
    case "2026":
      return res.json(teams2026)
    default:
      return res
        .status(404)
        .json({ message: "Dados não encontrados para o ano desejado" })
  }
})

export default router
