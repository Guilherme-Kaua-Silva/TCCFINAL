import './cadastrar.scss';
import { useState} from 'react';
import { cadastrarConsulta, alterarConsulta} from '../../api/nutricionistaApi';
import Storage from 'local-storage';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';





export default function Cadastrar(){

    const[nome, setNome] = useState('');
    const[preco, setPreco] = useState(0);
    const[data, setData] = useState('');
    const[assunto, setAssunto] = useState('');
    const[id, setId] = useState(0);

        async function salvarConsulta() {
          try {
              const usuario = Storage('usuario-logado').id;

              if(id == 0){ 
                const novaConsulta = await cadastrarConsulta(nome, preco, data, assunto, usuario) 
                setId(novaConsulta.id);
                toast.dark('Consulta cadastrada com sucesso! 😊')
              }
              else{
                  await alterarConsulta(id, nome, preco, data, assunto, usuario)
                  toast.dark('Consulta alterada com sucesso! 😊')
              }
             
          } 
          catch (err) {
             toast.error(err.response.data.erro);
          }
    }

    function novoClick(){
        setId(0);
        setNome('');
        setPreco(0);
        setData('');
        setAssunto('');
    }

    return(
        <main className="pagina-cadastrar">
      
            <div className="titulo">
                <h3>CADASTRO:</h3>
            </div>
         <div className="container2">
            <div className="form1">
                <label>Nome:</label>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
            </div>
          
            <div className="mudar">

            <div classNmae="form1">
                <label>Preço:</label>
                <input type="text" value={preco} onChange={e => setPreco(e.target.value)}/>
            </div>

            </div>
           
            <div className="form2">
                <label>Assunto:</label>
                <input type="text" value={assunto} onChange={e => setAssunto(e.target.value)}/>
              </div>
              <div className="form">
                 <label>Data da Consulta:</label>
                 <input type="date" value={data} onChange={e => setData(e.target.value)}/>
               </div>
        
              </div>
              <div className="botões">
                <div className="buttons">
               <Link to="/pagina-2">Voltar</Link>
                </div>
               <div className="buttons">
               <button><a onClick={salvarConsulta}>{id === 0 ? 'CADASTRAR' : 'ALTERAR'}</a></button>
               <button><a onClick={novoClick}>NOVA CONSULTA</a></button>
                </div>
             </div>

           </main>
    );
}

