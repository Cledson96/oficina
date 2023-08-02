import Topo from "./topo";
import "./checkout.css";
import Produtos from "./produtos";
import Cliente from "./cliente";
import Total from "./total";
import Endereco from "./endereco";
import { useState, useEffect } from "react";

export default function Checkout({ car, cliente, logged }) {
  const [compra, setCompra] = useState({});
  const [comprador, setComprador] = useState({});

  useEffect(() => {
    let verifica = localStorage.getItem("compra");
    try {
      verifica = verifica.length > 0 ? JSON.parse(verifica) : [];
    } catch (error) {
      verifica = [];
    }
    setCompra(verifica);
  }, [car]);

  return (
    <>
      <Topo />
      {logged === true ? (
        <>
          <div class="ltn__checkout-area mb-105">
            <div class="container">
              <div class="row">
                <Produtos car={car} />
                <Cliente cliente={cliente} setComprador={setComprador} />
                <Endereco compra={compra} />
                <Total compra={compra} comprador={comprador} />
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1 className="logar">
          Obrigatório estar logado! <a href="/login">Entrar</a>
        </h1>
      )}
    </>
  );
}
