import { Router } from "express"
import { seasons } from "../data/seasons"

const router = Router()

router.get("/", (_req, res) => res.json(seasons))

export default router
