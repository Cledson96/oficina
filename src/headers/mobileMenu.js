import logo from "../img/logo_fundo_cortado.jpeg";

export default function Mobile() {
  return (
    <div
      id="ltn__utilize-mobile-menu"
      className="ltn__utilize ltn__utilize-mobile-menu"
    >
      <div className="ltn__utilize-menu-inner ltn__scrollbar">
        <div className="ltn__utilize-menu-head">
          <div className="site-logo">
            <a href="index.html">
              <img
                style={{ height: "99px", width: "120px", borderRadius: "10px" }}
                src={logo}
                alt="Logo"
              />
            </a>
          </div>
          <button className="ltn__utilize-close">×</button>
        </div>
        <div className="ltn__utilize-menu-search-form">
          <form action="#"></form>
        </div>
        <div className="ltn__utilize-menu">
          <ul>
            <a href="/">INICIO</a>

            <li>
              <a href="/sobre">Sobre</a>
              <ul className="sub-menu">
                <li>
                  <a href="/sobre">Sobre</a>
                </li>
                <li>
                  <a href="servicos">Serviços</a>
                </li>
                <li>
                  <a href="/contato">Contato</a>
                </li>
              </ul>
            </li>
            <br></br>
            <a href="/loja">LOJA</a>
            <br></br>
            <br></br>
            <a href="contact.html">CONTATO</a>
          </ul>
        </div>
        <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
          <ul>
            <li>
              <a href="account.html" title="My Account">
                <span className="utilize-btn-icon">
                  <i className="far fa-user"></i>
                </span>
                Minha conta
              </a>
            </li>

            <li>
              <a href="cart.html" title="Shoping Cart">
                <span className="utilize-btn-icon">
                  <i className="fas fa-shopping-cart"></i>
                  <sup>0</sup>
                </span>
                Carrinho
              </a>
            </li>
          </ul>
        </div>
        <div className="ltn__social-media-2">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/autopecasbodnar"
                title="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/autopecasbodnar/"
                title="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
