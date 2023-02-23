import "./headers.css";
import logo from "./../img/logo.png";

export default function Headers() {
  return (
    <div className="headers">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}
