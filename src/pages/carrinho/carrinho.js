import capa from "../../img/wallpaper.jpg";
import { useEffect, useState } from "react";
import { BASE_URL, valorFrete } from "../../request/request";

import axios from "axios";

export default function Carrinho({ add, setQtd, setAdd }) {
  const [car, setCar] = useState([]);
  const [total, setTotal] = useState(0);
  const [frete, setFrete] = useState(15);

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");

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
  function calcularFrete() {
    let tamanho = 0;
    let peso = 0;

    for (let i = 0; i < car.length; i++) {
      let soma =
        (car[i].largura *
          car[i].profundidade *
          car[i].altura *
          car[i].quantidade) **
        (1 / 3);
      tamanho = tamanho + soma;
      let somaPeso = car[i].peso * car[i].quantidade;
      peso = peso + somaPeso;
    }
    let body = {
      cep,
      altura: Math.ceil(tamanho),
      peso: Math.ceil(peso),
      profundidade: Math.ceil(tamanho),
      largura: Math.ceil(tamanho),
    };
    console.log(body);
    let response = valorFrete(body);
    response
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }

  function diminuirCarrinho(itemId) {
    const carrinho = localStorage.getItem("carrinho") || "[]";
    const carrinhoAtualizado = JSON.parse(carrinho);

    const itemExistente = carrinhoAtualizado.find(
      (item) => item.id === itemId.id
    );
    if (itemExistente && itemExistente.quantidade > 1) {
      itemExistente.quantidade = itemExistente.quantidade - 1;
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
    setAdd(!add); // Atualize o estado para refletir a alteração no componente
  }

  function aumentarCarrinho(itemId) {
    const carrinho = localStorage.getItem("carrinho") || "[]";
    const carrinhoAtualizado = JSON.parse(carrinho);

    const itemExistente = carrinhoAtualizado.find(
      (item) => item.id === itemId.id
    );
    if (itemExistente && itemExistente.quantidade < itemExistente.qtd) {
      itemExistente.quantidade = itemExistente.quantidade + 1;
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
    setAdd(!add); // Atualize o estado para refletir a alteração no componente
  }

  function removerItemDoCarrinho(itemId) {
    const carrinho = localStorage.getItem("carrinho") || "[]";
    const carrinhoAtualizado = JSON.parse(carrinho);

    const carrinhoFiltrado = carrinhoAtualizado.filter(
      (item) => item.id !== itemId
    );

    localStorage.setItem("carrinho", JSON.stringify(carrinhoFiltrado));
    setAdd(!add); // Atualize o estado para refletir a remoção do item no componente
  }

  async function handleCepChange(event) {
    let value = event.target.value;

    value = value.replace(/\D/g, "");

    value = value.replace(/(\d{5})(\d{3})/, "$1-$2");

    setCep(value);

    if (value.length === 9) {
      try {
        const response = await axios
          .get(`https://viacep.com.br/ws/${value}/json/`)
          .then((response) => {
            if (response.data.erro) {
              setLogradouro("");
              setCidade("");
              setEstado("");
              setBairro("");
            } else {
              setLogradouro(response.data.logradouro);
              setCidade(response.data.localidade);
              setEstado(response.data.uf);
              setBairro(response.data.bairro);
            }
          })
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    } else {
      <></>;
    }
  }
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
      <h1
        style={{
          textAlign: "center",
          marginBottom: "80px",
          fontSize: "35px",
          fontWeight: "600",
          color: "#ff0000",
        }}
      >
        Carrinho de compras
      </h1>
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
                            <td
                              onClick={() => removerItemDoCarrinho(ref.id)}
                              class="cart-product-remove"
                            >
                              x
                            </td>
                            <td
                              class="cart-product-image"
                              style={{ width: "150px" }}
                            >
                              <a href="product-details.html">
                                <img
                                  style={{ maxHeight: "80px" }}
                                  src={`${BASE_URL}/${ref.foto}`}
                                  alt="#"
                                />
                              </a>
                            </td>
                            <td
                              class="cart-product-info"
                              style={{ width: "350px" }}
                            >
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
                              <div
                                style={{
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  padding: "6px",
                                }}
                                class="cart-plus-minus  d-flex"
                              >
                                <i
                                  onClick={() => diminuirCarrinho(ref)}
                                  style={{ color: "red" }}
                                  className="fa fa-minus"
                                ></i>
                                <input
                                  type="text"
                                  value={ref.quantidade}
                                  name="qtybutton"
                                  class="cart-plus-minus-box"
                                />
                                <i
                                  onClick={() => aumentarCarrinho(ref)}
                                  style={{ color: "red" }}
                                  className="fa fa-plus"
                                ></i>
                              </div>
                            </td>
                            <td class="cart-product-subtotal">
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
                <div className="row">
                  <div>
                    <h1
                      style={{
                        fontSize: "25px",
                        fontWeight: "700",
                        marginBottom: "30px",
                      }}
                    >
                      Endereço de entrega:
                    </h1>
                    <div className="col-md-10">
                      <div className="shop-shipping">
                        <input
                          style={{ textAlign: "center", fontSize: "30px" }}
                          className="input-form"
                          type="text"
                          placeholder="CEP"
                          id="cep"
                          name="cep"
                          maxLength="9"
                          value={cep}
                          onChange={handleCepChange}
                        />
                        <div style={{ display: "flex" }}>
                          <input
                            className="input-form"
                            type="text"
                            placeholder="LOGRADOURO"
                            value={logradouro}
                            style={{ marginRight: "15px" }}
                          />

                          <input
                            style={{ width: "20%" }}
                            className="input-form"
                            type="text"
                            placeholder="NUMERO"
                            onChange={(e) => setNumero(e.target.value)}
                            value={numero}
                          />
                        </div>

                        <div style={{ display: "flex" }}>
                          <input
                            className="input-form"
                            type="text"
                            placeholder="BAIRRO"
                            value={bairro}
                            style={{ marginRight: "15px" }}
                          />
                          <input
                            style={{ width: "30%" }}
                            className="input-form"
                            type="text"
                            placeholder="COMPLEMENTO"
                            onChange={(e) => setComplemento(e.target.value)}
                            value={complemento}
                          />
                        </div>
                        <div style={{ display: "flex" }}>
                          <input
                            style={{ marginRight: "15px" }}
                            className="input-form"
                            type="text"
                            placeholder="CIDADE"
                            value={cidade}
                          />

                          <input
                            style={{ width: "30%" }}
                            className="input-form"
                            type="text"
                            placeholder="ESTADO"
                            value={estado}
                          />
                        </div>

                        <div
                          onClick={() => calcularFrete()}
                          className="btn btn-success ajuste-botao"
                        >
                          Calcular frete
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="shoping-cart-total mt-50">
                    <h4>Valor total</h4>
                    <table class="table">
                      <tbody>
                        <tr>
                          <td>Valor produtos</td>
                          <td>
                            R$ {(frete + total).toFixed(2).replace(".", ",")}
                          </td>
                        </tr>
                        <tr>
                          <td>Valor do frete</td>
                          <td>R$ {frete.toFixed(2).replace(".", ",")}</td>
                        </tr>

                        <tr>
                          <td>
                            <strong>Total</strong>
                          </td>
                          <td>
                            <strong>
                              R$ {total.toFixed(2).replace(".", ",")}
                            </strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="btn-wrapper text-right">
                      <a
                        href="checkout.html"
                        class="theme-btn-1 btn btn-effect-1"
                      >
                        Continuar com pagamento
                      </a>
                    </div>
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
