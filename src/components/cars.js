import { BASE_URL } from "../request/request";
import { removerItemDoCarrinho, useCarrinhoTotal } from "./configCarrinho";

export default function Cars({
  add,
  setQtd,
  setAdd,
  total,
  setTotal,
  car,
  setCar,
}) {
  useCarrinhoTotal(setCar, add, setTotal, setQtd);

  return (
    <>
      <div
        id="ltn__utilize-cart-menu"
        className="ltn__utilize ltn__utilize-cart-menu"
      >
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
          <div className="ltn__utilize-menu-head">
            <span className="ltn__utilize-menu-title">Carrinho</span>
            <button className="ltn__utilize-close">×</button>
          </div>
          <div className="mini-cart-product-area ltn__scrollbar">
            {car ? (
              car.map((ref, index) => {
                return (
                  <div key={index} className="mini-cart-item clearfix">
                    <div className="mini-cart-img">
                      <a href={`/produto/${ref.id}`}>
                        <img
                          style={{ maxHeight: "80px" }}
                          src={`${BASE_URL}/${ref.foto}`}
                          alt="Image"
                        />
                      </a>
                      <span
                        onClick={() =>
                          removerItemDoCarrinho(ref.id, add, setAdd)
                        }
                        className="mini-cart-item-delete"
                      >
                        <i className="icon-cancel"></i>
                      </span>
                    </div>
                    <div className="mini-cart-info">
                      <h6>
                        <a href={`/produto/${ref.id}`}>{ref.nome}</a>
                      </h6>
                      <span className="mini-cart-quantity">
                        {ref.quantidade} x R${" "}
                        {ref.promocao > 0
                          ? Number(ref.promocao).toFixed(2).replace(".", ",")
                          : Number(ref.preco).toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
          <div className="mini-cart-footer">
            <div className="mini-cart-sub-total">
              <h5>
                Total: <span>R${total.toFixed(2).replace(".", ",")}</span>
              </h5>
            </div>
            <div className="btn-wrapper">
              <a href="/carrinho" className="theme-btn-1 btn btn-effect-1">
                Ver carrinho
              </a>
              <a href="/checkout" className="theme-btn-2 btn btn-effect-2">
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
