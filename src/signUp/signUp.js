import "./signUp.css";
import eye_not from "./../img/eye_not.png";
import eye from "./../img/eye.png";
import { useEffect, useState } from "react";
import logo from "./../img/logo.png";

export default function SignUp() {
  const exemplo = {
    name: "Cledson Santos Souza",
    address: "Rua Padre Gaston 331",
    cep: 81170160,
    password: "12345678",
    phone: 41997975542,
    phonecontact: "41997975541",
    cpf: "0400616903",
    email: "cledson1996@gmail.com",
  };
  const [view, setview] = useState(false);
  const [screen, setscreen] = useState("signIn");
  return (
    <div className="signup">
      <div className="veu">
        {screen === "signIn" ? (
          <div className="signup_info">
            <div className="header_box">
              <h1 onClick={() => setscreen("signIn")} className="selected">
                {" "}
                Login{" "}
              </h1>{" "}
              <h1 onClick={() => setscreen("signUp")} className="not_selected">
                {" "}
                Cadastro
              </h1>
            </div>
            <div className="form">
              <input placeholder="Email"></input>
              <div className="fixed">
                <input
                  className="password"
                  type={view ? "text" : "password"}
                  placeholder="Senha"
                ></input>
                {view ? (
                  <img
                    onClick={() => setview(!view)}
                    alt="eyes"
                    src={eye}
                  ></img>
                ) : (
                  <img
                    onClick={() => setview(!view)}
                    alt="eyes"
                    src={eye_not}
                  ></img>
                )}
              </div>

              <h1 className="forgot_password"></h1>
            </div>
            <div className="send">Entrar</div>
          </div>
        ) : (
          <div className="signup_on">
            <div className="header_box">
              <h1 onClick={() => setscreen("signIn")} className="not_selected">
                {" "}
                Login{" "}
              </h1>{" "}
              <h1 onClick={() => setscreen("signUp")} className="selected">
                {" "}
                Cadastro
              </h1>
            </div>
            <div className="form">
              <input placeholder="Nome completo"></input>
              <div className="addres">
                <input className="street" placeholder="Logradouro"></input>
                <input className="number" placeholder="Numero"></input>
              </div>

              <div className="fixed">
                <input
                  className="password"
                  type={view ? "text" : "password"}
                  placeholder="Senha"
                ></input>
                {view ? (
                  <img
                    onClick={() => setview(!view)}
                    alt="eyes"
                    src={eye}
                  ></img>
                ) : (
                  <img
                    onClick={() => setview(!view)}
                    alt="eyes"
                    src={eye_not}
                  ></img>
                )}
              </div>
            </div>
            <div className="send">Cadastrar</div>
          </div>
        )}
        {screen === "signIn" ? (
          <div className="signup_logo">
            <img alt="src" src={logo}></img>
            <h1>
              Auto peças & <div className="break">serviços Bodnar</div>
            </h1>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
