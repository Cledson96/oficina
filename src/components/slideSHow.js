import slide1 from "./../img/slide1.png";
import fundo from ".././img/fundo.jpg";
export default function SlideShow() {
  return (
    <>
      <div class="ltn__slider-area ltn__slider-3  section-bg-1">
        <div class="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
          <div class="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
            <div class="ltn__slide-item-inner">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 align-self-center">
                    <div class="slide-item-info">
                      <div class="slide-item-info-inner ltn__slide-animation">
                        <div class="slide-video mb-50">
                          <a
                            class="ltn__video-icon-2 ltn__video-icon-2-border"
                            href="https://www.youtube.com/embed/tlThdr3O5Qo"
                            data-rel="lightcase:myCollection"
                          >
                            <i class="fa fa-play"></i>
                          </a>
                        </div>
                        <h1 class="slide-title animated ">
                          Serviços <br /> Profissional & <br /> Qualidade
                          Garantida
                        </h1>
                        <h6 class="slide-sub-title animated">
                          <span>//</span> Melhor serviço da região
                        </h6>
                      </div>
                    </div>
                    <div class="slide-item-img">
                      <img src={slide1} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
            <div class="ltn__slide-item-inner  text-right text-end">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 align-self-center">
                    <div class="slide-item-info">
                      <div class="slide-item-info-inner ltn__slide-animation">
                        <h6 class="slide-sub-title ltn__secondary-color animated">
                          // AUTO PEÇAS E MÊCANICA
                        </h6>
                        <h1 class="slide-title animated ">
                          Autopeças Bodnar, <br /> Qualidade e preço baixo
                        </h1>
                        <div class="slide-brief animated">
                          <p>
                            Não deixe seu carro nas mãos erradas, confie na
                            nossa oficina.
                          </p>
                        </div>
                        <div class="btn-wrapper animated">
                          <a
                            href="service.html"
                            class="theme-btn-1 btn btn-effect-1"
                          >
                            Nossos Serviços
                          </a>
                          <a
                            href="about.html"
                            class="btn btn-transparent btn-effect-3"
                          >
                            Nossa loja
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="slide-item-img slide-img-left">
                      <img src={fundo} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
