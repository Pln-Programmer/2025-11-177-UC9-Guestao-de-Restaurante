import { UsuarioModel } from "../models/Usuario.model.js";
import "dotenv/config"
import bcrypt from "bcrypt"

export default class UsuarioController{

    static async login(req,res){
        try {
            const { email, senha }= req.body
            if(!email || !senha){
                return res.status(406).json({msg: "email e senha não fornecidos."})
            }
            const login = await UsuarioModel.findOne(
                {
                    where: {
                        email: email
                    }
                }
            )
            if(!login){
                return res.status(406).json({msg: "Usuário não encontrado."})
            }
            const senhevalida = await bcrypt.compare(senha, login.senha)
            if(!senhevalida){
                res.status(406).json({msg: "Email ou senha incorreto."})
            }
            const token = jwt.sing(
                {
                    id: usuario.id,
                    email: usuario.email,
                    perfil: usuario.perfil
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: process.env.JWT_EXPIRED_IN
                }
            )
            res.status(200).json({msg: "Login feito com sucesso.", token})
        } catch (error) {
            
        }
    }

    static async listar(req,res){
        try {
            const usuario = await UsuarioModel.findAll(
                {
                    attributes: {
                        exclude: ["senha"]
                    }
                }
            )
            if(!usuario){
                return res.status(406).json({msg: "Nenhum usuário encontrado."})
            }
            res.status(200).json(usuario)

        } catch (error) {
            res.status(500).json({msg: "Erro interno no listar.", erro: error.message})
        }
    }

    static async perfil(req,res){
        try {
            return res.json({
                mensagem: "Acesso autorizado",
                usuario: req.usuario
            })
        } catch (error) {
            res.status(500).json({msg: "Erro interno no perfil.", erro: error.message})
        }
    }

    static async criar(req,res){
        try {
            const { nome, matricula, email, senha, perfil, telefone } = req.body
            const usuarioCriado = await UsuarioModel.create(
                {
                        nome: nome,
                        email: email,
                        senha: senha,
                        matricula: matricula,
                        perfil: perfil,
                        telefone: telefone
                }
            )
            if(!nome || !matricula || !email || !senha || !perfil || !telefone){
                return res.status(406).json({msg: "Dados obrigatorios não fornecidos."})
            }
            res.status(200).json({msg: "Usuário criado com sucesso.", usuarioCriado})
        } catch (error) {
            res.status(500).json({msg: "Erro interno no criar.", erro: error.message})
        }
    }

    static async atualizar(req,res){
        try {
            const { nome, matricula, email, senha, perfil, telefone } = req.body
            const { id } = req.params
            const usuarioAtualizado = await UsuarioModel.update(
                {
                        nome: nome,
                        email: email,
                        senha: senha,
                        matricula: matricula,
                        perfil: perfil,
                        telefone: telefone
                },
                {
                    where:{
                        id: id
                    }
                }
            )
            if(!nome || !matricula || !email || !senha || !perfil || !telefone){
                return res.status(406).json({msg: "Dados obrigatorios não fornecidos."})
            }
            res.status(200).json({msg: "Usuário atualizado com sucesso.", usuarioAtualizado})
        } catch (error) {
            res.status(500).json({msg: "Erro interno no atualizar.", erro: error.message})
        }
    }
    static async deletar(req,res){
        try {
            const { id } = req.params
            const usuarioDeletado = UsuarioModel.destroy(
                {
                    where: {
                        id: id
                    }
                }
            )
            res.status(200).json({msg: "Usuário deletado com sucesso."})
        } catch (error) {
            res.status(500).json({msg: "Erro interno no deletado.", erro: error.message})
        }
    }
}