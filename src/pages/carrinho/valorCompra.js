import "./carrinho.css";
export default function ValorCompra({ frete, total, status }) {
  return (
    <>
      <div className="row">
        <div className="shoping-cart-total mt-20">
          <span style={{fontWeight:"bold",marginBottom:"10px",marginLeft:"7px"}}>Valor total</span>
          <table className="table">
            <tbody>
              <tr>
                <td>Valor produtos</td>
                <td>R$ {Number(total).toFixed(2).replace(".", ",")}</td>
              </tr>
              <tr>
                <td>Valor do frete</td>
                <td>R$ {Number(frete).toFixed(2).replace(".", ",")}</td>
              </tr>

              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong className="dinheiro">
                    R$ {(Number(frete) + total).toFixed(2).replace(".", ",")}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div style={{marginTop:"20px"}} className="btn-wrapper text-right">
            <button
              onClick={() => {
                if (status === false) {
                  alert("Obrigatório calcular o frete corretamente");
                }
              }}
              className="theme-btn-1 btn btn-effect-1"
            >
              Continuar com pagamento
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
