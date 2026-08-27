import { Router } from "express"
import { teamsBySeason } from "../data/seasons"

const router = Router()

router.get("/teams/:year", (req, res) => {
  if (!/^\d{4}$/.test(req.params.year)) {
    return res.status(400).json({ code: "INVALID_YEAR", message: "O ano deve conter quatro dígitos." })
  }

  const teams = teamsBySeason[Number(req.params.year)]
  if (!teams) {
    return res.status(404).json({ code: "SEASON_NOT_FOUND", message: "Não há dados de equipes para o ano informado." })
  }

  return res.json(teams)
})

export default router
