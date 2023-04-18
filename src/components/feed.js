import promotion from "./../img/promocao.jpg";
import promotion2 from "./../img/promocao2.jpg";
import militec from "./../img/militec.jpg";

export default function Feeds() {
  return (
    <>
      <div className="ltn__blog-area pt-115 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h6 className="section-subtitle ltn__secondary-color">
                  // blog & dicas
                </h6>
                <h1 className="section-title">
                  Informativos<span>.</span>
                </h1>
              </div>
            </div>
          </div>
          <div className="row  ltn__blog-slider-one-active slick-arrow-1">
            <div className="col-lg-12">
              <div
                className="ltn__blog-item ltn__blog-item-4 bg-image"
                data-bs-bg={promotion}
              >
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Bodnar
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Serviços
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">Mega promoção!!!!!</a>
                  </h3>
                  <p>10% de desconto no kit de correia dentada e tensor</p>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i> Abril,2023
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Veja mais</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div
                className="ltn__blog-item ltn__blog-item-4 bg-image"
                data-bs-bg={promotion2}
              >
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Bodnar
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Serviços
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">Promoção relampago!!!</a>
                  </h3>
                  <p>Troca de óleo + filtro a partir de R$135,00</p>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i> Abril,2023
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
                      <a href="blog-details.html">Veja mais</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div
                className="ltn__blog-item ltn__blog-item-4 bg-image"
                data-bs-bg={militec}
              >
                <div className="ltn__blog-brief">
                  <div className="ltn__blog-meta">
                    <ul>
                      <li className="ltn__blog-author">
                        <a href="#">
                          <i className="far fa-user"></i>by: Bodnar
                        </a>
                      </li>
                      <li className="ltn__blog-tags">
                        <a href="#">
                          <i className="fas fa-tags"></i>Serviços
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 className="ltn__blog-title">
                    <a href="blog-details.html">Militec-A qualidade tem nome</a>
                  </h3>
                  <p>
                    Tradicional condicionador sintético de metais, de excelente
                    qualidade.
                  </p>
                  <div className="ltn__blog-meta-btn">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i> Abril,2023
                        </li>
                      </ul>
                    </div>
                    <div className="ltn__blog-btn">
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
