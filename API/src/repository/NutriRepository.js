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

//alterar anotações(8)