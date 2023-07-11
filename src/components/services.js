export default function Services() {
  return (
    <>
      <div className="ltn__service-area section-bg-1 pt-115 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h6 className="section-subtitle ltn__secondary-color">
                  Serviços
                </h6>
                <h1 className="section-title">Diagnóstico completo</h1>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="ltn__service-item-2 white-bg">
                <div className="service-item-icon">
                  <i className="icon-car-service"></i>
                </div>
                <div className="service-item-brief">
                  <h6 className="ltn__secondary-color text-uppercase mb-2">
                    Deixando-o novo
                  </h6>
                  <h3>
                    <a href="service-details.html">
                      Cuidando do seu carro como se fosse nosso.
                    </a>
                  </h3>
                  <hr />
                  <ul>
                    <li>Serviços rápidos</li>
                    <li>Serviços customizados</li>
                    <li>Preço e qualidade</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ltn__service-item-2 white-bg">
                <div className="service-item-icon">
                  <i className="icon-mechanic"></i>
                </div>
                <div className="service-item-brief">
                  <h6 className="ltn__secondary-color text-uppercase mb-2">
                    Manutenção preventiva
                  </h6>
                  <h3>
                    <a href="service-details.html">
                      A chave para a longevidade do seu veículo.
                    </a>
                  </h3>
                  <hr />
                  <ul>
                    <li>Verificação do sistema de arrefecimento</li>
                    <li>Inspeção de freios</li>
                    <li>Verificação dos fluidos</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ltn__service-item-2 white-bg">
                <div className="service-item-icon">
                  <i className="icon-cog"></i>
                </div>
                <div className="service-item-brief">
                  <h6 className="ltn__secondary-color text-uppercase mb-2">
                    Peças de qualidade
                  </h6>
                  <h3>
                    <a href="service-details.html">
                      Peças de qualidade para o seu carro. Encontre na Autopeças
                      Bodnar.
                    </a>
                  </h3>
                  <hr />
                  <ul>
                    <li>Entrega rápida e segura em toda a região</li>
                    <li>Atendimento personalizado</li>
                    <li>Catálogos online</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
