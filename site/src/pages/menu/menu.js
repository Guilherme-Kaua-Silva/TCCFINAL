import './menu.scss'

import barras from '../../assets/images/tres_barrinha.png'
import gerente from '../../assets/images/gerente.png'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Storage from 'local-storage'

export default function Menu(){
    const [usuario, setUsuario] = useState('-');

    const navigate = useNavigate();

    function sair() {
        Storage.remove('usuario-logado');
        navigate('/');
    }
    
    useEffect(() => {
      
       if(!Storage('usuario-logado')) {
           navigate('/');

       }
       else{
           const usuarioLogado = Storage('usuario-logado')
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
                       <Link to="/pagina-4"><h1>NOVA CONSULTA</h1></Link> 
                       <Link to="/pagina-5"><h1>PRÓXIMAS CONSULTAS</h1></Link> 
                       <Link to="/pagina-6"><h1>CONSULTAS REALIZADAS</h1></Link>  
                    </div>
                        <a className="botao" onClick={sair} >Voltar</a>
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