import "./headers.css";
import logo from "./../img/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checker } from "../request/request";
import user from "./../img/user.png";
import cars from "./../img/cars.png";

export default function Headers({ setlogged, logged }) {
  const navigate = useNavigate();
  const [name, setname] = useState();

  useEffect(() => {
    console.log("entrei");
    let token = localStorage.getItem("token");
    console.log(token);
    let verification = checker(token);
    verification.then((res) => {
      setname(res.data);
      setlogged(true);
    });
    verification.catch(() =>
      console.log("Tivemos um problema para obter os dados!!")
    );
  }, [logged]);
  return (
    <header className="ltn__header-area ltn__header-5 ltn__header-transparent gradient-color-4 pt-2">
      <div style={{ height: "30px" }} className="ltn__header-top-area">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="ltn__top-bar-menu">
                <ul>
                  <li>
                    <a href="mailto:autopecasbodnar@gmail.com.com?Subject=Flower%20greetings%20to%20you">
                      <i className="icon-mail"></i> autopecasbodnar@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="locations">
                      <i className="icon-placeholder"></i> Radialista Souza
                      Moreno, 120 - Sitio Cercado-Curitiba - PR
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="top-bar-right text-end">
                <div className="ltn__top-bar-menu">
                  <ul>
                    <li>
                      <div className="ltn__social-media">
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white ltn__logo-right-menu-option">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="site-logo-wrap">
                <div className="site-logo">
                  <a href="index.html">
                    <img style={{ height: "80px" }} src={logo} alt="Logo" />
                  </a>
                </div>
                <div className="get-support clearfix">
                  <div className="get-support-icon">
                    <i className="icon-call"></i>
                  </div>
                  <div className="get-support-info">
                    <h6>Entre em contato</h6>
                    <h4>
                      <a href="tel:4130398917">(41)3039-8917</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col header-menu-column">
              <div className="header-menu d-none d-xl-block">
                <nav>
                  <div className="ltn__main-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li className="menu-icon">
                        <a href="#">Sobre</a>
                        <ul>
                          <li>
                            <a href="/sobre">Sobre</a>
                          </li>
                          <li>
                            <a href="/servicos">Serviços</a>
                          </li>
                          <li>
                            <a href="/equipe">Time</a>
                          </li>
                          <li>
                            <a href="/contato">Contato</a>
                          </li>
                          <li>
                            <a href="/localizacao">Localização</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/loja">Produtos</a>
                      </li>

                      <li>
                        <a href="contact.html">Contato</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="ltn__header-options ltn__header-options-2">
              <div className="header-search-wrap">
                <div className="header-search-1">
                  <div className="search-icon">
                    <i className="icon-search for-search-show"></i>
                    <i className="icon-cancel  for-search-close"></i>
                  </div>
                </div>
                <div className="header-search-1-form">
                  <form id="#" method="get" action="#">
                    <input
                      type="text"
                      name="search"
                      value=""
                      placeholder="Localizar..."
                    />
                    <button type="submit">
                      <span>
                        <i className="icon-search"></i>
                      </span>
                    </button>
                  </form>
                </div>
              </div>

              <div className="ltn__drop-menu user-menu">
                <ul>
                  <li>
                    <a href="#">
                      <i className="icon-user"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="register.html">Cadastro</a>
                      </li>
                      <li>
                        <a href="account.html">Minha conta</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Minhas compras</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="mini-cart-icon">
                <a
                  href="#ltn__utilize-cart-menu"
                  className="ltn__utilize-toggle"
                >
                  <i className="icon-shopping-cart"></i>
                  <sup>2</sup>
                </a>
              </div>

              <div className="mobile-menu-toggle d-xl-none">
                <a
                  href="#ltn__utilize-mobile-menu"
                  className="ltn__utilize-toggle"
                >
                  <svg viewBox="0 0 800 600">
                    <path
                      d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                      id="top"
                    ></path>
                    <path d="M300,320 L540,320" id="middle"></path>
                    <path
                      d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                      id="bottom"
                      transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
