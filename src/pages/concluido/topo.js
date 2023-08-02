import "./concluido.css";
import capa from "../../img/fale-conosco.jpg";

export default function Topo() {
  return (
    <>
      <div
        className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image ajuste-tamanho-carrinho"
        data-bs-bg={capa}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div className="section-title-area ltn__section-title-2">
                
                  <h1 className="section-title white-color">Pedido</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul className="atalho"> 
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li>Pedido</li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
