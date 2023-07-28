import "./carrinho.css";
import { useEffect, useState } from "react";
import Topo from "./topo";
import Tabela from "./tabelaCarrinho";
import CalcularFrete from "./calculoFrete";
import ValorCompra from "./valorCompra";

export default function Carrinho({ add, setQtd, setAdd }) {
  const [car, setCar] = useState([]);
  const [total, setTotal] = useState(0);
  const [frete, setFrete] = useState(0);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    const carrinho = localStorage.getItem("carrinho");
    const atualizado = JSON.parse(carrinho);
    setCar(atualizado);
    let soma = 0;
    for (let i = 0; i < atualizado.length; i++) {
      if (atualizado[i].promocao > 0) {
        soma = soma + Number(atualizado[i].promocao) * atualizado[i].quantidade;
      } else {
        soma = soma + Number(atualizado[i].preco) * atualizado[i].quantidade;
      }
      setTotal(soma);
      setQtd(atualizado.length);
    }
  }, [add]);

  return (
    <>
      <Topo />
      <h1 className="titulo_carrinho">Carrinho de compras</h1>
      <div className="liton__shoping-cart-area mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping-cart-inner">
                <Tabela car={car} add={add} setAdd={setAdd} />
                <CalcularFrete car={car} setFrete={setFrete} setStatus={setStatus} add={add}/>
                <ValorCompra total={total} frete={frete} status={status} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
