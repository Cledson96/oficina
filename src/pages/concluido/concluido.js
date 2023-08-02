import Topo from "./topo";
import "./concluido.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { venda } from "../../request/request";

export default function Concluido({ car, cliente, logged }) {
  const [informacao, setInformacao] = useState(null);
  const [on, setOn] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const payment_id = searchParams.get("payment_id");

  useEffect(() => {

    const dados = venda(payment_id);
    dados.then((response) => { setInformacao(response.data[0]); })
    dados.catch((err) => { console.log(err) })
    localStorage.removeItem("carrinho");
   
  }, []);

  const handleGeneratePDF = async () => {
    try {
      const response = await fetch('http://localhost:55505/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/pdf',
        },
      });

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'invoice.pdf';
      a.click();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <>
      <Topo />
      {logged === true ? (
        <>
          <div class="ltn__checkout-area mb-105">

            <div class="row concluido">
              <h2>Obrigado pela sua compra!</h2>

              <p>Sua fatura foi mandada pro email: <span style={{fontWeight:"bold"}}>{informacao?.cliente.email || ""}</span></p>
              <p>Informações da compra:</p>
              <div className="info_compras">
                <button onClick={()=> {handleGeneratePDF()}}>Fatura</button>
                <h1> <span>Endereço de entrega:</span> {informacao?.endereco.logradouro}
                  {informacao?.endereco.numero.length > 1 ? `,${informacao?.endereco.numero}` : <></>}
                  {informacao?.endereco.complemento.length > 1 ? `,${informacao?.endereco.complemento}` : <></>} - CEP:{" "}
                  {informacao?.endereco.cep} - {informacao?.endereco.bairro} - {informacao?.endereco.cidade} - {informacao?.endereco.estado}.</h1>
                <h1> <span>Forma de pagamento:</span> {informacao?.tipo_pagamento === "credit_card" ? (`cartão de crédito - ${informacao?.parcelas} x R$ ${((Number(informacao?.valor_total) + Number(informacao?.juros)) / Number(informacao?.parcelas)).toFixed(2).replace('.', ',')}`) : "pix"}</h1>
                <h1> <span>Valor produtos:</span> R$ {Number(informacao?.valor_produto).toFixed(2).replace('.', ',')}</h1>
                <h1> <span>Valor frete:</span> R$ {Number(informacao?.valor_frete).toFixed(2).replace('.', ',')}</h1>
                {Number(informacao?.juros) > 0 ? <h1> <span>Juros:</span> R$ {Number(informacao?.juros).toFixed(2).replace('.', ',')}</h1> : <></>}
                <h1><span>Produtos comprados:</span></h1>
                <table className="table ajuste-table">
                  <tbody>
                    {informacao?.produtos_vendidos.map((referencia, index) => {
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

                 

                  

                  </tbody>
                </table>
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
