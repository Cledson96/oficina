import "./home.css";

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
          <div key={index} className="box">
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
      <ul className="list_product">
        <li className="product">
          <img
            alt="product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9U-n9yE1Ne8kMtZBl1FfzgOC2Cb4HrMtCA&usqp=CAU"
          />
          <h1 className="description_product"> Óleo Mineral Petroras 1L</h1>
          <h1 className="price_product"> R$ 35,00</h1>
          <button className="purchase">Adicionar ao carrinho</button>
        </li>
        <li className="product">
          <img
            alt="product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9U-n9yE1Ne8kMtZBl1FfzgOC2Cb4HrMtCA&usqp=CAU"
          />
          <h1 className="description_product"> Óleo Mineral Petroras 1L</h1>
          <h1 className="price_product"> R$ 35,00</h1>
          <button className="purchase">Adicionar ao carrinho</button>
        </li>
        <li className="product">
          <img
            alt="product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9U-n9yE1Ne8kMtZBl1FfzgOC2Cb4HrMtCA&usqp=CAU"
          />
          <h1 className="description_product"> Óleo Mineral Petroras 1L</h1>
          <h1 className="price_product"> R$ 35,00</h1>
          <button className="purchase">Adicionar ao carrinho</button>
        </li>
        <li className="product">
          <img
            alt="product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9U-n9yE1Ne8kMtZBl1FfzgOC2Cb4HrMtCA&usqp=CAU"
          />
          <h1 className="description_product"> Óleo Mineral Petroras 1L</h1>
          <h1 className="price_product"> R$ 35,00</h1>
          <button className="purchase">Adicionar ao carrinho</button>
        </li>
        <li className="product">
          <img
            alt="product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9U-n9yE1Ne8kMtZBl1FfzgOC2Cb4HrMtCA&usqp=CAU"
          />
          <h1 className="description_product"> Óleo Mineral Petroras 1L</h1>
          <h1 className="price_product"> R$ 35,00</h1>
          <button className="purchase">Adicionar ao carrinho</button>
        </li>
        <li className="product">
          <img
            alt="product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9U-n9yE1Ne8kMtZBl1FfzgOC2Cb4HrMtCA&usqp=CAU"
          />
          <h1 className="description_product"> Óleo Mineral Petroras 1L</h1>
          <h1 className="price_product"> R$ 35,00</h1>
          <button className="purchase">Adicionar ao carrinho</button>
        </li>
        <li className="product">
          <img
            alt="product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9U-n9yE1Ne8kMtZBl1FfzgOC2Cb4HrMtCA&usqp=CAU"
          />
          <h1 className="description_product"> Óleo Mineral Petroras 1L</h1>
          <h1 className="price_product"> R$ 35,00</h1>
          <button className="purchase">Adicionar ao carrinho</button>
        </li>
        <li className="product">
          <img
            alt="product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9U-n9yE1Ne8kMtZBl1FfzgOC2Cb4HrMtCA&usqp=CAU"
          />
          <h1 className="description_product"> Óleo Mineral Petroras 1L</h1>
          <h1 className="price_product"> R$ 35,00</h1>
          <button className="purchase">Adicionar ao carrinho</button>
        </li>
        <li className="product">
          <img
            alt="product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9U-n9yE1Ne8kMtZBl1FfzgOC2Cb4HrMtCA&usqp=CAU"
          />
          <h1 className="description_product"> Óleo Mineral Petroras 1L</h1>
          <h1 className="price_product"> R$ 35,00</h1>
          <button className="purchase">Adicionar ao carrinho</button>
        </li>
        <li className="product">
          <img
            alt="product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9U-n9yE1Ne8kMtZBl1FfzgOC2Cb4HrMtCA&usqp=CAU"
          />
          <h1 className="description_product"> Óleo Mineral Petroras 1L</h1>
          <h1 className="price_product"> R$ 35,00</h1>
          <button className="purchase">Adicionar ao carrinho</button>
        </li>
        <li className="product">
          <img
            alt="product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9U-n9yE1Ne8kMtZBl1FfzgOC2Cb4HrMtCA&usqp=CAU"
          />
          <h1 className="description_product"> Óleo Mineral Petroras 1L</h1>
          <h1 className="price_product"> R$ 35,00</h1>
          <button className="purchase">Adicionar ao carrinho</button>
        </li>{" "}
        <li className="product">
          <img
            alt="product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9U-n9yE1Ne8kMtZBl1FfzgOC2Cb4HrMtCA&usqp=CAU"
          />
          <h1 className="description_product"> Óleo Mineral Petroras 1L</h1>
          <h1 className="price_product"> R$ 35,00</h1>
          <button className="purchase">Adicionar ao carrinho</button>
        </li>
        <li className="product">
          <img
            alt="product"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM9U-n9yE1Ne8kMtZBl1FfzgOC2Cb4HrMtCA&usqp=CAU"
          />
          <h1 className="description_product"> Óleo Mineral Petroras 1L</h1>
          <h1 className="price_product"> R$ 35,00</h1>
          <button className="purchase">Adicionar ao carrinho</button>
        </li>
      </ul>
    </div>
  );
}
