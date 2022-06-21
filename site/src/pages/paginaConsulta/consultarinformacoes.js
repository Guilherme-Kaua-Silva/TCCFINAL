import './consultarinformacoes.scss'

import lapis from '../../assets/images/lapis.png'
import lixo from '../../assets/images/lixo.png'
import logo from '../../assets/images/logo.png'
import { confirmAlert } from 'react-confirm-alert'
import { useState } from 'react'
import { toast } from 'react-toastify';
import { listartodasConsultas, removerConsulta, buscarConsultasPorNome } from '../../api/nutricionistaApi'
import { useEffect } from 'react'
import lupa from '../../assets/images/lupa2.png'

export default function ConsultarInformacoes() {
    const [consultas, setConsultas] = useState([]);
    const [filtro, setFiltro] = useState('');

    async function carregarTodasConsultas() {
        const resp = await listartodasConsultas();
        setConsultas(resp)
    }


    useEffect(() => {
        carregarTodasConsultas();
    }, [])

    async function excluirConsulta(id, nome) {
        confirmAlert({
            title: 'Remover Consulta',
            message: `Deseja remover Consulta ${nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resposta = await removerConsulta(id, nome);
                        if (filtro === '')
                            carregarTodasConsultas();
                        else
                            filtrar();
                        toast.dark('Consulta removida!');
                    }

                },
                {
                    label: 'Não'
                }
            ]

        })
    }

    async function filtrar() {
        const resp = await buscarConsultasPorNome(filtro);
        setConsultas(resp);
    }
    return (
            <main className='pagina-consultarinformacoes'>
                <div className="cabecalho-consultar">
                    <img className="logo1" src={logo} alt='' />
                    <h1>CONSULTAR INFORMAÇÕES SOBRE CLIENTES</h1>
                </div>
                <div className='caixa-busca'>
                            <input type="text" placeholder='Buscar Consultas por nome' onClick={buscarConsultasPorNome} />
                          <button onClick={buscarConsultasPorNome}>  <img src={lupa} alt='buscar'/> </button>
                        </div>
                <table>
                    <thead>
                        <tr>
                            <th>IDENTIFICAÇÃO</th>
                            <th>NOME</th>
                            <th>PRECO</th>
                            <th>DATA</th>
                            <th>ASSSUNTO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {consultas.map(item =>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.preco}</td>
                                <td>{item.data.substr(0, 10)}</td>
                                <td>{item.assunto}</td>
                                <td>
                                    <img src={lapis} alt='editar' /> &nbsp;&nbsp;&nbsp;&nbsp;
                                    <img src={lixo} alt='remover' onClick={() => excluirConsulta(item.id, item.nome)} />
                                </td>
                            </tr>
                        )}
                    </tbody>
    
                </table>
            </main>
        )
    }