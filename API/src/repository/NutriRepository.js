import { con } from './connection.js'

//adicionar consulta (1)
export async function adicionarConsulta(consulta){
    const comando =
    `INSERT INTO TB_CONSULTA (ID_PACIENTE, NM_PACIENTE, DS_ASSUNTO, VL_PRECO, DT_CONSULTA)
    VALUES (?, ?, ?, ?, ?);`

    //pode dar certo
    const [resposta] = await con.query(comando, [consulta.paciente, consulta.nome, consulta.assunto, consulta.preco, consulta.data, consulta.usuario]);
    consulta.id = resposta.insertId;

    return consulta;
}

//deletar consulta(4)
export async function removerConsulta(id){
    const comando = 
    ` DELETE FROM TB_CONSULTA
                 WHERE ID_CONSULTA = ?`;
    const [resposta] = await con.query(comando, [id]);
    return resposta.affectedRows;
}

//alterar anotações(8)

export async function alterarConsulta(id, consulta) {
    const comando = 
    `UPDATE TB_CONSULTA
        SET NM_PACIENTE  =   ?,
            VL_PRECO     =   ?,
            DT_CONSULTA  =   ?,  
            DS_ASSUNTO   =   ?,
        WHERE ID_PACIENTE =  ?`

    const [resposta] = await con.query(comando, [ consulta.nome, consulta.preco, consulta.horario, consulta.assunto, id]);
    return resposta.affectedRows;
}

//Pesquisar próximas consultas
export async function pesquisarpróximasConsultas (consulta){
     const comando = 
     `INSERT INTO TB_CONSULTA (ID_PACIENTE, NM_PACIENTE, DS_ASSUNTO, VL_PRECO, DT_CONSULTA)
     VALUES (?, ?, ?, ?, ?)`   

     const [resposta] = await con.query(comando, [consulta.paciente, consulta.nome, consulta.assunto, consulta.preco, consulta.data]);
     consulta.id = resposta.insertId;
 
     return consulta;
}
     //pesquisar consultas arquivadas
export async function pesquisarConsultasArquivadas (consulta){
    const comando = 
    `INSERT INTO TB_CONSULTA (ID_PACIENTE, NM_PACIENTE, DS_ASSUNTO, VL_PRECO, DT_CONSULTA)
    VALUES (?, ?, ?, ?, ?)`   

    const [resposta] = await con.query(comando, [consulta.paciente, consulta.nome, consulta.assunto, consulta.preco, consulta.data]);
    consulta.id = resposta.insertId;

    return consulta;
}

  //listar todas as consultas
export async function listarTodasConsultas() {
    const comando =
        `SELECT ID_PACIENTE			id,
        NM_PACIENTE			       nome,
         VL_PRECO		           preco,
         DT_CONSULTA	           data
    FROM TB_CONSULTA`;
    
    const [linhas] = await con.query(comando);
    return linhas;
}