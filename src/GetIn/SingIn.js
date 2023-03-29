import "./GetIn.css";
import eye_not from "./../img/eye_not.png";
import eye from "./../img/eye.png";
import { useState } from "react";
import { postSignIn } from "../request/request";
import { useNavigate } from "react-router-dom";

export default function SignIn({ setscreen, setview, view, setlogged }) {
  const navigate = useNavigate();

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
      console.log(data);
      localStorage.setItem("token", data.data.token);
      localStorage.setItem("user", data.data.name);
      setlogged(true);
      navigate("/");
    });
    post.catch((error) => {
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

  return (
    <div className="signin_info">
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
        <input
          name="email"
          placeholder="Email"
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
      </div>
      <div onClick={() => sendBody()} className="send">
        Entrar
      </div>
    </div>
  );
}
