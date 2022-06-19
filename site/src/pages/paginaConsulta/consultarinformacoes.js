

import lapis from '../../assets/images/lapis.png'
import lixo from '../../assets/images/lixo.png'
import logo from '../../assets/images/logo.png'
import {confirmAlert} from 'react-confirm-alert'
import { toast } from 'react-toastify';
import { listartodasConsultas, removerConsulta } from '../../API/nutricionistaApi'
import { useEffect } from 'react'

export default  function index(){
    const [consultas, setConsultas] = useState([]);
    const [filtro, setFiltro] = useState('');

    async function carregarTodasConsultas() {
        const resp = await listartodasConsultas();
        setConsultas(resp)
    }


    useEffect(() => {
        carregarTodasConsultas();
    }, [])
    
    async function excluirConsulta(id, nome){
        confirmAlert({
            title: 'Remover Consulta',
            message : `Deseja remover Consulta ${nome}?`,
            buttons : [
                 {
                     label: 'Sim',
                     onClick : async () => {
                        const resposta = await removerConsulta(id, nome);
                        if ( filtro === '')
                          carregarTodasConsultas();
                        else
                        filtrar();
                        toast.dark('Filme removido');
                     }
    
                 },
                 {
                     label: 'Não'
                 }
            ]
    
        })
    } 

    async function filtrar() {
        const resp= await buscarConsultasPorNome(filtro);
        setConsultas(resp);
    }
    return(
       <main className='pagina-consultarinformacoes'>
           <div className="cabecalho-consultar">
        <img className="logo1" src={logo} alt=''/>
        <h1>CONSULTAR INFORMAÇÕES SOBRE CLIENTES</h1>
    </div>
    <table>
        <thead>
            <tr>
                <th>IDENTIFICAÇÃO</th>
                <th>NOME</th>
                <th>PRECO</th>
                <th>DATA</th>
                <th>ASSSUNTO</th>
            </tr>
        </thead>
    </table>
    <tbody>
        
        {consultas.map(item => 

           <tr>
             <td>{item.id}</td>
             <td>{item.nome}</td>
             <td>{item.preco}</td>
             <td>{item.data.substr(0, 10)}</td>
             <td>{item.assunto}</td>
            <td>
             <img src={lapis} alt='editar'/>
            <img src={lixo} alt='remover' onClick={() => excluirConsulta(item.id, item.nome)}/>
            </td>



           </tr>
        )}



    </tbody>
    </main>
    )
}