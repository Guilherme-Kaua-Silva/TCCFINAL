import { con } from './connection.js'

export async function login(email, senha){
    const comando = 
        `select NM_NUTRICIONISTA        nome,
            DS_EMAIL			        email
        from TB_PACIENTE
        where DS_EMAIL 		            = ?
        and SH_SENHA			        = ?;`
    
    const resp = await con.query(comando, [email,senha])
    const linhas = resp[0];
    return linhas[0];
}