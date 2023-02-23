import "./home.css";
import oleo from "./../img/oleo.jpg";

export default function Home() {
  return (
    <div className="section">
      <div className="promotion">
        <div className="promotion_div">
          <h1 className="promotion_text">Super Promoção!!!</h1>
        </div>
        <div className="offers">
          <img alt="offer" src={oleo}></img>
          <h3>Troca de óleo por R$ 100,00</h3>
        </div>
      </div>
    </div>
  );
}
