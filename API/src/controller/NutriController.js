import { adicionarConsulta, alterarAnotação, removerConsulta } from '../repository/NutriRepository.js'
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

// deletar consulta
server.delete('/consulta/:id', async (req, resp) => {
    try{
        const { id } = req.params;

        const resposta = await removerConsulta(id);

        if(resposta != 1)
            throw new Error('consulta não pode ser removida')
    }catch(err){
        resp.status(400).send({
            erro:err.message
        })   
    }
})

//alterar anotação
server.put('/consulta/:id', async (req, resp) => {
    try{
        const { id } = req.params;
        const consulta = req.body; 

        const resposta = await alterarAnotação(id, consulta);
        if(resposta != 1)
            throw new Error("consulta não pode ser alterada");
            if (!consulta.assunto)
            throw new Error('assunto da consulta é obrigatório!');
        else
            resp.status(204).send();

    }catch(err){
        resp.status(400).send({
            erro:err.message
        })   
    }
})

export default server