import "./headers.css";
import logo from "./../img/logo.png";

export default function Headers() {
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
    </div>
  );
}
