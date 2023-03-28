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
    <div className="signup_on">
      {isOpen === true ? (
        <AlertPassword setIsOpen={setIsOpen}> </AlertPassword>
      ) : (
        <></>
      )}
      {errorOpen === true ? (
        <AlertErrorSignUp setIsOpen={setErrorOpen}> </AlertErrorSignUp>
      ) : (
        <></>
      )}
      {errorCPF === true ? (
        <AlertErrorCPF setIsOpen={setErrorCPF}> </AlertErrorCPF>
      ) : (
        <></>
      )}
      {signUp_OK === true ? (
        <SignUpOK setIsOpen={setsignUp_OK} setscreen={setscreen}></SignUpOK>
      ) : (
        <></>
      )}
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
        <input
          name="name"
          placeholder="Nome completo"
          onChange={(e) =>
            handleForm({ name: e.target.name, value: e.target.value })
          }
        ></input>
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={(e) =>
            handleForm({ name: e.target.name, value: e.target.value })
          }
        ></input>
        <div className="telephone">
          <input
            name="phone"
            className="phoneOne"
            placeholder="Telefone principal"
            onChange={(e) =>
              handleForm({ name: e.target.name, value: e.target.value })
            }
          ></input>
          <input
            name="phonecontact"
            className="phoneOne"
            placeholder="Telefone de contato (opcional)"
            onChange={(e) =>
              handleForm({ name: e.target.name, value: e.target.value })
            }
          ></input>
        </div>
        <input
          name="cpf"
          placeholder="CPF (opcional)"
          onChange={(e) =>
            handleForm({ name: e.target.name, value: e.target.value })
          }
        ></input>
        <div className="fixed">
          <input
            name="password"
            className="password"
            type={view ? "text" : "password"}
            placeholder="Senha"
            onChange={(e) =>
              handleForm({ name: e.target.name, value: e.target.value })
            }
          ></input>

          {view ? (
            <img onClick={() => setview(!view)} alt="eyes" src={eye}></img>
          ) : (
            <img onClick={() => setview(!view)} alt="eyes" src={eye_not}></img>
          )}
        </div>
        <div className="fixed">
          <input
            onChange={(e) => setconfirmPassword(e.target.value)}
            className="password"
            type={view ? "text" : "password"}
            placeholder="Confirmar senha"
          ></input>

          {view ? (
            <img onClick={() => setview(!view)} alt="eyes" src={eye}></img>
          ) : (
            <img onClick={() => setview(!view)} alt="eyes" src={eye_not}></img>
          )}
        </div>
      </div>
      <div onClick={() => sendBody()} className="send">
        Cadastrar
      </div>
    </div>
  );
}
