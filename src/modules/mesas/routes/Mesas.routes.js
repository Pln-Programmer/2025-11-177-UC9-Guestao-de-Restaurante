import express from "express"
import { MesasController } from "../controllers/Mesas.controller.js"
import AuthMiddleware from "../../../middleware/AuthMiddleware.js"
import AutorizationMiddleware from "../../../middleware/AutorizationMiddleware.js"

const router = express.Router()

router.get("/", AuthMiddleware, AutorizationMiddleware["admin"], MesasController.listar)
router.post("/", AuthMiddleware, AutorizationMiddleware["admin"], MesasController.criar)
router.put("/:id", AuthMiddleware, AutorizationMiddleware["admin"], MesasController.atualizar)
router.delete("/:id", AuthMiddleware, AutorizationMiddleware["admin"], MesasController.deletar)

export default router