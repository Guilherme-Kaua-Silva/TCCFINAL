import './edicao.scss'


import logo from '../../assets/images/logo.png'


export default  function index(){
    
    return(
        <main className='pagina-edicao'>
            <div className="cabeçalho-consultar">
        <img className="logo1" src={logo} alt=""/>
        <h1>CONSULTAR INFORMAÇÕES SOBRE CLIENTES</h1>
    </div>
    <br/>
    <section className="titulo">
        <div className="titulo">
            <h2>Próxima consultas: </h2>
           
        </div>
    </section>
    <section className="cartoes">
        <div className="parte-de-cima">
            <p>Mateus Fernandes</p>
            <p>Consulta dia 13/05</p>
        </div>
        <div className="parte-de-baixo">
            <ul>
            <li>Idade: 25 anos</li><br/>
            <li>Tipo de Dieta: Paleolitica</li><br/>
            <li>Peso: 65 kg</li><br/>
            <li>Assunto: "Quero ganhar peso mas não consigo"</li>
            </ul>
        </div>
    </section>
    <section className="anotacoes">
        <div>
            <h2>Anotações:</h2>
            <input type="text"/>
        </div>
    </section>
    <div>
        <a href="./">Voltar a pagina home</a>
    </div>

        </main>
    )
}