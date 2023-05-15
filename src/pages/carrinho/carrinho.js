import capa from "../../img/wallpaper.jpg";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../request/request";
export default function Carrinho({ add, setQtd }) {
  const [car, setCar] = useState([]);
  const [total, setTotal] = useState(0);
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
  console.log(car);
  return (
    <>
      <div
        class="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
        data-bs-bg={capa}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div class="section-title-area ltn__section-title-2">
                  <h1 class="section-title white-color">Carrinho</h1>
                </div>
                <div class="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li>Carrinho</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="liton__shoping-cart-area mb-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="shoping-cart-inner">
                <div class="shoping-cart-table table-responsive">
                  <table class="table">
                    <tbody>
                      {car.map((ref) => {
                        return (
                          <tr>
                            <td class="cart-product-remove">x</td>
                            <td class="cart-product-image">
                              <a href="product-details.html">
                                <img
                                  style={{ maxHeight: "80px" }}
                                  src={`${BASE_URL}/${ref.foto}`}
                                  alt="#"
                                />
                              </a>
                            </td>
                            <td class="cart-product-info">
                              <h4>
                                <a href="product-details.html">{ref.nome}</a>
                              </h4>
                            </td>
                            <td class="cart-product-price">
                              R$
                              {ref.promocao > 0
                                ? Number(ref.promocao)
                                    .toFixed(2)
                                    .replace(".", ",")
                                : Number(ref.preco)
                                    .toFixed(2)
                                    .replace(".", ",")}
                            </td>
                            <td class="cart-product-quantity">
                              <div class="cart-plus-minus">
                                <input
                                  type="text"
                                  value="02"
                                  name="qtybutton"
                                  class="cart-plus-minus-box"
                                />
                              </div>
                            </td>
                            <td class="cart-product-subtotal">$298.00</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div class="shoping-cart-total mt-50">
                  <h4>Cart Totals</h4>
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Cart Subtotal</td>
                        <td>$618.00</td>
                      </tr>
                      <tr>
                        <td>Shipping and Handing</td>
                        <td>$15.00</td>
                      </tr>
                      <tr>
                        <td>Vat</td>
                        <td>$00.00</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Order Total</strong>
                        </td>
                        <td>
                          <strong>$633.00</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="btn-wrapper text-right">
                    <a
                      href="checkout.html"
                      class="theme-btn-1 btn btn-effect-1"
                    >
                      Proceed to checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
