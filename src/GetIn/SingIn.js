import "./GetIn.css";
import eye_not from "./../img/eye_not.png";
import eye from "./../img/eye.png";

export default function SignIn({ setscreen, setview, view }) {
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
        <input placeholder="Email"></input>
        <div className="fixed">
          <input
            className="password"
            type={view ? "text" : "password"}
            placeholder="Senha"
          ></input>
          {view ? (
            <img onClick={() => setview(!view)} alt="eyes" src={eye}></img>
          ) : (
            <img onClick={() => setview(!view)} alt="eyes" src={eye_not}></img>
          )}
        </div>

        <h1 className="forgot_password"></h1>
      </div>
      <div className="send">Entrar</div>
    </div>
  );
}
