import banner from "./../img/banner1.png";
import oleo from "./..//img/oleo.png";
import dicas from "./../img/dicas.png";
import pecas from "./../img/pecas.jpg";
import preventiva from "./../img/preventiva.png";
export default function SlideHome() {
  return (
    <>
      <div class="ltn__img-slider-area pb-100">
        <div class="container-fluid">
          <div class="row ltn__image-slider-3-active slick-arrow-1 slick-arrow-1-inner">
            <div class="col-lg-12">
              <div class="ltn__img-slide-item-3">
                <a href={banner} data-rel="lightcase:myCollection">
                  <img src={banner} alt="Image" />
                </a>
                <div class="ltn__img-slide-info">
                  <div class="ltn__img-slide-info-brief">
                    <h6>// Auto pecas Bodnar</h6>
                    <h1>
                      <a href="portfolio-details.html">Inspeção veicular</a>
                    </h1>
                  </div>
                  <div class="btn-wrapper">
                    <a
                      href="portfolio-details.html"
                      class="btn theme-btn-1 btn-effect-1"
                    >
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="ltn__img-slide-item-3">
                <a href={oleo} data-rel="lightcase:myCollection">
                  <img src={oleo} alt="Image" />
                </a>
                <div class="ltn__img-slide-info">
                  <div class="ltn__img-slide-info-brief">
                    <h6>// Venha conhecer</h6>
                    <h1>
                      <a href="portfolio-details.html">Troca de óleo</a>
                    </h1>
                  </div>
                  <div class="btn-wrapper">
                    <a
                      href="portfolio-details.html"
                      class="btn theme-btn-1 btn-effect-1"
                    >
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="ltn__img-slide-item-3">
                <a href={dicas} data-rel="lightcase:myCollection">
                  <img src={dicas} alt="Image" />
                </a>
                <div class="ltn__img-slide-info">
                  <div class="ltn__img-slide-info-brief">
                    <h6>// Dicas</h6>
                    <h1>
                      <a href="portfolio-details.html">Dicas Bodnar</a>
                    </h1>
                  </div>
                  <div class="btn-wrapper">
                    <a
                      href="portfolio-details.html"
                      class="btn theme-btn-1 btn-effect-1"
                    >
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="ltn__img-slide-item-3">
                <a href={pecas} data-rel="lightcase:myCollection">
                  <img src={pecas} alt="Image" />
                </a>
                <div class="ltn__img-slide-info">
                  <div class="ltn__img-slide-info-brief">
                    <h6>// Peças</h6>
                    <h1>
                      <a href="portfolio-details.html">
                        Qualidade e preço baixo.
                      </a>
                    </h1>
                  </div>
                  <div class="btn-wrapper">
                    <a
                      href="portfolio-details.html"
                      class="btn theme-btn-1 btn-effect-1"
                    >
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="ltn__img-slide-item-3">
                <a href={preventiva} data-rel="lightcase:myCollection">
                  <img src={preventiva} alt="Image" />
                </a>
                <div class="ltn__img-slide-info">
                  <div class="ltn__img-slide-info-brief">
                    <h6>// Manutenção preventiva</h6>
                    <h1>
                      <a href="portfolio-details.html">
                        A economia do seu carro.
                      </a>
                    </h1>
                  </div>
                  <div class="btn-wrapper">
                    <a
                      href="portfolio-details.html"
                      class="btn theme-btn-1 btn-effect-1"
                    >
                      <i class="fas fa-arrow-right"></i>
                    </a>
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
