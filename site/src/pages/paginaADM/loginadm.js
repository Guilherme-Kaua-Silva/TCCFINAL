/* eslint-disable react-hooks/rules-of-hooks */
import './loginadm.scss'
import { login } from '../../api/usuarioApi'

import storage from 'local-storage'
import { Link, useNavigate } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { useState, useRef, useEffect } from 'react'
import { toast } from 'react-toastify'

import lista from '../../assets/images/lista.png'
import dieta from '../../assets/images/dieta-balanceada.png'


export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        if (storage('usuario-logado')) {
            navigate('/pagina-2');
        }
    }, [])

    async function entrarClick() {
        ref.current.continuousStart();
        setCarregando(true);
        try {
            const r = await login(email, senha);
            storage('usuario-logado', r);

            console.log(r);
            setTimeout(() => {
                navigate('/pagina-2');
            }, 3000);
        }
        catch (err) {
            ref.current.complete();
            setCarregando(false);

            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    }



    return (
        <main className='pagina-adm'>
            <LoadingBar color='#5223ab' height={3} ref={ref} />
            <section className="pg-login">
                <div className="pl-tt">
                    <h1>BEM-VINDO(A) A ÁREA DO ADMINISTRADOR</h1>
                </div>

                <div className="pl-txt">
                    <p>Faça seu login aqui:</p>
                    <p>(apenas administrador(a) tem acesso)</p>

                </div>
                <br />
                <div className='container'>
                    <p>Login:</p>
                    <div className="pl-login">
                        <input type="text" placeholder='Insira seu login aqui'    value={email} onChange={e => setEmail(e.target.value)}
                        />
                        <img src={lista} alt="" />

                    </div>
                    <br /><br />
                    <br /><br />
                    <br /> <br />
                    <p>Senha:</p>
                    <div className="pl-senha">
                        <input type="password" placeholder='Insira sua senha aqui'value={senha} onChange={e => setSenha(e.target.value)} />
                        <img src={dieta} alt="" />

                    </div>

                    <div className="botoes">
                        <div className="b1">
                            <button>  <Link to="/">VOLTAR</Link></button>
                        </div>
                        <div className="b2">
                            <button onClick={entrarClick} disable={carregando}> ENTRAR </button>
                        </div>
                        <div> {erro} </div>
                    </div>
                </div>
            </section>
        </main>
    );
}