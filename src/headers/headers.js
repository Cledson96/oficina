import "./headers.css";
import logo from "./../img/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checker } from "../request/request";
import user from "./../img/user.png";
import cars from "./../img/cars.png";

export default function Headers({ setlogged, logged }) {
  const navigate = useNavigate();
  const [name, setname] = useState();

  useEffect(() => {
    console.log("entrei");
    let token = localStorage.getItem("token");
    console.log(token);
    let verification = checker(token);
    verification.then((res) => {
      setname(res.data);
      setlogged(true);
    });
    verification.catch(() =>
      console.log("Tivemos um problema para obter os dados!!")
    );
  }, [logged]);
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
            Entrar
          </button>
        ) : (
          <>
            <img className="user" alt="user" src={user}></img>
            <h3 className="nameUser"> {name.split(" ")[0]}</h3>
            <div className="cars">
              <img alt="cars" src={cars}></img>
              <div className="counter">
                <h3>0</h3>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
