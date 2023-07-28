import "./GetIn.css";
import cadastro from "../img/wallpaper2.jpg";

import { useState } from "react";

import { AlertPassword, AlertErrorSignUp, SignUpOK } from "../components/modal";
import { postSignUp } from "../request/request";

export default function SignUp() {
  const [data, setdata] = useState({});
  const [confirmPassword, setconfirmPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const [errorCPF, setErrorCPF] = useState(false);
  const [signUp_OK, setsignUp_OK] = useState(false);

  function handleReset() {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  }

  function sendBody() {
    if (data.password.length < 6) {
      alert("Obrigatório no minimo 6 caracteres na senha!");
      return;
    }
    if (data.password !== data.confirmpassword) {
      return setconfirmPassword(true);
    }
    if (!data.name || !data.phone || !data.password || !data.email) {
      return setIsOpen(true);
    }
    if (data.cpf) {
      if (data.cpf.length !== 11 || isNaN(data.cpf)) {
        setErrorCPF(true);
        return;
      }
    }
    if (data.confirmpassword) {
      delete data.confirmpassword;
    }

    const post = postSignUp(data);
    post.then(() => {
      setsignUp_OK(true);
      handleReset();
      return;
    });
    post.catch((error) => {
      if (error.response.status) {
        alert("Email ja cadastrado,favor faça login");
        // window.location.href = "/";
        return;
      }

      alert("Tivemos um erro ao realizar seu cadastro, tente mais tarde!");
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
      {confirmPassword ? (
        <AlertPassword setconfirmPassword={setconfirmPassword}></AlertPassword>
      ) : (
        <></>
      )}
      {isOpen ? (
        <AlertErrorSignUp setIsOpen={setIsOpen}></AlertErrorSignUp>
      ) : (
        <></>
      )}
      {signUp_OK ? <SignUpOK></SignUpOK> : <></>}
      <div
        className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
        data-bs-bg={cadastro}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div className="section-title-area ltn__section-title-2">
                  <h6 className="section-subtitle ltn__secondary-color">
                    // Bem vindo a autepeças Bodnar
                  </h6>
                  <h1 className="section-title white-color">Cadastro</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li>Cadastro</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__login-area pb-110">
        <div className="container">
          <div style={{ alignItems: "center" }} className="row d-flex">
            <div className="col-lg-12">
              <div className="section-title-area text-center">
                <h1 className="section-title">
                  Cadastre <br />
                  sua conta
                </h1>
                <p>E tenho acesso aos melhores produtos da região.</p>
              </div>
            </div>
          </div>
          <div style={{ alignItems: "center" }} className="row d-flex">
            <div
              style={{ width: "100%", margin: "0 auto", maxWidth: "710px" }}
              className="col-lg-6 offset-lg-3"
            >
              <div className="account-login-inner">
                <form action="#" className="ltn__form-box contact-form-box">
                  <div
                    style={{ justifyContent: "space-between" }}
                    className="row d-flex"
                  >
                    <input
                      style={{ width: "48%", maxWidth: "350px" }}
                      type="text"
                      name="name"
                      placeholder="Nome Completo"
                      onChange={(e) =>
                        handleForm({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      }
                    />

                    <input
                      style={{ width: "48%", maxWidth: "350px" }}
                      type="text"
                      name="email"
                      placeholder="Email"
                      onChange={(e) =>
                        handleForm({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div
                    style={{ justifyContent: "space-between" }}
                    className="row d-flex"
                  >
                    <input
                      type="text"
                      style={{ width: "48%", maxWidth: "350px" }}
                      name="phone"
                      placeholder="Celular"
                      onChange={(e) =>
                        handleForm({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      style={{ width: "48%", maxWidth: "350px" }}
                      name="phonecontact"
                      placeholder="Telefone de contato"
                      onChange={(e) =>
                        handleForm({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div
                    style={{ justifyContent: "space-between" }}
                    className="row d-flex"
                  >
                    <input
                      style={{ width: "48%", maxWidth: "350px" }}
                      type="password"
                      name="password"
                      placeholder="Senha"
                      onChange={(e) =>
                        handleForm({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      }
                    />
                    <input
                      style={{ width: "48%", maxWidth: "350px" }}
                      onChange={(e) =>
                        handleForm({
                          name: e.target.name,
                          value: e.target.value,
                        })
                      }
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirmação de senha"
                    />
                  </div>

                  <div className="btn-wrapper">
                    <span
                      onClick={() => sendBody()}
                      className="theme-btn-1 btn reverse-color btn-block"
                    >
                      CRIAR CONTA
                    </span>
                  </div>
                </form>
                <div className="by-agree text-center">
                  <div className="go-to-btn mt-50">
                    <a href="login">Já possui uma conta? Entre. </a>
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
