import promotion from "./../img/promocao.jpg";
import promotion2 from "./../img/promocao2.jpg";
import militec from "./../img/militec.jpg";

export default function Feeds() {
  return (
    <>
      <div class="ltn__blog-area pt-115 pb-90">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area ltn__section-title-2 text-center">
                <h6 class="section-subtitle ltn__secondary-color">
                  // blog & dicas
                </h6>
                <h1 class="section-title">
                  Informativos<span>.</span>
                </h1>
              </div>
            </div>
          </div>
          <div class="row  ltn__blog-slider-one-active slick-arrow-1">
            <div class="col-lg-12">
              <div
                class="ltn__blog-item ltn__blog-item-4 bg-image"
                data-bs-bg={promotion}
              >
                <div class="ltn__blog-brief">
                  <div class="ltn__blog-meta">
                    <ul>
                      <li class="ltn__blog-author">
                        <a href="#">
                          <i class="far fa-user"></i>by: Bodnar
                        </a>
                      </li>
                      <li class="ltn__blog-tags">
                        <a href="#">
                          <i class="fas fa-tags"></i>Serviços
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ltn__blog-title">
                    <a href="blog-details.html">Mega promoção!!!!!</a>
                  </h3>
                  <p>10% de desconto no kit de correia dentada e tensor</p>
                  <div class="ltn__blog-meta-btn">
                    <div class="ltn__blog-meta">
                      <ul>
                        <li class="ltn__blog-date">
                          <i class="far fa-calendar-alt"></i> Abril,2023
                        </li>
                      </ul>
                    </div>
                    <div class="ltn__blog-btn">
                      <a href="blog-details.html">Veja mais</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <div
                class="ltn__blog-item ltn__blog-item-4 bg-image"
                data-bs-bg={promotion2}
              >
                <div class="ltn__blog-brief">
                  <div class="ltn__blog-meta">
                    <ul>
                      <li class="ltn__blog-author">
                        <a href="#">
                          <i class="far fa-user"></i>by: Bodnar
                        </a>
                      </li>
                      <li class="ltn__blog-tags">
                        <a href="#">
                          <i class="fas fa-tags"></i>Serviços
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ltn__blog-title">
                    <a href="blog-details.html">Promoção relampago!!!</a>
                  </h3>
                  <p>Troca de óleo + filtro a partir de R$135,00</p>
                  <div class="ltn__blog-meta-btn">
                    <div class="ltn__blog-meta">
                      <ul>
                        <li class="ltn__blog-date">
                          <i class="far fa-calendar-alt"></i> Abril,2023
                        </li>
                      </ul>
                    </div>
                    <div class="ltn__blog-btn">
                      <a href="blog-details.html">Veja mais</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12">
              <div
                class="ltn__blog-item ltn__blog-item-4 bg-image"
                data-bs-bg={militec}
              >
                <div class="ltn__blog-brief">
                  <div class="ltn__blog-meta">
                    <ul>
                      <li class="ltn__blog-author">
                        <a href="#">
                          <i class="far fa-user"></i>by: Bodnar
                        </a>
                      </li>
                      <li class="ltn__blog-tags">
                        <a href="#">
                          <i class="fas fa-tags"></i>Serviços
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="ltn__blog-title">
                    <a href="blog-details.html">Militec-A qualidade tem nome</a>
                  </h3>
                  <p>
                    Tradicional condicionador sintético de metais, de excelente
                    qualidade.
                  </p>
                  <div class="ltn__blog-meta-btn">
                    <div class="ltn__blog-meta">
                      <ul>
                        <li class="ltn__blog-date">
                          <i class="far fa-calendar-alt"></i> Abril,2023
                        </li>
                      </ul>
                    </div>
                    <div class="ltn__blog-btn">
                      <a href="blog-details.html">Veja mais</a>
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
