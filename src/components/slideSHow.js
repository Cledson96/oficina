import slide1 from "./../img/slide1.png";
import fundo from ".././img/capa.jpg";
export default function SlideShow() {
  return (
    <>
      <div className="ltn__slider-area ltn__slider-3  section-bg-1">
        <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
          <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
            <div className="ltn__slide-item-inner  text-right text-end">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <h6 className="slide-sub-title ltn__secondary-color animated">
                          // AUTO PEÇAS E MÊCANICA
                        </h6>
                        <h1 className="slide-title animated ">
                          Autopeças Bodnar, <br /> Qualidade e preço baixo.
                        </h1>
                        <div className="slide-brief animated">
                          <p>
                            Soluções completas em peças automotivas para atender
                            todas as suas necessidades.
                          </p>
                        </div>
                        <div className="btn-wrapper animated">
                          <a
                            href="service.html"
                            className="theme-btn-1 btn btn-effect-1"
                          >
                            Nossos Serviços
                          </a>
                          <a
                            href="about.html"
                            className="btn btn-transparent btn-effect-3"
                          >
                            Nossa loja
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="slide-item-img slide-img-left">
                      <img src={fundo} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
            <div className="ltn__slide-item-inner">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 align-self-center">
                    <div className="slide-item-info">
                      <div className="slide-item-info-inner ltn__slide-animation">
                        <div className="slide-video mb-50">
                          <a
                            className="ltn__video-icon-2 ltn__video-icon-2-border"
                            href="https://www.youtube.com/embed/tlThdr3O5Qo"
                            data-rel="lightcase:myCollection"
                          >
                            <i className="fa fa-play"></i>
                          </a>
                        </div>
                        <h1 className="slide-title animated ">
                          Serviços com <br /> qualidade & <br /> compromisso
                        </h1>
                        <h6 className="slide-sub-title animated">
                          <span>//</span> Nossa oficina se destaca pela excelência <br/>e satisfação do cliente.
                        </h6>
                      </div>
                    </div>
                    <div className="slide-item-img">
                      <img src={slide1} alt="#" />
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
