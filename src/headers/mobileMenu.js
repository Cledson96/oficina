import logo from "../img/logo_fundo_cortado.jpeg";

export default function Mobile() {
  return (
    <div
      id="ltn__utilize-mobile-menu"
      class="ltn__utilize ltn__utilize-mobile-menu"
    >
      <div class="ltn__utilize-menu-inner ltn__scrollbar">
        <div class="ltn__utilize-menu-head">
          <div class="site-logo">
            <a href="index.html">
              <img
                style={{ height: "99px", width: "120px", borderRadius: "10px" }}
                src={logo}
                alt="Logo"
              />
            </a>
          </div>
          <button class="ltn__utilize-close">×</button>
        </div>
        <div class="ltn__utilize-menu-search-form">
          <form action="#"></form>
        </div>
        <div class="ltn__utilize-menu">
          <ul>
            <a href="/">INICIO</a>

            <li>
              <a href="/sobre">Sobre</a>
              <ul class="sub-menu">
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
        <div class="ltn__utilize-buttons ltn__utilize-buttons-2">
          <ul>
            <li>
              <a href="account.html" title="My Account">
                <span class="utilize-btn-icon">
                  <i class="far fa-user"></i>
                </span>
                Minha conta
              </a>
            </li>

            <li>
              <a href="cart.html" title="Shoping Cart">
                <span class="utilize-btn-icon">
                  <i class="fas fa-shopping-cart"></i>
                  <sup>0</sup>
                </span>
                Carrinho
              </a>
            </li>
          </ul>
        </div>
        <div class="ltn__social-media-2">
          <ul>
            <li>
              <a
                href="https://www.facebook.com/autopecasbodnar"
                title="Facebook"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/autopecasbodnar/"
                title="Instagram"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
