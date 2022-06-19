import './loginadm.scss'
import {login} from '../../API/usuarioApi'

import { useNavigate } 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import { useState, useRef, useEffect } from 'react'

import lista from '../../assets/images/lista.png'
import dieta from '../../assets/images/dieta-balanceada.png'


export default function index(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();
    
    useEffect(() => {
        if(storage ('usuario-logado')) {
            navigate('/pagina-2');
        }
    }, [])

    async function entrarClick(){
        ref.current.continuouStart();
        setCarregando(true);
        try {
              const r = await login(email, senha);
              storage('usuario-logado', r );
             
              setTimeout(() => {
                  navigate('/pagina-2');

              }, 3000);    
        } 
        catch (err) {
            ref.current.complete();
            setCarregando(false);
            if(err.response.status === 401){
                setErro(err.response.data.erro);
            }
        }
    }



    return(
        <main className='pagina-adm'>
            <LoadingBar color='#fffff' ref={ref} />
        <section className="pg-login">
            <div className="pl-tt">
                <h1>BEM-VINDO(A) A ÁREA DO ADMINISTRADOR</h1>
            </div>

            <div className="pl-txt">
                <p>Faça seu login aqui:</p>
                <p>(apenas administrador(a) tem acesso)</p>
            </div>

            <p>Login:</p>
            <div className="pl-login">
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}
                />
                    <img src={lista} alt=""/>
                
            </div>

            <p>Senha:</p>    
            <div className="pl-senha">
                <input type="password" value={senha} onChange={e => setSenha(e.target.value) }/>
                <img src={dieta} alt=""/>

            </div>

            <div className="botoes">
                <div className="b1">
                    <a  href="pagina-1">Voltar</a>
                </div>
                <div className="b2">
                    <a href="pagina-2" onClick={entrarClick} disable={carregando}> Entrar </a>
                </div>
                <div> {erro} </div>
            </div>
        </section>
    </main>
    );
}