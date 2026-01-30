import { CardapioModel } from "../models/Cardapio.model.js";

export default class CardapioController{

    static async listar(req,res){
        try {
            const cardapio = await CardapioModel.findAll()
            if(!cardapio){
                return res.status(406).json({msg: "Nenhum Cardapio encontrado."})
            }
            res.status(200).json(cardapio)

        } catch (error) {
            res.status(500).json({msg: "Erro interno no listar.", erro: error.message})
        }
    }


    static async criar(req,res){
        try {
            const { usuario_id, nome, descricao, porcao, preco } = req.body
            const cardapioCriado = await CardapioModel.create(
                {
                        usuario_id: usuario_id,
                        nome: nome, 
                        descricao: descricao, 
                        porcao: porcao, 
                        preco: preco
                }
            )
            if(!usuario_id || !nome || !descricao || !porcao || !preco){
                return res.status(406).json({msg: "Dados obrigatorios não fornecidos."})
            }
            res.status(200).json({msg: "Cardapio criado com sucesso.", cardapioCriado})
        } catch (error) {
            res.status(500).json({msg: "Erro interno no criar.", erro: error.message})
        }
    }

    static async atualizar(req,res){
        try {
            const { usuario_id, nome, descricao, porcao, preco } = req.body
            const { id } = req.params
            const cardapioAtualizada = await CardapioModel.update(
                {
                        usuario_id: usuario_id,
                        nome: nome, 
                        descricao: descricao, 
                        porcao: porcao, 
                        preco: preco
                },
                {
                    where:{
                        id: id
                    }
                }
            )
            if(!usuario_id || !nome || !descricao || !porcao || !preco){
                return res.status(406).json({msg: "Dados obrigatorios não fornecidos."})
            }
            res.status(200).json({msg: "Cardapio atualizado com sucesso.", cardapioAtualizada})
        } catch (error) {
            res.status(500).json({msg: "Erro interno no atualizar.", erro: error.message})
        }
    }
    static async deletar(req,res){
        try {
            const { id } = req.params
            const cardapioDeletado = CardapioModel.destroy(
                {
                    where: {
                        id: id
                    }
                }
            )
            res.status(200).json({msg: "Cardapio deletado com sucesso."})
        } catch (error) {
            res.status(500).json({msg: "Erro interno no deletado.", erro: error.message})
        }
    }
}