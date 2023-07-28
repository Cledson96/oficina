import { BASE_URL } from "../../request/request";

export default function Tabela({ car,add,setAdd }) {
    
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
    setAdd(!add);
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

  return (
    <>
      <div className="shoping-cart-table table-responsive">
        <table className="table">
          <tbody>
            {car.map((ref, index) => {
              return (
                <tr key={index}>
                  <td
                    onClick={() => removerItemDoCarrinho(ref.id)}
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
                        onClick={() => diminuirCarrinho(ref)}
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
                        onClick={() => aumentarCarrinho(ref)}
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
