import "./GetIn.css";
import eye_not from "./../img/eye_not.png";
import eye from "./../img/eye.png";
import { useEffect, useState } from "react";
import { AlertPassword, AlertErrorSignUp } from "../components/modal";

export default function SignUp({ setscreen, setview, view }) {
  const [data, setdata] = useState({});
  const [street, setstreet] = useState();
  const [number, setnumber] = useState();
  const [confirmPassword, setconfirmPassword] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  function sendBody() {
    if (data.password !== confirmPassword) {
      setIsOpen(true);
      return;
    }
    if (
      !data.name ||
      !data.address ||
      !data.cpf ||
      !data.password ||
      !data.email
    ) {
      setErrorOpen(true);
    }
    if (data.cpf.length !== 11) {
      alert("Obrigatório CPF com 11 digitos sem pontos ou traços");
    }
  }

  function handleForm({ value, name }) {
    let address;
    if (name === "street") {
      setstreet(value);
      address = value + "," + number;
      setdata({
        ...data,
        address,
      });
      return;
    }
    if (name === "number") {
      setnumber(value);
      address = street + "," + value;
      setdata({
        ...data,
        address,
      });
      return;
    }
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
        <div className="addres">
          <input
            name="street"
            className="street"
            placeholder="Logradouro"
            onChange={(e) =>
              handleForm({ name: e.target.name, value: e.target.value })
            }
          ></input>
          <input
            name="number"
            className="number"
            placeholder="Numero"
            onChange={(e) =>
              handleForm({ name: e.target.name, value: e.target.value })
            }
          ></input>
        </div>
        <input
          name="cpf"
          placeholder="CPF"
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
