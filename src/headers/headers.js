import "./headers.css";
import logo from "./../img/logo.png";
import { useEffect, useState } from "react";

export default function Headers() {
  const [logged, setlogged] = useState(false);
  return (
    <div className="headers">
      <img alt="logo" src={logo} />
      <h1>
        Auto peças & <div className="break">serviços Bodnar</div>
      </h1>
      <div className="menu">
        <h2>HOME</h2>
        <h2>A EMPRESA</h2>
        <h2>ENDEREÇO</h2>
        <h2>SERVIÇOS</h2>
        <h2>PRODUTOS</h2>
        <h2>CONTATO</h2>
      </div>
      <div className="logged">
        {logged === false ? <button> Entrar </button> : <></>}
      </div>
    </div>
  );
}
