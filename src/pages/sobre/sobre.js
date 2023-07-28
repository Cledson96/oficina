import sobre from "./../../img/sobre.jpg";
import sobre2 from "./../../img/sobre-2.jpg";
import "./sobre.css";
export default function Sobre() {
  return (
    <>
      <div
        className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
        data-bs-bg={sobre}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div className="section-title-area ltn__section-title-2">
                  <h6 className="section-subtitle ltn__secondary-color">
                    Bem vindo a Auto Peças Bodnar!
                  </h6>
                  <h1 className="section-title white-color">Sobre nós...</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li>Sobre nós</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__about-us-area pt-120-- pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-left">
                <img
                  style={{ width: "600px", height: "600px" }}
                  src={sobre2}
                  alt="About Us Image"
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2">
                  <h6 className="section-subtitle ltn__secondary-color">
                    // Sobre nós
                  </h6>
                  <h1 className="section-title">
                    Auto peças Bodnar: a essência da paixão pela excelência
                    automotiva.
                  </h1>
                  <p>
                    "O sucesso nos negócios requer treinamento e disciplina e
                    trabalho duro. Mas se você não está assustado com essas
                    coisas, as oportunidades são incríveis." - David Allen
                  </p>
                </div>
                <p>
                  A autopeças Bodnar, foi fundada em 15 de maio de 2022, pelos
                  irmãos Bruna e Bruno Bodnar. Com a ampla experiência no ramo
                  automotivo e uma paixão por oferecer um serviço de qualidade
                  aos seus clientes, os irmãos Bodnar decidiram unir forças e
                  criar uma empresa que pudesse oferecer o melhor atendimento e
                  os melhores produtos para todos os perfis de clientes.
                </p>
                <br></br>
                <p>
                  Desde então, o empreendimento dos irmãos Bodnar tem sido um
                  sucesso, com uma equipe altamente qualificada e apaixonada
                  pelo que faz. A loja oferece uma grande variedade de peças
                  automotivas e serviços de manutenção e reparo de veículos
                  leves.
                </p>
                <br></br>
                <p>
                  Com uma visão de longo prazo, Bruna e Bruno Bodnar estão
                  comprometidos em oferecer a melhor experiência possível aos
                  seus clientes, sempre inovando e buscando as melhores soluções
                  para atender às necessidades de cada cliente. Se você precisa
                  de peças automotivas ou serviços de mecânica automotiva, não
                  hesite em visitar a loja dos irmãos Bodnar.
                </p>
                <div className="btn-wrapper">
                  <a href="/servicos" className="theme-btn-3 btn btn-effect-4">
                    Nossos serviços
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__feature-area section-bg-1 pt-115 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">
                  Por que escolher <br></br> a nossa empresa ?
                </h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-7">
                <div className="ltn__feature-icon-title">
                  <div className="ltn__feature-icon">
                    <span>
                      <i className="icon-car-parts-3"></i>
                    </span>
                  </div>
                  <h3>
                    <a href="service-details.html">Qualidade é fundamental</a>
                  </h3>
                </div>
                <div className="ltn__feature-info">
                  <p>
                    Qualidade e confiança em autopeças e mecânica automotiva,
                    com especialistas cuidando do seu carro.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-7">
                <div className="ltn__feature-icon-title">
                  <div className="ltn__feature-icon">
                    <span>
                      <i className="icon-mechanic"></i>
                    </span>
                  </div>
                  <h3>
                    <a href="service-details.html">Comprometimento</a>
                  </h3>
                </div>
                <div className="ltn__feature-info">
                  <p>
                    Nosso objetivo é superar as expectativas de nossos clientes,
                    proporcionando atendimento com excelência.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="ltn__feature-item ltn__feature-item-7">
                <div className="ltn__feature-icon-title">
                  <div className="ltn__feature-icon">
                    <span>
                      <i className="icon-repair"></i>
                    </span>
                  </div>
                  <h3>
                    <a href="service-details.html"> Produtos de qualidade</a>
                  </h3>
                </div>
                <div className="ltn__feature-info">
                  <p>
                    Nossos fornecedores são selecionados, assegurando
                    a procedência e a confiabilidade de cada item em nosso
                    estoque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="call-to-action-area call-to-action-5 bg-image bg-overlay-theme-90 pt-40 pb-25"
        data-bs-bg="img/bg/13.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="call-to-action-inner call-to-action-inner-5 text-center">
                <h2 className="white-color text-decoration">
                  Quer segurança e qualidade? Veja nossos{" "}
                  <a href="/produtos">produtos</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="ltn__testimonial-area bg-image pt-115 pb-70"
        data-bs-bg="img/bg/8.jpg"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h6 className="section-subtitle ltn__secondary-color">
                  // Feedbacks
                </h6>
                <h1 className="section-title">
                  O que nossos clientes dizem:  
                </h1>
              </div>
            </div>
          </div>
          <div className="row ltn__testimonial-slider-3-active slick-arrow-1 slick-arrow-1-inner">
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-info">
                  <p>
                    Mês passado levei meu carro para fazer alguns reparos,
                    fiquei surpresa com o atendimento e agilidade. Gostei das
                    condições de pagamento, já indiquei vocês para outras
                    pessoas. Muito legal encontrar um lugar sério que respeite
                    você. Obrigada viuuuu.
                  </p>
                  <h4>Anne Bernardo</h4>
                  <h6>Avaliação Google</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-info">
                  <p>
                    Trabalho excelente,atendimento também , me mostraram tudo
                    que foi trocado e o mecânico explica tudo muito bem.
                  </p>
                  <h4>Tico Eltico</h4>
                  <h6>Avaliação Google</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-info">
                  <p>
                    Virei cliente, melhor atendimento, atenção, e o mecânico da
                    loja é excelente e extremamente prestativo. O atendimento é
                    top!
                  </p>
                  <h4>Elaine Mendes</h4>
                  <h6>Avaliação Google</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-info">
                  <p>
                    Equipe super cuidadosa com seu carro. Levei meu carro para
                    ser feito a troca de óleo e filtro e algumas pecas de
                    revisao de km, serviço nota 10. Obrigado Bruna que me
                    atendeu.
                  </p>
                  <h4>Felipe Silva</h4>
                  <h6>Avaliação Google</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="ltn__testimonial-item ltn__testimonial-item-4">
                <div className="ltn__testimoni-info">
                  <p>
                    Fiz orçamento em 3 locais de peças,e foi o melhor preço c as
                    mesmas marca das peças,super recomendo.
                  </p>
                  <h4>Valentim Santos</h4>
                  <h6>Avaliação Google</h6>
                </div>
                <div className="ltn__testimoni-bg-icon">
                  <i className="far fa-comments"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
