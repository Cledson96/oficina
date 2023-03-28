import "./headers.css";
import logo from "./../img/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Headers() {
  const [logged, setlogged] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="headers">
      <img alt="logo" src={logo} />
      <h1>
        Auto peças & <div className="break">serviços Bodnar</div>
      </h1>
      <div className="menu">
        <h2
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </h2>
        <h2>A EMPRESA</h2>
        <h2>ENDEREÇO</h2>
        <h2>SERVIÇOS</h2>
        <h2>PRODUTOS</h2>
        <h2>CONTATO</h2>
      </div>
      <div className="logged">
        {logged === false ? (
          <button
            onClick={() => {
              navigate("/Get_in");
            }}
          >
            {" "}
            Entrar{" "}
          </button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
