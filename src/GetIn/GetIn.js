import "./GetIn.css";

import { useState } from "react";
import logo from "./../img/logo.png";
import SignIn from "./SingIn";
import SignUp from "./SingUp";

export default function GetIn({ setlogged }) {
  const [view, setview] = useState(false);
  const [screen, setscreen] = useState("signIn");
  return (
    <div className="GetIn">
      <div className="veu">
        {screen === "signIn" ? (
          <SignIn
            setscreen={setscreen}
            setview={setview}
            view={view}
            setlogged={setlogged}
          ></SignIn>
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
