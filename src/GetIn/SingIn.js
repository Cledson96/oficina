import "./GetIn.css";

import { useState } from "react";
import { postSignIn } from "../request/request";
import { useNavigate } from "react-router-dom";
import wallpaepr from "./../img/wallpaper.jpg";

export default function SignIn({ setscreen, setview, view, setlogged }) {
  const [data, setdata] = useState({});

  function handleForm({ value, name }) {
    setdata({
      ...data,
      [name]: value,
    });
  }

  function sendBody() {
    if (!data.email || !data.password) {
      alert("Obrigatório preencher todos os campos");
      return;
    }
    const post = postSignIn(data);
    post.then((data) => {
 
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", data.data.name);
      setlogged(true);
      window.location.href = "/";
    });
    post.catch((error) => {
      console.log(error);
      if (error.response.status === 404) {
        alert("usuario não cadastrado");
        return;
      }
      if (error.response.status === 401) {
        alert("Email ou senha incorretos");
        return;
      }
      if (error.response.status === 422) {
        alert("Digite corretamente o seu login!");
        return;
      }

      alert("Tivemos um erro ao realizar o login, favor tentar mais tarde!");
    });
  }
  function handleForm({ value, name }) {
    setdata({
      ...data,
      [name]: value,
    });
  }

  return (
    <>
      <div className="ltn__utilize-overlay"></div>
      <div
        className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
        data-bs-bg={wallpaepr}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div className="section-title-area ltn__section-title-2">
                  <h6
                    style={{ fontSize: "30px", color: "yellow " }}
                    className="section-subtitle ltn__secondary-color"
                  >
                    // Sejam bem vindos!
                  </h6>
                  <h1 className="section-title white-color">Conta</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a
                        style={{ color: "white", fontSize: "20px" }}
                        href="index.html"
                      >
                        Inicio
                      </a>
                    </li>
                    <li style={{ color: " #fd9e39;", fontSize: "20px" }}>
                      Login
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <>
        <div className="ltn__login-area pb-65">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h1 className="section-title">
                    Entrar <br />
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="account-login-inner">
                  <div className="ltn__form-box contact-form-box">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email*"
                      onChange={(e) =>
                        handleForm({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      }
                    />
                    <input
                      onChange={(e) =>
                        handleForm({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      }
                      type="password"
                      name="password"
                      placeholder="Senha*"
                    />
                    <div className="btn-wrapper mt-0">
                      <button
                        onClick={() => sendBody()}
                        className="theme-btn-1 btn btn-block w-100"
                      >
                        ENTRAR
                      </button>
                    </div>
                    <div className="go-to-btn mt-20">
                      <a
                        href="#"
                        title="Wishlist"
                        data-bs-toggle="modal"
                        data-bs-target="#ltn_forget_password_modal"
                      >
                        <small>ESQUECEU SUA SENHA?</small>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="account-create text-center pt-50">
                  <h4>AINDA NÃO TEM CONTA?</h4>

                  <div className="btn-wrapper">
                    <a
                      href="register.html"
                      className="theme-btn-1 btn black-btn"
                    >
                      CADASTRAR
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
