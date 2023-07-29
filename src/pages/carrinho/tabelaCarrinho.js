import { BASE_URL } from "../../request/request";
import {
  diminuirCarrinho,
  aumentarCarrinho,
  removerItemDoCarrinho,
} from "../../components/configCarrinho";
import "./carrinho.css";

export default function Tabela({ car, add, setAdd }) {
  return (
    <>
      <div className="shoping-cart-table table-responsive">
        <table className="table">
          <tbody>
            {car.map((ref, index) => {
              return (
                <tr key={index}>
                  <td
                    onClick={() => removerItemDoCarrinho(ref.id, add, setAdd)}
                    className="cart-product-remove"
                  >
                    x
                  </td>
                  <td className="cart-product-image" style={{ width: "150px" }}>
                    <a href="product-details.html">
                      <img
                        style={{ maxHeight: "80px" }}
                        src={`${BASE_URL}/${ref.foto}`}
                        alt="#"
                      />
                    </a>
                  </td>
                  <td className="cart-product-info" style={{ width: "350px" }}>
                    <h4>
                      <a href="product-details.html">{ref.nome}</a>
                    </h4>
                  </td>
                  <td className="cart-product-price">
                    R$
                    {ref.promocao > 0
                      ? Number(ref.promocao).toFixed(2).replace(".", ",")
                      : Number(ref.preco).toFixed(2).replace(".", ",")}
                  </td>
                  <td className="cart-product-quantity">
                    <div
                      style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "6px",
                      }}
                      className="cart-plus-minus  d-flex"
                    >
                      <i
                        onClick={() => diminuirCarrinho(ref, add, setAdd)}
                        style={{ color: "red" }}
                        className="fa fa-minus"
                      ></i>
                      <input
                        type="text"
                        value={ref.quantidade}
                        name="qtybutton"
                        className="cart-plus-minus-box"
                        readOnly
                      />
                      <i
                        onClick={() => aumentarCarrinho(ref, add, setAdd)}
                        style={{ color: "red" }}
                        className="fa fa-plus"
                      ></i>
                    </div>
                  </td>
                  <td className="cart-product-subtotal">
                    R${" "}
                    {ref.promocao > 0
                      ? (Number(ref.promocao) * Number(ref.quantidade))
                          .toFixed(2)
                          .replace(".", ",")
                      : (Number(ref.preco) * Number(ref.quantidade))
                          .toFixed(2)
                          .replace(".", ",")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
