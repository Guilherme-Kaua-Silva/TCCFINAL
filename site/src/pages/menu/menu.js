import './menu.scss'


import barras from '../../assets/images/tres_barrinha.png'
import gerente from '../../assets/images/gerente.png'
import { useEffect } from 'react';

export default function index(){
    const [ usuario, setUsuario] = useState('-');

    const navigate = useNavigate();
    
    useEffect(() => {
      
       if(!storage('usuario-logado')) {
           navigate('/');

       }
       else{
           const usuarioLogado =storage('usuario-logado')
           setUsuario(usuarioLogado.nome);
       }

    }, [])

    return(
        <main className="pagina-menu">
        <section>
            <header className="cabecalho">
                <div className="c-direita">
                    <img src={barras} alt=""/>
                    <h1>Área do Administrador: Menu</h1>
                </div>
                <div className="c-esquerda">
                    <h1>Gerente</h1>
                    <img src={gerente} alt=""/> 
                </div>
            </header>
            <div className="corpo">
                <div className="fx-esquerda">
                    <div>
                       <a href="cadastro.html"><h1>NOVA CONSULTA</h1></a> 
                       <a href="proximas.html"><h1>PRÓXIMAS CONSULTAS</h1></a> 
                      <a href="consultasr.html"><h1>CONSULTAS REALIZADAS</h1></a>  
                    </div>
                        <a className="botao" href="pgadm.html">Voltar</a>
                </div>

                <div>
                     <p>Seja Bem Vindo(a), {usuario}!😊</p>
                </div>
                <div className='usuario'>
                    <span>{usuario[0].toUpperCase()}</span>
                </div>
            </div>
        </section>
    </main>
    );
}