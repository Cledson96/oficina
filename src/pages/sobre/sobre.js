import sobre from "./../../img/sobre.jpg";
import sobre2 from "./../../img/sobre-2.jpg";
export default function Sobre() {
  return (
    <>
      <div
        class="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
        data-bs-bg={sobre}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div class="section-title-area ltn__section-title-2">
                  <h6 class="section-subtitle ltn__secondary-color">
                    // Bem vindo a Auto Peças Bodnar!
                  </h6>
                  <h1 class="section-title white-color">Sobre nós...</h1>
                </div>
                <div class="ltn__breadcrumb-list">
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
      <div class="ltn__about-us-area pt-120-- pb-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="about-us-img-wrap about-img-left">
                <img
                  style={{ width: "600px", height: "600px" }}
                  src={sobre2}
                  alt="About Us Image"
                />
              </div>
            </div>
            <div class="col-lg-6 align-self-center">
              <div class="about-us-info-wrap">
                <div class="section-title-area ltn__section-title-2">
                  <h6 class="section-subtitle ltn__secondary-color">
                    // Sobre nós
                  </h6>
                  <h1 class="section-title">
                    Auto peças Bodnar: paixão por autopeças e mecânica
                    automotiva
                    <span>.</span>
                  </h1>
                  <p>
                    "O sucesso nos negócios requer treinamento e disciplina e
                    trabalho duro. Mas se você não está assustado com essas
                    coisas, as oportunidades são incríveis." - David Allen
                  </p>
                </div>
                <p>
                  Bruna e Bruno Bodnar são irmãos empreendedores que, há um ano,
                  decidiram criar a sua própria empresa de autopeças e mecânica
                  automotiva. Com ampla experiência no ramo automotivo e uma
                  paixão por oferecer um serviço de qualidade aos seus clientes,
                  os irmãos Bodnar decidiram unir forças e criar uma empresa que
                  pudesse oferecer o melhor atendimento e os melhores produtos
                  para todos os seus clientes.
                </p>
                <br></br>
                <p>
                  Desde então, a empresa dos irmãos Bodnar tem sido um sucesso,
                  com uma equipe altamente qualificada e apaixonada pelo que
                  faz. A empresa oferece uma grande variedade de peças e
                  serviços, desde peças automotivas de alta qualidade até
                  serviços de manutenção e reparo, sempre com o objetivo de
                  garantir a satisfação total do cliente.
                </p>
                <br></br>
                <p>
                  Com uma visão de longo prazo, Bruna e Bruno Bodnar estão
                  comprometidos em oferecer a melhor experiência possível aos
                  seus clientes, sempre inovando e buscando as melhores soluções
                  para atender às necessidades de cada cliente. Se você precisa
                  de peças automotivas ou serviços de mecânica automotiva de
                  qualidade, não hesite em visitar a empresa dos irmãos Bodnar.
                </p>
                <div class="btn-wrapper">
                  <a href="/servicos" class="theme-btn-3 btn btn-effect-4">
                    Nossos serviços
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ltn__feature-area section-bg-1 pt-115 pb-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area ltn__section-title-2 text-center">
                <h1 class="section-title">
                  Por que escolher <br></br> a nossa empresa ?<span>.</span>
                </h1>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="ltn__feature-item ltn__feature-item-7">
                <div class="ltn__feature-icon-title">
                  <div class="ltn__feature-icon">
                    <span>
                      <i class="icon-car-parts-3"></i>
                    </span>
                  </div>
                  <h3>
                    <a href="service-details.html">Qualidade é fundamental</a>
                  </h3>
                </div>
                <div class="ltn__feature-info">
                  <p>
                    Escolha a qualidade e confiança em serviços de autopeças e
                    mecânica automotiva. Com a nossa equipe de especialistas,
                    você pode ter certeza de que seu carro estará em boas mãos.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="ltn__feature-item ltn__feature-item-7">
                <div class="ltn__feature-icon-title">
                  <div class="ltn__feature-icon">
                    <span>
                      <i class="icon-mechanic"></i>
                    </span>
                  </div>
                  <h3>
                    <a href="service-details.html">
                      Nosso compromisso com um atendimento excepcional
                    </a>
                  </h3>
                </div>
                <div class="ltn__feature-info">
                  <p>
                    Nosso objetivo é superar as expectativas de nossos clientes,
                    proporcionando uma experiência de atendimento de excelência.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="ltn__feature-item ltn__feature-item-7">
                <div class="ltn__feature-icon-title">
                  <div class="ltn__feature-icon">
                    <span>
                      <i class="icon-repair"></i>
                    </span>
                  </div>
                  <h3>
                    <a href="service-details.html">
                      {" "}
                      Produtos de excelência em qualidade e procedência
                    </a>
                  </h3>
                </div>
                <div class="ltn__feature-info">
                  <p>
                    Nossos fornecedores são selecionados com rigor, assegurando
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
        class="call-to-action-area call-to-action-5 bg-image bg-overlay-theme-90 pt-40 pb-25"
        data-bs-bg="img/bg/13.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="call-to-action-inner call-to-action-inner-5 text-center">
                <h2 class="white-color text-decoration">
                  Quer segurança e qualidade? Veja nossos{" "}
                  <a href="/produtos">produtos</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="ltn__testimonial-area bg-image pt-115 pb-70"
        data-bs-bg="img/bg/8.jpg"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area ltn__section-title-2 text-center">
                <h6 class="section-subtitle ltn__secondary-color">
                  // Feedbacks
                </h6>
                <h1 class="section-title">
                  O que nossos clientes dizem<span>:</span>
                </h1>
              </div>
            </div>
          </div>
          <div class="row ltn__testimonial-slider-3-active slick-arrow-1 slick-arrow-1-inner">
            <div class="col-lg-12">
              <div class="ltn__testimonial-item ltn__testimonial-item-4">
                <div class="ltn__testimoni-info">
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
                <div class="ltn__testimoni-bg-icon">
                  <i class="far fa-comments"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="ltn__testimonial-item ltn__testimonial-item-4">
                <div class="ltn__testimoni-info">
                  <p>
                    Trabalho excelente,atendimento também , me mostraram tudo
                    que foi trocado e o mecânico explica tudo muito bem.
                  </p>
                  <h4>Tico Eltico</h4>
                  <h6>Avaliação Google</h6>
                </div>
                <div class="ltn__testimoni-bg-icon">
                  <i class="far fa-comments"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="ltn__testimonial-item ltn__testimonial-item-4">
                <div class="ltn__testimoni-info">
                  <p>
                    Virei cliente, melhor atendimento, atenção, e o mecânico da
                    loja é excelente e extremamente prestativo. O atendimento é
                    top!
                  </p>
                  <h4>Elaine Mendes</h4>
                  <h6>Avaliação Google</h6>
                </div>
                <div class="ltn__testimoni-bg-icon">
                  <i class="far fa-comments"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="ltn__testimonial-item ltn__testimonial-item-4">
                <div class="ltn__testimoni-info">
                  <p>
                    Equipe super cuidadosa com seu carro. Levei meu carro para
                    ser feito a troca de óleo e filtro e algumas pecas de
                    revisao de km, serviço nota 10. Obrigado Bruna que me
                    atendeu.
                  </p>
                  <h4>Felipe Silva</h4>
                  <h6>Avaliação Google</h6>
                </div>
                <div class="ltn__testimoni-bg-icon">
                  <i class="far fa-comments"></i>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="ltn__testimonial-item ltn__testimonial-item-4">
                <div class="ltn__testimoni-info">
                  <p>
                    Fiz orçamento em 3 locais de peças,e foi o melhor preço c as
                    mesmas marca das peças,super recomendo.
                  </p>
                  <h4>Valentim Santos</h4>
                  <h6>Avaliação Google</h6>
                </div>
                <div class="ltn__testimoni-bg-icon">
                  <i class="far fa-comments"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
