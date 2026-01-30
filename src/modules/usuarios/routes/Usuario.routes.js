import express from "express"
import UsuarioController from "../controllers/Usuario.controller.js"
import AuthMiddleware from "../../../middleware/AuthMiddleware.js"
import AutorizationMiddleware from "../../../middleware/AutorizationMiddleware.js"


const router = express.Router()

router.get("/perfil", AuthMiddleware, AutorizationMiddleware["admin", "cliente"], UsuarioController.perfil)
router.post("/", UsuarioController.login)
router.get("/", AuthMiddleware, AutorizationMiddleware["admin"], UsuarioController.listar)
router.post("/", AuthMiddleware, AutorizationMiddleware["admin"], UsuarioController.criar)
router.put("/:id", AuthMiddleware, AutorizationMiddleware["admin"], UsuarioController.editar)
router.delete("/:id", AuthMiddleware, AutorizationMiddleware["admin"], UsuarioController.excluir)

export default router