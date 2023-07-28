import faleconosco from "../../img/fale-conosco.jpg";
import "./contato.css";
export default function Contato() {
  return (
    <>
      <div
        className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
        data-bs-bg={faleconosco}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div className="section-title-area ltn__section-title-2">
                  <h1 className="section-title white-color">Fale conosco</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li>Contato</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__contact-address-area mb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="img/icons/10.png" alt="Icon Image" />
                </div>
                <h3>Nossos e-mails</h3>
                <p>
                  autopecasbodnar@gmail.com <br></br>
                  contato@autopecasbodnar.com.br
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="img/icons/11.png" alt="Icon Image" />
                </div>
                <h3>Telefones</h3>
                <p>
                  (41)3039-8917<br></br> (41)98706-2582
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="img/icons/12.png" alt="Icon Image" />
                </div>
                <h3>Endereço</h3>
                <p>
                  Rua: Radialista Souza Moreno, 120 <br></br> Sítio Cercado -
                  Curitiba, PR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__contact-message-area mb-120 mb--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__form-box contact-form-box box-shadow white-bg">
                <h4 className="title-2">Peça seu orçamento:</h4>
                <form id="contact-form" action="mail.php" method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input type="text" name="name" placeholder="Nome" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-email ltn__custom-icon">
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item">
                        <select className="nice-select">
                          <option>Selecione o serviço</option>
                          <option>Manutenção preventiva</option>
                          <option>Revisão </option>
                          <option>Peças </option>
                          <option>Outros</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-phone ltn__custom-icon">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Telefone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="input-item input-item-textarea ltn__custom-icon">
                    <textarea
                      name="message"
                      placeholder="Sua mensagem"
                    ></textarea>
                  </div>
                  <p></p>
                  <div className="btn-wrapper mt-0">
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                      type="submit"
                    >
                      Enviar mensagem
                    </button>
                  </div>
                  <p className="form-messege mb-0 mt-20"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1799.7539215566667!2d-49.26653900791201!3d-25.554765800932433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfd9b30bf6f39%3A0xeffab5207eaad6a2!2sAuto%20pe%C3%A7as%20Bodnar!5e0!3m2!1spt-BR!2sbr!4v1682742291960!5m2!1spt-BR!2sbr"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="100%"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </>
  );
}
