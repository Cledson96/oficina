import "./GetIn.css";
import eye_not from "./../img/eye_not.png";
import eye from "./../img/eye.png";
import { useEffect, useState } from "react";
import logo from "./../img/logo.png";
import SignIn from "./SingIn";
import SignUp from "./SingUp";

export default function GetIn() {
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
    <div className="GetIn">
      <div className="veu">
        {screen === "signIn" ? (
          <SignIn setscreen={setscreen} setview={setview} view={view}></SignIn>
        ) : (
          <SignUp setscreen={setscreen} setview={setview} view={view}></SignUp>
        )}
        {screen === "signIn" ? (
          <div className="signIn_logo">
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
