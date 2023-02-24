import "./home.css";
import oleo from "./../img/oleo.jpg";

import { useEffect, useState } from "react";

export default function Home() {
  const [offers, setoffers] = useState();
  const [index, setindex] = useState(0);
  const date = [
    {
      produto: "óleo mineral Gulf 1L",
      descricao: "Aproveite esta oferta!!",
      imagem:
        "https://cdn.awsli.com.br/1000x1000/583/583938/produto/140417929/2e3e5c2f8a.jpg",
      preçoAtual: "20,00",
      preçoAntigo: "25,00",
    },
    {
      produto: "Óleo mineral Mutul 1L",
      descricao: "Super desconto!!",
      imagem:
        "https://cdn.awsli.com.br/1000x1000/583/583938/produto/140417929/2e3e5c2f8a.jpg",
      preçoAtual: "23,00",
      preçoAntigo: "27,00",
    },
  ];
  useEffect(() => {
    let sendOffers = date.map((ref, index) => {
      return (
        <>
          <img alt="offer" src={ref.imagem}></img>
          <div className="box">
            <h3>{ref.descricao}</h3>
            <br></br>
            <span>
              <h3>{ref.produto}</h3>
              <h3>
                {ref.preçoAntigo} por {ref.preçoAtual}
              </h3>
            </span>
          </div>
        </>
      );
    });
    setoffers(sendOffers);
  }, []);

  setInterval(() => {}, 3000);
  return (
    <div className="section">
      <div className="promotion">
        <div className="promotion_div">
          <h1 className="promotion_text">Super Promoção!!!</h1>
        </div>
        <div className="offers">{offers ? offers[1] : "Carregando"}</div>
      </div>
    </div>
  );
}
