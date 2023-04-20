import "./GetIn.css";
import eye_not from "./../img/eye_not.png";
import eye from "./../img/eye.png";
import { useState } from "react";
import {
  AlertPassword,
  AlertErrorSignUp,
  AlertErrorCPF,
  SignUpOK,
} from "../components/modal";
import { postSignUp } from "../request/request";

export default function SignUp({ setscreen, setview, view }) {
  const [data, setdata] = useState({});
  const [confirmPassword, setconfirmPassword] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorCPF, setErrorCPF] = useState(false);
  const [signUp_OK, setsignUp_OK] = useState(false);

  function handleReset() {
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  }

  function sendBody() {
    if (data.password !== confirmPassword) {
      setIsOpen(true);
      return;
    }
    if (!data.name || !data.phone || !data.password || !data.email) {
      setErrorOpen(true);
    }
    if (data.cpf) {
      if (data.cpf.length !== 11 || isNaN(data.cpf)) {
        setErrorCPF(true);
        return;
      }
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
        setscreen("signIn");
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
      <div
        class="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
        data-bs-bg="img/bg/9.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div class="section-title-area ltn__section-title-2">
                  <h6 class="section-subtitle ltn__secondary-color">
                    // Bem vindo a autepeças Bodnar
                  </h6>
                  <h1 class="section-title white-color">Cadastro</h1>
                </div>
                <div class="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="index.html">Inicio</a>
                    </li>
                    <li>Cadastro</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ltn__login-area pb-110">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title-area text-center">
                <h1 class="section-title">
                  Cadastre <br />
                  sua conta
                </h1>
                <p>E tenho acesso aos melhores produtos da região.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="account-login-inner">
                <form action="#" class="ltn__form-box contact-form-box">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                  />
                  <input type="text" name="lastname" placeholder="Last Name" />
                  <input type="text" name="email" placeholder="Email*" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password*"
                  />
                  <input
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirm Password*"
                  />

                  <div class="btn-wrapper">
                    <button
                      class="theme-btn-1 btn reverse-color btn-block"
                      type="submit"
                    >
                      CRIAR CONTA
                    </button>
                  </div>
                </form>
                <div class="by-agree text-center">
                  <div class="go-to-btn mt-50">
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
