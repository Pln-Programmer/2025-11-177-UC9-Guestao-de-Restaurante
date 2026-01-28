import express from "express"
import UsuarioController from "../controllers/Usuario.controller.js"

const router = express.Router()

router.post("/", UsuarioController.login)
router.get("/", UsuarioController.listar)
router.post("/", UsuarioController.criar)
router.put("/:id", UsuarioController.atualizar)
router.delete("/:id", UsuarioController.deletar)

export default router