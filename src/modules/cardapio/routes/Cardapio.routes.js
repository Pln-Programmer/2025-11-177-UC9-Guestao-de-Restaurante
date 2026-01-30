import express from "express"
import CardapioController from "../controllers/Cardapio.controller.js"
import AuthMiddleware from "../../../middleware/AuthMiddleware.js"
import AutorizationMiddleware from "../../../middleware/AutorizationMiddleware.js"

const router = express.Router()

router.get("/", AuthMiddleware, AutorizationMiddleware["admin"], CardapioController.listar)
router.post("/", AuthMiddleware, AutorizationMiddleware["admin"], CardapioController.criar)
router.put("/:id", AuthMiddleware, AutorizationMiddleware["admin"], CardapioController.atualizar)
router.delete("/:id", AuthMiddleware, AutorizationMiddleware["admin"], CardapioController.deletar)

export default router