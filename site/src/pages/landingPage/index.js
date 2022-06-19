import "./index.scss";

import objetivos from "../../assets/images/objetivo.png";
import nutricionista from "../../assets/images/nutricionista.png";
import logo from "../../assets/images/logo.png";
import balao from "../../assets/images/balao-de-fala.png";
import mulher from "../../assets/images/mulher.png";
import tatum from "../../assets/images/jayson-tatum.png";
import chef from "../../assets/images/chef.png";
import povo from "../../assets/images/povo.png";
import cesta from "../../assets/images/cesta-frutas.png";
import laranjas from "../../assets/images/frutas-citricas.png";
import frango from "../../assets/images/frango.png";
import doutor from "../../assets/images/doutor.png";
import verificado from "../../assets/images/verificado.png";
import instagram from "../../assets/images/insta.png";
import link from "../../assets/images/link.png";
import facebook from "../../assets/images/fb.png";
import gmail from "../../assets/images/gmail.png";
import wpp from "../../assets/images/bolha-de-bate-papo.png";
import mapa from "../../assets/images/mapa.png";
import maca from "../../assets/images/maça.png";
import piramide from "../../assets/images/piramide.png";
import balanca from "../../assets/images/balanca.png";
import lista from "../../assets/images/lista.png";
import nova from "../../assets/images/nova.png";
import fundo from "../../assets/images/fundo.png";

