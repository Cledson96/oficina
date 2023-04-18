import logo from ".././img/logo_fundo_cortado.jpeg";

export default function Footer() {
  return (
    <>
      <footer className="ltn__footer-area ltn__footer-2  ltn__footer-color-2">
        <div className="footer-top-area  section-bg-1">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-5">
                <div className="footer-widget ltn__footer-timeline-widget ltn__footer-timeline-widget-1">
                  <h6 className="ltn__secondary-color text-uppercase">
                    // Nossos horários
                  </h6>
                  <h4 className="footer-title mt-2">Marque seu horário</h4>
                  <ul>
                    <li>
                      Segunda <span>08:00AM - 18:00PM</span>
                    </li>
                    <li>
                      Terça <span>08:00AM - 18:00PM</span>
                    </li>
                    <li>
                      Quarta <span>08:00AM - 18:00PM</span>
                    </li>
                    <li>
                      Quinta <span>08:00AM - 18:00PM</span>
                    </li>
                    <li>
                      Sexta <span>08:00AM - 18:00PM</span>
                    </li>
                    <li>
                      Sabado <span>08:00AM - 16:00PM</span>
                    </li>
                    <li>
                      Domingo <span>Fechado</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-md-7">
                <div className="footer-widget footer-menu-widget footer-menu-widget-2-column clearfix">
                  <h4 className="footer-title">Serviços.</h4>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="service.html">Manutenção preventiva</a>
                      </li>
                      <li>
                        <a href="service.html">Troca de óleo</a>
                      </li>
                      <li>
                        <a href="service.html">Troca dos freios</a>
                      </li>
                      <li>
                        <a href="service.html">
                          Instalação de peças automotivas
                        </a>
                      </li>
                      <li>
                        <a href="service.html">Inspeção veicular</a>
                      </li>
                      <li>
                        <a href="service.html">
                          Serviços de alinhamento e balanceamento
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="service.html">Estoque de peças</a>
                      </li>
                      <li>
                        <a href="service.html">
                          Peças com garantias e procedencia
                        </a>
                      </li>
                      <li>
                        <a href="service.html">Catálogo de peças</a>
                      </li>
                      <li>
                        <a href="service.html">Vendas online</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6">
                <div className="footer-widget footer-blog-widget">
                  <h4 className="footer-title">Novidades.</h4>
                  <div className="ltn__footer-blog-item">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i> Abril,2023
                        </li>
                      </ul>
                    </div>
                    <h4 className="ltn__blog-title">
                      <a href="blog-details.html">
                        10% de desconto no kit de correia dentada e tensor.
                      </a>
                    </h4>
                  </div>
                  <div className="ltn__footer-blog-item">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i> Abril,2023
                        </li>
                      </ul>
                    </div>
                    <h4 className="ltn__blog-title">
                      <a href="blog-details.html">
                        Troca de óleo + filtro a partir de R$135,00.
                      </a>
                    </h4>
                  </div>
                  <div className="ltn__footer-blog-item">
                    <div className="ltn__blog-meta">
                      <ul>
                        <li className="ltn__blog-date">
                          <i className="far fa-calendar-alt"></i> Abril,2023
                        </li>
                      </ul>
                    </div>
                    <h4 className="ltn__blog-title">
                      <a href="blog-details.html">
                        Desejamos uma feliz pascoa a todos!!
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ltn__copyright-area ltn__copyright-2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="site-logo-wrap">
                  <div className="site-logo">
                    <a href="index.html">
                      <img
                        style={{ height: "80px", borderRadius: "10px" }}
                        src={logo}
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <div className="get-support ltn__copyright-design clearfix">
                    <div className="get-support-info">
                      <h6>Copyright & Design By</h6>
                      <h4>
                        Cledson Santos - Cledson1996@gmail.com
                        <span className="current-year"></span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 align-self-center">
                <div className="ltn__copyright-menu text-end"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
