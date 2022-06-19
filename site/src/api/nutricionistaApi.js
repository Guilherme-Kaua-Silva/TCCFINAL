import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarConsulta(nome, preco, data, assunto, usuario){
        const resposta = await api.post('/consulta',{
            nome: nome,
            preco: preco,
            data: data,
            assunto: assunto,
            usuario: usuario
        })
        return resposta.data;
}

export async function removerConsulta(id){
    const resposta = await api.delete(`/consulta/${id}`);
    return resposta.status;


}
export async function alterarConsulta(id, nome, preco, data, assunto, usuario){
    const resposta = await api.put(`/consulta/${id}`,{
        nome: nome,
        preco: preco,
        data: data,
        assunto: assunto,
        usuario: usuario
    })
    return resposta.data;
}
export async function listartodasConsultas(){
    const resposta = await api.get('/consulta');
    return resposta.data;

} 
export async function buscarConsultasPorNome(){
    const resposta = await api.get('/consulta:id')
    return resposta.data
}

