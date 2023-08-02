import { postPreferencia, BASE_URL } from "../../request/request";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import "./checkout.css";
import {  useState } from "react";
initMercadoPago(process.env.REACT_APP_MERCADO_KEY);

export default function Total({ compra, comprador }) {
  const [preferenceId, setPreferenceId] = useState(null);

  function preferencia() {
    let items = compra.produtos.map((referencia) => {
      return (
        {
          id: referencia.id,
          title: referencia.nome,
          currency_id: "BRL",
          picture_url: `${BASE_URL}/${referencia.foto}`,
          category_id: referencia.categoria.toString(),
          quantity: Number(referencia.quantidade),
          unit_price: Number(referencia.promocao) > 0 && Number(referencia.promocao) < Number(referencia.preco) ? Number(referencia.promocao) : Number(referencia.preco)
        }
      )
    })
    items.push(
      {
        id: compra.company.id || 0,
        title: compra.name,
        currency_id: "BRL",
        picture_url: compra.company.picture || "",
        category_id: "null",
        quantity: 1,
        unit_price: Number(compra.price)
      }
    )


    let envio = {
      items: items,
      payer: {
        name: comprador.nome || "",
        surname: "",
        email: comprador.email || "",

        address: {
          street_name: compra.endereco.logradouro ? compra.endereco.logradouro : "",
          street_number: compra.endereco.numero ? Number(compra.endereco.numero) : "",
          zip_code: compra.endereco.cep ? compra.endereco.cep : ""
        }
      },
      back_urls: {
        success: "http://localhost:3000/concluido",
        failure: "http://localhost:3000/concluido",
      },
      auto_return: "approved",
    };
    let cliente = { info: compra, cliente: comprador  }
    let dados = { envio, cliente }

    postPreferencia(dados)
      .then((response) => {
       
        setPreferenceId(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="col-lg-6 d-flex">
        <div className="shoping-cart-total mt-10">
          <h4 className="titulo-total-checkout">Total</h4>
          <table className="table">
            <tbody>
              {compra.produtos?.map((referencia, index) => {
                return (
                  <>
                    <tr key={index}>
                      <td>
                        {referencia.nome}{" "}
                        <strong>× {referencia.quantidade}</strong>
                      </td>
                      <td>
                        R${" "}
                        {referencia.promocao &&
                          Number(referencia.promocao) < Number(referencia.preco)
                          ? (
                            Number(referencia.promocao) *
                            Number(referencia.quantidade)
                          )
                            .toFixed(2)
                            .replace(".", ",")
                          : (
                            Number(referencia.preco) *
                            Number(referencia.quantidade)
                          )
                            .toFixed(2)
                            .replace(".", ",")}
                      </td>
                    </tr>
                  </>
                );
              })}
              {compra.price ? (
                <tr>
                  <td>Frete</td>
                  <td>
                    R$ {Number(compra.price).toFixed(2).replace(".", ",")}
                  </td>
                </tr>
              ) : (
                <></>
              )}
              {compra.price ? (
                <tr className="total-checkout-tr">
                  <td>Total</td>
                  <td className="total-checkout">
                    R${" "}
                    {(Number(compra.price) + Number(compra.valorProdutos))
                      .toFixed(2)
                      .replace(".", ",")}
                  </td>
                </tr>
              ) : (
                <></>
              )}
            </tbody>
          </table>
          {preferenceId !== null ? (
            <Wallet
              initialization={{
                preferenceId: preferenceId,
              }}

            />
          ) : (
            <button onClick={() => preferencia()} class="btn theme-btn-1 btn-effect-1 text-uppercase pagamento-botao">
              Continuar pagamento
            </button>
          )}

        </div>

      </div>
    </>
  );
}
