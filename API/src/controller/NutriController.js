import { adicionarConsulta } from '../repository/NutriRepository.js'
import { Router } from 'express'
const server = Router();

server.post('/consulta', async (req, resp) => {
    try{
        const consultaParaInserir = req.body
        if (!consultaParaInserir.nome)
            throw new Error('Nome do paciente é obrigatório!');

        if (!consultaParaInserir.assunto)
            throw new Error('assunto da consulta é obrigatório!');

        if (consultaParaInserir.preco == undefined || consultaParaInserir < 0)
            throw new Error('Preço da consulta é obrigatório!');

        if (!consultaParaInserir.data)
            throw new Error('Data da consulta é obrigatória!');

        if (!consultaParaInserir.usuario)
            throw new Error('Usuário não logado!');

       const consulta = await adicionarConsulta(consultaParaInserir);
       resp.send(consulta);
    }catch (err){
        resp.status(400).send({
            erro:err.message
        })
    }
})

export default server