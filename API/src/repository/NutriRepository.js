import { con } from './connection.js'

//adicionar consulta (1)
export async function adicionarConsulta(consulta){
    const comando =
    `INSERT INTO TB_CONSULTA (ID_PACIENTE, NM_PACIENTE, DS_ASSUNTO, VL_PRECO, DT_CONSULTA)
    VALUES (?, ?, ?, ?, ?);`

    //pode dar certo
    const [resposta] = await con.query(comando, [consulta.paciente, consulta.nome, consulta.assunto, consulta.preco, consulta.data]);
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

export async function alterarAnotação(id, consulta) {
    const comando = 
        `UPDATE TB_CONSULTA
            SET DS_ASSUNTO         = ?
          WHERE ID_NUTRICIONISTA   = ?`

    const [resposta] = await con.query(comando, [consulta.assunto, id]);
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

//incluir anotações()
export async function incluirAnotações(id, assunto, consulta){
    const comando =
      ` UPDATE TB_CONSULTA
         SET DS_ASSUNTO   = ?;
         WHERE ID_PACIENTE = ?`

         const [resposta] = await con.query(comando , [consulta.id, consulta.assunto, id, assunto])
         return resposta.affectedRows;
}

export async function pesquisarConsultasArquivadas (consulta){
    const comando = 
    `INSERT INTO TB_CONSULTA (ID_PACIENTE, NM_PACIENTE, DS_ASSUNTO, VL_PRECO, DT_CONSULTA)
    VALUES (?, ?, ?, ?, ?)`   

    const [resposta] = await con.query(comando, [consulta.paciente, consulta.nome, consulta.assunto, consulta.preco, consulta.data]);
    consulta.id = resposta.insertId;

    return consulta;
}

//alterar consulta
export async function alterarConsulta(id, consulta){
    const comando = 
        `UPDATE TB_CONSULTA
            SET DT_CONSULTA        = ?
          WHERE ID_CONSULTA        = ?`

    const [resposta] = await con.query(comando, [consulta.data, id]);
    return resposta.affectedRows;
}
