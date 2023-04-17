import "./home.css";

import { useEffect, useState } from "react";
import Cars from "../components/cars";
import SlideShow from "../components/slideSHow";
import BoxService from "../components/boxService";

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
          <div key={index} className="box">
            <img alt="offer" src={ref.imagem}></img>
            <h3>{ref.descricao}</h3>
          </div>
        </>
      );
    });
    setoffers(sendOffers);
  }, []);

  return (
    <>
      <Cars></Cars>
      <SlideShow></SlideShow>
      <BoxService></BoxService>
    </>
  );
}
