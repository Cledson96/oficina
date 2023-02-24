import "./home.css";
import logo from "./../img/logo.png";

import { useEffect, useState } from "react";

export default function Home() {
  const [offers, setoffers] = useState();
  const [index, setindex] = useState(0);
  const date = [
    {
      descricao: "Troca de óleo por 100,00 R$!!",
      imagem:
        "https://www.minutoseguros.com.br/blog/wp-content/uploads/2016/07/troca-de-oleo-2.jpg",
    },
    {
      descricao: "Revisão completo por 250,00 R$!!",
      imagem:
        "https://s34918.pcdn.co/wp-content/uploads/2022/08/unnamed-31.jpg",
    },
  ];
  useEffect(() => {
    let sendOffers = date.map((ref, index) => {
      return (
        <>
          <div className="box">
            <img alt="offer" src={ref.imagem}></img>
            <h3>{ref.descricao}</h3>
          </div>
        </>
      );
    });
    setoffers(sendOffers);
  }, []);

  setTimeout(() => {
    if (index === date.length - 1) {
      setindex(0);
    } else {
      setindex(index + 1);
    }
  }, 5000);

  return (
    <div className="section">
      <div className="promotion">
        <div className="promotion_div">
          <h1 className="promotion_text">Super Promoção!!!</h1>
        </div>
        <div className="offers">{offers ? offers[index] : "Carregando"}</div>
      </div>
    </div>
  );
}
