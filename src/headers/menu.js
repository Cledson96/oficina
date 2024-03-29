import logo from "./../img/logo_fundo_cortado.jpeg";
import { useState } from "react";
import { checker } from "../request/request";

export default function Menu({ setlogged, logged, qtd, setCliente }) {
  const [name, setName] = useState("");

  let token = localStorage.getItem("token");
  if (token !== null && logged === false) {
    let verification = checker(token);
    verification.then((res) => {
      setName(res.data.nome);
      setCliente(res.data.id);
      setlogged(true);
    });
    verification.catch((error) => console.log("Erro:", error));
  }

  return (
    <>
      <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white ltn__logo-right-menu-option">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="site-logo-wrap">
                <div className="site-logo">
                  <a href="/">
                    <img
                      style={{ height: "80px", borderRadius: "10px" }}
                      src={logo}
                      alt="Logo"
                    />
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
                        <a href="/">Inicio</a>
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
                            <a href="/contato">Contato</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="/loja">Produtos</a>
                      </li>

                      <li>
                        <a href="/contato">Contato</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="ltn__header-options ltn__header-options-2">
              {logged ? (
                <div className="ltn__drop-menu user-menu">
                  <ul>
                    <li>
                      <a style={{ width: "200px" }} href="#">
                        <h1>
                          <span style={{ color: "red" }}> Olá</span> ,{" "}
                          {name.split(" ")[0].charAt(0).toUpperCase() +
                            name.split(" ")[0].substring(1).toLowerCase()}
                          !
                        </h1>
                      </a>
                      <ul>
                        <li>
                          <a
                            onClick={() => {
                              localStorage.removeItem("token");
                              localStorage.removeItem("name");
                              setlogged(false);
                            }}
                          >
                            Sair
                          </a>
                        </li>
                        <li>
                          <a href="/cadastro">Cadastro</a>
                        </li>
                        <li>
                          <a href="/conta">Minha conta</a>
                        </li>
                        <li>
                          <a href="/compras">Minhas compras</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="ltn__drop-menu user-menu">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="icon-user"></i>
                      </a>
                      <ul>
                        <li>
                          <a href="/login">Login</a>
                        </li>
                        <li>
                          <a href="/cadastro">Cadastro</a>
                        </li>
                        <li>
                          <a href="/conta">Minha conta</a>
                        </li>
                        <li>
                          <a href="/compras">Minhas compras</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              )}
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
                      onChange={(e) => console.log(e)}
                    />
                    <button type="submit">
                      <span>
                        <i className="icon-search"></i>
                      </span>
                    </button>
                  </form>
                </div>
              </div>

              <div className="mini-cart-icon">
                <a
                  href="#ltn__utilize-cart-menu"
                  className="ltn__utilize-toggle"
                >
                  <i className="icon-shopping-cart"></i>
                  <sup>{qtd}</sup>
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
    </>
  );
}
