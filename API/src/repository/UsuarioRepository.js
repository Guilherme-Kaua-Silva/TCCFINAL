import { con } from './connection.js'

export async function login(email, senha){
    const comando = 
            `select ID_NUTRICIONISTA 		id,
            DS_EMAIL			   email,
            NM_NUTRICIONISTA        nome
        from TB_NUTRICIONISTA
        where DS_EMAIL 		            = ?
        and DS_SENHA			        = ?`
    
    const resp = await con.query(comando, [email,senha])
    const linhas = resp[0];
    return linhas[0];
}