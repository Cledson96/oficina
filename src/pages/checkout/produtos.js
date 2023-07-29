import { BiChevronRight } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../request/request";
import "./checkout.css";

export default function Produtos({ car }) {
  const [on, setOn] = useState(false);
  return (
    <>
      <div class="col-lg-12">
        <div class="ltn__checkout-inner">
          <div class="ltn__checkout-single-content ltn__coupon-code-wrap">
            <h5 class="title-2 checkout-show" onClick={() => setOn(!on)}>
              Produtos
              {on ? (
                <BiChevronDown fontSize={50} />
              ) : (
                <BiChevronRight fontSize={50} />
              )}
            </h5>

            {on ? (
              <>
                <div class="ltn__checkout-single-content-info">
                  <div className="shoping-cart-table table-responsive">
                    <table className="table ajuste-tabela-checkout">
                      <tbody>
                        {car.map((ref, index) => {
                          return (
                            <tr key={index}>
                              <td className="cart-product-image ajuste-imagem-checkout">
                                <a href="#">
                                  <img
                                    style={{ maxHeight: "80px" }}
                                    src={`${BASE_URL}/${ref.foto}`}
                                    alt="#"
                                  />
                                </a>
                              </td>
                              <td
                                className="cart-product-info"
                                style={{ width: "350px" }}
                              >
                                <h4>
                                  <a href="#">{ref.nome}</a>
                                </h4>
                              </td>
                              <td className="cart-product-price ajuste-preco-checkout">
                                R$
                                {ref.promocao > 0
                                  ? Number(ref.promocao)
                                      .toFixed(2)
                                      .replace(".", ",")
                                  : Number(ref.preco)
                                      .toFixed(2)
                                      .replace(".", ",")}
                              </td>
                              <td className="cart-product-quantity ajuste-quantidade ajuste-preco-checkout">
                                <div
                                  style={{
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "6px",
                                  }}
                                  className="cart-plus-minus  d-flex"
                                >
                                  <input
                                    type="text"
                                    value={ref.quantidade}
                                    name="qtybutton"
                                    className="cart-plus-minus-box"
                                    readOnly
                                  />
                                </div>
                              </td>
                              <td className="cart-product-subtotal ajuste-preco-checkout">
                                R${" "}
                                {ref.promocao > 0
                                  ? (
                                      Number(ref.promocao) *
                                      Number(ref.quantidade)
                                    )
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
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
