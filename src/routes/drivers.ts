import { Router } from "express"
import { driversBySeason } from "../data/seasons"

const router = Router()

router.get("/drivers/:year", (req, res) => {
  if (!/^\d{4}$/.test(req.params.year)) {
    return res.status(400).json({ code: "INVALID_YEAR", message: "O ano deve conter quatro dígitos." })
  }

  const drivers = driversBySeason[Number(req.params.year)]
  if (!drivers) {
    return res.status(404).json({ code: "SEASON_NOT_FOUND", message: "Não há dados de pilotos para o ano informado." })
  }

  return res.json(drivers)
})

export default router
