import img from "./../../img/servicos.webp";
import promocao from "../../img/promocao2.jpg";
import video1 from "../../videos/revis-xe3-o-do-sistema-de-freio-traseiro-x2.mp4";
import video2 from "../../videos/troca-do-conjunto-de-xe1-gua-x2022-tubo-d.mp4";
import video3 from "../../videos/video-318661190434599-acdelco-lubrax-mo.mp4";
import video4 from "../../videos/kit-embreagem-carro-citroën-c3-ano-2003-mot.mp4";
import video5 from "../../videos/manutenção-preventiva-carro-corsa-classic.mp4";
import video6 from "../../videos/revisão-completa-carro-ford-ka-ano-2017-mo.mp4";
import foto1 from "../../videos/foto1.jpg";
import foto2 from "../../videos/foto2.jpg";
import foto3 from "../../videos/foto3.jpg";
import foto4 from "../../videos/foto4.jpg";
import foto5 from "../../videos/foto5.jpg";
import foto6 from "../../videos/foto6.jpg";
import logo from "../../img/contato2.jpg";
import "./servicos.css"
export default function Servicos() {
  return (
    <>
      <div
        class="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
        data-bs-bg={img}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div class="section-title-area ltn__section-title-2">
                  <h6 class="section-subtitle ltn__secondary-color">
                    // BEM VINDO A AUTO PEÇAS BODNAR!
                  </h6>
                  <h1 class="section-title white-color">Nossos serviços</h1>
                </div>
                <div class="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li>Serviços</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ltn__about-us-area pb-115">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 align-self-center">
              <div class="about-us-img-wrap ltn__img-shape-left  about-img-left">
                <img src={promocao} alt="Image" />
              </div>
            </div>
            <div class="col-lg-7 align-self-center">
              <div class="about-us-info-wrap">
                <div class="section-title-area ltn__section-title-2">
                  <h1 class="section-title">Qualidade e confiança.</h1>
                  <p>
                    O segredo de um grande sucesso está no trabalho de uma
                    grande equipe.
                  </p>
                </div>
                <div class="about-us-info-wrap-inner about-us-info-devide">
                  <p>
                    Bem-vindo à nossa seção de serviços! Oferecemos uma ampla
                    gama de serviços para garantir que o seu veículo esteja
                    sempre em perfeitas condições de funcionamento. Desde
                    serviços básicos de manutenção até reparos mais complexos.
                    Nossa equipe é altamente treinada e experiente está pronta
                    para ajudar.
                  </p>
                  <div class="list-item-with-icon">
                    <ul>
                      <li>
                        <a href="/contato">Suporte online</a>
                      </li>
                      <li>
                        <a href="/servicos">Serviços de qualidade</a>
                      </li>
                      <li>
                        <a href="/cotato">Cotação online</a>
                      </li>
                      <li>
                        <a href="/produtos">Variedades de produtos</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ltn__service-area section-bg-1 pt-115 pb-70">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area ltn__section-title-2 text-center">
                <h6 class="section-subtitle ltn__secondary-color">
                   Serviços
                </h6>
                <h1 class="section-title">
                  Produtos e serviços de qualidade<span>.</span>
                </h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="ltn__service-item-2 white-bg">
                <div class="service-item-icon">
                  <i class="icon-maintenance-1"></i>
                </div>
                <div class="service-item-brief">
                  <h6 class="ltn__secondary-color">Manutenção preventiva</h6>
                  <br></br>
                  <h3>
                    <a href="service-details.html">
                      Evite dores de cabeça e gastos adicionais.
                    </a>
                  </h3>
                  <ul>
                    <li>
                       Troca de óleo e filtro
                    </li>
                    <li>
                       Substituição das pastilhas de freio
                    </li>
                    <li>
                       Inspeção do sistema de arrefecimento
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="ltn__service-item-2 white-bg">
                <div class="service-item-icon">
                  <i class="icon-mechanic"></i>
                </div>
                <div class="service-item-brief">
                  <h6 class="ltn__secondary-color">Produtos de qualidade</h6>
                  <br></br>
                  <h3>
                    <a href="service-details.html">
                      Produtos com procedencia e qualidade.
                    </a>
                  </h3>
                  <ul>
                    <li>
                       Preço justo
                    </li>
                    <li>
                       Entregas para todo o Brasil
                    </li>
                  
                    <li>
                       Qualidade
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="ltn__service-item-2 white-bg">
                <div class="service-item-icon">
                  <i class="icon-car-parts-3"></i>
                </div>
                <div class="service-item-brief">
                  <h6 class="ltn__secondary-color">Revisão</h6>
                  <br></br>
                  <h3>
                    <a href="service-details.html">
                      Para dirigir sem imprevistos.
                    </a>
                  </h3>
                  <ul>
                    <li>
                       Verificação do sistema de suspensão
                    </li>
                    <li>
                       Verificação do sistema de direção
                    </li>
                    <li>
                       Verificação do sistema de transmissão
                    </li>
                    <li>
                       E muito mais...
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ltn__gallery-area mb-120">
        <div class="container">
          <div class="row mt-5 pt-5">
            <div class="col-lg-12">
              <div class="section-title-area ltn__section-title-2 text-center">
                
                <h1 class="section-title">
                  Um pouco do nosso trabalho
                </h1>
              </div>
            </div>
          </div>
          <div class="ltn__gallery-active row ltn__gallery-style-1">
            <div class="ltn__gallery-sizer col-1"></div>

            <div class="ltn__gallery-item filter_category_2 col-md-4 col-sm-6 col-12">
              <div class="ltn__gallery-item-inner">
                <div class="ltn__gallery-item-img">
                  <a href={video1} data-rel="lightcase:myCollection">
                    <img src={foto1} alt="Image" />
                    <span class="ltn__gallery-action-icon">
                      <i class="fas fa-video"></i>
                    </span>
                  </a>
                </div>
                <div class="ltn__gallery-item-info">
                  <h4>
                    <a href="portfolio-details.html">
                      Revisão do sistema de freio traseiro.
                    </a>
                  </h4>
                  <p>
                    Troca da lona traseira,rolamento traseiro e cilindro
                    traseiro
                  </p>
                </div>
              </div>
            </div>
            <div class="ltn__gallery-item filter_category_2 col-md-4 col-sm-6 col-12">
              <div class="ltn__gallery-item-inner">
                <div class="ltn__gallery-item-img">
                  <a href={video2} data-rel="lightcase:myCollection">
                    <img src={foto2} alt="Image" />
                    <span class="ltn__gallery-action-icon">
                      <i class="fas fa-video"></i>
                    </span>
                  </a>
                </div>
                <div class="ltn__gallery-item-info">
                  <h4>
                    <a href="portfolio-details.html">
                      Troca do conjunto de água.
                    </a>
                  </h4>
                  <p>
                    Tubo de refrigeração do motor,carcaça de válvula
                    termostática,válvula termostática.
                  </p>
                </div>
              </div>
            </div>
            <div class="ltn__gallery-item filter_category_2 col-md-4 col-sm-6 col-12">
              <div class="ltn__gallery-item-inner">
                <div class="ltn__gallery-item-img">
                  <a href={video5} data-rel="lightcase:myCollection">
                    <img src={foto5} alt="Image" />
                    <span class="ltn__gallery-action-icon">
                      <i class="fas fa-video"></i>
                    </span>
                  </a>
                </div>
                <div class="ltn__gallery-item-info">
                  <h4>
                    <a href="portfolio-details.html">Manutenção preventiva</a>
                  </h4>
                  <p>
                    Trocas: óleo,filtro,rolamento dianteiro,sapatas, cilindros
                    traseiros,pastilhas,fluido de freio e limpeza do sistema de
                    arrefecimento.
                  </p>
                </div>
              </div>
            </div>
            <div class="ltn__gallery-item filter_category_2 col-md-4 col-sm-6 col-12">
              <div class="ltn__gallery-item-inner">
                <div class="ltn__gallery-item-img">
                  <a href={video3} data-rel="lightcase:myCollection">
                    <img src={foto3} alt="Image" />
                    <span class="ltn__gallery-action-icon">
                      <i class="fas fa-video"></i>
                    </span>
                  </a>
                </div>
                <div class="ltn__gallery-item-info">
                  <h4>
                    <a href="portfolio-details.html">Manutenção preventiva</a>
                  </h4>
                  <p>Venha realizar sua manutenção preventiva.</p>
                </div>
              </div>
            </div>
            <div class="ltn__gallery-item filter_category_2 col-md-4 col-sm-6 col-12">
              <div class="ltn__gallery-item-inner">
                <div class="ltn__gallery-item-img">
                  <a href={video4} data-rel="lightcase:myCollection">
                    <img src={foto4} alt="Image" />
                    <span class="ltn__gallery-action-icon">
                      <i class="fas fa-video"></i>
                    </span>
                  </a>
                </div>
                <div class="ltn__gallery-item-info">
                  <h4>
                    <a href="portfolio-details.html">Kit embreagem:</a>
                  </h4>
                  <p>Citroën C3 Ano:2003 Motor:1.6 16v</p>
                </div>
              </div>
            </div>

            <div class="ltn__gallery-item filter_category_2 col-md-4 col-sm-6 col-12">
              <div class="ltn__gallery-item-inner">
                <div class="ltn__gallery-item-img">
                  <a href={video6} data-rel="lightcase:myCollection">
                    <img src={foto6} alt="Image" />
                    <span class="ltn__gallery-action-icon">
                      <i class="fas fa-video"></i>
                    </span>
                  </a>
                </div>
                <div class="ltn__gallery-item-info">
                  <h4>
                    <a href="portfolio-details.html">Revisão completa:</a>
                  </h4>
                  <p>
                    Kit correia dentada,2 coifas, 1rolamento traseiro,2buchas de
                    barra estabilizadora,2 bieletas,correia do micro-v,junta da
                    tampa de valvulas,retentor dianteiro de virabrequim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="ltn__call-to-action-area ltn__call-to-action-4 bg-image pt-115 pb-120"
        data-bs-bg={logo}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="call-to-action-inner call-to-action-inner-4 text-center">
                <div class="section-title-area ltn__section-title-2">
                  <h6 class="section-subtitle ltn__secondary-color">
                     Fale conosco! 
                  </h6>
                  <br></br>
                  <h1 class="section-title white-color">(41)3039-8917</h1>
                </div>
                <div class="btn-wrapper">
                  <a
                    href="tel:+4130398917"
                    class="theme-btn-1 btn btn-effect-1"
                  >
                    LIGUE AGORA
                  </a>
                  <a
                    href="/contato"
                    class="btn btn-transparent btn-effect-3 white-color"
                  >
                    CONTATO
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </>
  );
}
