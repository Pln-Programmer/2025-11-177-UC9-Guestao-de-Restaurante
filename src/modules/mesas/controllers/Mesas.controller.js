import { MesaModel } from "../models/Mesas.model.js";

export class MesasController{

    static async listar(req,res){
        try {
            const mesas = await MesaModel.findAll()
            if(!mesas){
                return res.status(406).json({msg: "Nenhum Mesa encontrado."})
            }
            res.status(200).json(mesas)

        } catch (error) {
            res.status(500).json({msg: "Erro interno no listar.", erro: error.message})
        }
    }

    static async criar(req,res){
        try {
            const { usuario_id, numero, capacidade } = req.body
            const mesaCriada = await MesaModel.create(
                {
                        usuario_id: usuario_id,
                        numero: numero,
                        capacidade: capacidade
                }
            )
            if(!usuario_id || !numero || !capacidade){
                return res.status(406).json({msg: "Dados obrigatorios não fornecidos."})
            }
            res.status(200).json({msg: "Mesa criado com sucesso.", mesaCriada})
        } catch (error) {
            res.status(500).json({msg: "Erro interno no criar.", erro: error.message})
        }
    }

    static async atualizar(req,res){
        try {
            const { usuario_id, numero, capacidade } = req.body
            const { id } = req.params
            const mesaAtualizada = await MesaModel.update(
                {
                        usuario_id: usuario_id,
                        numero: numero,
                        capacidade: capacidade
                },
                {
                    where:{
                        id: id
                    }
                }
            )
            if(!usuario_id || !numero || !capacidade){
                return res.status(406).json({msg: "Dados obrigatorios não fornecidos."})
            }
            res.status(200).json({msg: "Mesa atualizado com sucesso.", mesaAtualizada})
        } catch (error) {
            res.status(500).json({msg: "Erro interno no atualizar.", erro: error.message})
        }
    }
    static async deletar(req,res){
        try {
            const { id } = req.params
            const mesaDeletado = MesaModel.destroy(
                {
                    where: {
                        id: id
                    }
                }
            )
            res.status(200).json({msg: "Mesa deletado com sucesso."})
        } catch (error) {
            res.status(500).json({msg: "Erro interno no deletado.", erro: error.message})
        }
    }
}