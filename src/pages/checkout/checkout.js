import Topo from "./topo";
import "./checkout.css";
import Produtos from "./produtos";
import Cliente from "./cliente";
import Pagamento from "./pagamento";
import Total from "./total";

export default function Checkout({ car, cliente, logged }) {
  return (
    <>
      <Topo />
      {logged === true ? (
        <>
          <div class="ltn__checkout-area mb-105">
            <div class="container">
              <div class="row">
                <Produtos car={car} />
                <Cliente cliente={cliente} />
                <Pagamento />
                <Total />
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
