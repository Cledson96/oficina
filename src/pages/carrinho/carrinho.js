import "./carrinho.css";
import { useState } from "react";
import Topo from "./topo";
import Tabela from "./tabelaCarrinho";
import CalcularFrete from "./calculoFrete";
import ValorCompra from "./valorCompra";
import { useCarrinhoTotal  } from "../../components/configCarrinho";

export default function Carrinho({ add, setQtd, setAdd ,total,setTotal,car,setCar}) {
  const [frete, setFrete] = useState(0);
  const [status, setStatus] = useState(false);

  useCarrinhoTotal(setCar, add, setTotal, setQtd);

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
                <CalcularFrete
                  car={car}
                  setFrete={setFrete}
                  setStatus={setStatus}
                  add={add}
                  total={total}
                  frete={frete}
                />
                <ValorCompra total={total} frete={frete} status={status} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
