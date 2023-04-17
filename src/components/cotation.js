export default function Cotation() {
  return (
    <>
      <div class="ltn__about-us-area pt-115 pb-95">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 align-self-center">
              <div class="about-us-info-wrap">
                <div class="section-title-area ltn__section-title-2">
                  <h6 class="section-subtitle ltn__secondary-color">
                    // A escolha inteligente para o seu carro
                  </h6>
                  <h1 class="section-title">
                    Cuidando do seu carro do início ao fim<span>.</span>
                  </h1>
                  <p>
                    Garantimos a qualidade e satisfação com nossas peças e
                    serviços automotivos.
                  </p>
                </div>
                <div class="about-us-info-wrap-inner about-us-info-devide">
                  <p>
                    Na Autopeças Bodnar, você encontra peças automotivas de
                    qualidade e serviços especializados em manutenção e reparos.
                    Equipe de mecânicos especializados, peças originais e preços
                    justos. Conte conosco para manter seu veículo em ótimas
                    condições.
                  </p>
                  <div class="list-item-with-icon">
                    <ul>
                      <li>
                        <a href="contact.html"> Suporte e eficiencia</a>
                      </li>
                      <li>
                        <a href="team.html">Time de especialistas</a>
                      </li>
                      <li>
                        <a href="service-details.html">
                          Peças de qualidade e providencia
                        </a>
                      </li>
                      <li>
                        <a href="shop.html">Melhor serviço da região</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 align-self-center">
              <div class="get-a-quote-wrap">
                <h2 className="mb-2">Peça um orçamento</h2>
                <form action="#" class="get-a-quote-form">
                  <div class="input-item input-item-name ltn__custom-icon">
                    <input type="text" placeholder="Nome" />
                  </div>
                  <div class="input-item input-item-email ltn__custom-icon">
                    <input type="email" placeholder="Email" />
                  </div>

                  <textarea
                    style={{ height: "50px" }}
                    placeholder="Descreva seu pedido:"
                    class="input-group "
                    aria-label="With textarea"
                  ></textarea>

                  <div class="btn-wrapper mt-0">
                    <button
                      type="submit"
                      class="btn theme-btn-1 btn-effect-1 text-uppercase"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