export default function index() {
  return (
    <main className="pagina-1">
      <header>
        <nav>
          <div className="barra-sup">
            <div className="bs-logo">
              <img src={logo} alt="" />
              <p>MEIRELLES</p>
            </div>
            <div className="bs-div">
              <a href="pagina-3">ÁREA ADMINISTRATIVA</a>
            </div>
          </div>
        </nav>
      </header>
      <section className="faixa-1">
        <img className="f1-foto" src={nova} alt="" />

        <div className="f1-textos">
          <h1>O que é ser um nutricionista?</h1>
          <img src={nutricionista} alt="" />
        </div>
        <h2>
          O nutricionista é um profissional que <br /> trabalha na área da saúde
          humana, <br /> agindo na prevenção, promoção e meios <br /> de
          recuperar a saúde, por meio <br /> de dietas e rotinas de exercício de
          acordo <br /> com o perfil de cada pessoa.
        </h2>
      </section>
      <section className="faixa-2">
        <img className="f2-foto" src={fundo} alt="" />
        <div className="f2-div">
          <div className="f2-textos">
            <h1>QUEM É A SHEILA MEIRELLES</h1>
          </div>
          <h2>
            Sheila Meirelles é uma jovem com seus 23 anos de idade, formada <br />{" "}
            em nutricionismo e pós-graduada na área. A Dr. Meirelles já <br />{" "}
            trabalhou em diversas clínicas, possuindo vários clientes, porém,
            agora <br /> está trabalhando de maneira autônoma, ajudando <br /> as
            pessoas a atingirem seus objetivos de maneira saudável, <br /> sempre
            realizando atendimentos individuais e especiais <br /> para cada
            paciente. Confira ao longo do site todos os seus serviços, <br /> que
            são prestados com muita dedicação e empenho.
          </h2>
        </div>
      </section>
      <section className="faixa-3">


        <div className="f3-textos">
          <div className="f3-fundo">          <img className="f3-fotona" src={objetivos} alt="" />

            <h1 className="f3-h1">Objetivos de Sheila em sua carreira:</h1>

            <p>
              Um dos seus objetivos é crescer como pessoa, fazendo o que ama,
              que é ajudar seus <br /> pacientes criando cardápios adequados (
              do ponto <br /> de vista nutricional ) a cada um deles. E fazer
              com <br /> que sua empresa cresça, assim, expandindo seu negócio
              cada vez mais.
            </p>
          </div>
        </div>
              
      </section>
      <section className="faixa-5">
        <div className="f5-tt">
          <h1>Relatos de pacientes</h1>
          <img src={balao} alt="" />
        </div>
        <div className="f5-texto">
          <div className="f5-cartao">
            <img src={mulher} alt="" />
            <h1>BEATRIZ ROCHA COMENTOU:</h1>
          </div>
          <p>
            "Sheila, gostaria de te parabenizar e te agradecer também! Já havia
            escutado sobre o método Low Carb, mas somente fui compreendê-lo
            quando comecei a te acompanhar. Já emagreci 10Kg somente seguindo
            suas dicas, e sem fazer exercícios físicos. Obrigada por estar me
            ajudando, e por ajudar tantas pessoas!"
          </p>
        </div>
        <div className="f5-texto">
          <div className="f5-cartao">
            <img src={mulher} alt="" />
            <h1>CAROL MENDES COMENTOU:</h1>
          </div>
          <p>
            "A Doutora Sheila é muito atenciosa, explica muito bem tudo sobre os
            nossos objetivos, esclarece todas as suas dúvidas na hora, e depois
            também nas redes sociais. Elabora seu plano alimentar de acordo com
            a sua hora e sua rotina. Amei a consulta!"
          </p>
        </div>
      </section>
      <section className="f-7">
        <div className="titulo-f7">
          <h1>Serviços oferecidos:</h1>
        </div>

        <div className="f7-jt">
          <div className="faixinhas">
            <img className="img-atleta" src={tatum} alt="" />

            <div className="textos-f7">
              <h2>Esportiva</h2>
              <p>
                A nutrição esportiva tem como função proteger a saúde de quem
                pratica a atividade física nesses momentos. Durante a fase de
                treinos, o atleta precisa seguir um plano alimentar que forneça
                energia necessária para o esforço envolvido.
              </p>
            </div>
          </div>

          <div className="faixinhas">
            <img className="img-povo" src={povo} alt="" />
            <div className="textos-f7">
              <h2>Clinica</h2>
              <p>
                A nutrição clínica trata-se o organismo como um todo e não
                apenas tenta-se combater uma doença
              </p>
            </div>
          </div>

          <div className="faixinhas">
            <img className="img-chef" src={chef} alt="" />
            <div className="textos-f7">
              <h2>Gastronomica</h2>
              <p>
                A gastronomia na nutrição é a arte de preparar uma alimentação
                balanceada por meio da ciência dos alimentos. O nutricionista
                tem a função de apresentar a alimentação saudável e adequada à
                condição de seu cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="faixa-7">
        <div>
          <h1 className="tipos">TIPOS DE DIETAS FORNECIDOS:</h1>
        </div>
        <div className="cartoes">
          <div className="f7-cartao">
            <img className="img1" src={cesta} alt=" " />
            <p className="p1">
              A dieta DASH tem foco no emagrecimento e tem como principal meta
              reduzir e controlar a pressão arterial.
            </p>
          </div>
          <div className="f7-cartao">
            <img className="img2" src={laranjas} alt="" />
            <p className="p2">
              O método Low Carb tem como premissa a redução de carboidrato e
              propõe a redução, não a ausência do nutriente.
            </p>
          </div>
          <div className="f7-cartao">
            <img className="img3" src={frango} alt="" />
            <p className="p3">
              {" "}
              Na Paleolítica, o cardápio segue a mesma proposta dos tempos das
              cavernas : carne de caça, pesca, frutas e vegetais.
            </p>
          </div>
        </div>
        <section>
          <div className="faixa-precos">
            <div className="fp-f1">
              <div className="fp1-plano-simples">
                <div className="titulo">
                  <h1>PLANO SIMPLES</h1>
                  <p className="para">1 consulta + 1 retorno = 200R$</p>
                </div>
                <div className="texto">
                  <p className="para">
                    Faça uma consulta completa e tenha o prazo de 6 meses para
                    voltar para um checkup!
                  </p>
                </div>
              </div>
              <div>
                <img className="piramide-img" src={piramide} alt="" />
              </div>
            </div>

            <div className="fp-f2">
              <div className="balanca-img">
                <img src={balanca} alt="" />
              </div>
              <div className="fp-plano-composto">
                <div>
                  <h1> PLANO COMPOSTO</h1>
                  <p className="para"> 1 Consulta + 5 retorno = 750R$</p>
                </div>
                <div>
                  <p className="para">
                    Faça uma consulta completa e tenha o prazo de 1 ano para
                    retornar e fazer até 5 checkups!
                  </p>
                </div>
              </div>
            </div>

            <div className="fp-consulta-simples">
              <div className="fp-f3">
                <div>
                  <h1> CONSULTA SIMPLES</h1>
                  <p className="para"> 1 Consulta = 150R$</p>
                  <div>
                    <p className="para">
                      {" "}
                      Faça uma consulta e receba seu diagnóstico!
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img className="maca-img" src={maca} alt="" />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="faixa-8">
        <div className="f8-pt1">
          <img src={doutor} alt="" />
          <div className="f8-pt1-txt">
            <h1>TRABALHAMOS COM CONSULTORIA ÚNICA</h1>
            <p> O que é consultoria única?</p>
          </div>
          <div className="f8-pt1-img">
            <img src={verificado} alt="" />
          </div>
        </div>
        <div className="f8-txt">
          <p>
            Todo paciente tem um tratamento diferenciado e preparado diretamente
            para ele(a), com <br /> gostos alimentares, diferentes tipos de
            dietas e até os treinos! A consulta é dedicada para cada <br /> um
            dos clientes individualmente e cada cardapio é adaptado para cada
            paciente.
          </p>
        </div>
      </section>
      <section></section>

      <section className="rodape">
        <div className="rodape-pt1">
          <div className="rodape-redes">
            <h1>Entre em contato conosco, e não fique com dúvidas!</h1>
            <div className="elemento">
              <img src={instagram} alt="" />
              <h1>@sheilanutricionis_oficial</h1>
            </div>
            <div className="elemento">
              <img src={link} alt="" />
              <h1>sheilanutricionista</h1>
            </div>
            <div className="elemento">
              <img src={facebook} alt="" />
              <h1>Sheila Nutricionista</h1>
            </div>
            <div className="elemento">
              <img src={gmail} alt="" />
              <h1>Email : sheila@gmai.com</h1>
            </div>
            <div className="elemento">
              <img src={wpp} alt="" />
              <h1>Telefone : 11 9999-8888</h1>
            </div>
          </div>
          <hr />
          <div className="rodape-valores">
            <h1>MISSÃO:</h1>
            <p>
              Prestar serviços de saúde utilizando o nutricionismo como base.
              Criar rotinas,exercícios e dietas para cada cliente
              individualmente de forma saudável.
            </p>

            <h1>VISÃO:</h1>
            <p>
              Servir de referênciacomo micro-empesa na região de interlagos.
              Investindo muito para ser referência no estado de São Paulo e em
              todo Brasil.
            </p>
          </div>
          <hr />
          <div className="mapinha">
            <div className="elemento-m">
              <h1>SHEILA - CONSULTÓRIO NUTRICIONISTA</h1>
              <img src={logo} alt="" />
            </div>
            <div className="mapa">
              <img src={mapa} alt="" />
            </div>
          </div>

          <hr className="horizontal" />
          <div className="rodape-pt2">
            <h1>MEIRELES NUTRICIONISTA</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
