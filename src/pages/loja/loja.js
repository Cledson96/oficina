import { useEffect, useState } from "react";
import capa from "../../img/wallpaper.jpg";
import { get_produtos, get_categorias, BASE_URL } from "../../request/request";

export default function Loja({ setAdd, add }) {
  const [page, setpage] = useState(1);
  const [qtdPages, setqtdPages] = useState(1);
  const [totalItens, setTotalItens] = useState(1);
  const [data, setData] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const product = get_produtos();
    product.then((res) => {
      console.log(res.data);
      setData(res.data);
      setTotalItens(res.data.length);
    });
    product.catch(() =>
      console.log("Tivemos um problema para obter os dados!!")
    );
  }, []);

  useEffect(() => {
    const categoria = get_categorias();
    categoria.then((res) => {
      setCategorias(res.data);
    });
    categoria.catch(() =>
      console.log("Tivemos um problema para obter os dados!!")
    );
  }, []);

  function carrinho(item) {
    const carrinho = localStorage.getItem("carrinho") || "[]";
    const carrinhoAtualizado = JSON.parse(carrinho);
    const itemExistente = carrinhoAtualizado.find((i) => i.id === item.id);
    if (itemExistente) {
      if (itemExistente.quantidade < itemExistente.qtd) {
        itemExistente.quantidade += 1;
      } else {
        return;
      }
    } else {
      item.quantidade = 1;
      carrinhoAtualizado.push(item);
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
    setAdd(!add);
  }

  function handleSort(option) {
    switch (option) {
      case "popularidade":
        // Ordenar por popularidade
        break;
      case "novos_itens":
        // Ordenar por novos itens
        break;
      case "preco_crescente":
        setData(
          [...data].sort((a, b) => parseFloat(a.preco) - parseFloat(b.preco))
        );
        break;
      case "preco_decrescente":
        setData(
          [...data].sort((a, b) => parseFloat(b.preco) - parseFloat(a.preco))
        );
        break;
      default:
        // Ordenar por relevancia
        break;
    }
  }

  return (
    <>
      <div
        className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image plr--9"
        data-bs-bg={capa}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div className="section-title-area ltn__section-title-2">
                  <h6 className="section-subtitle ltn__secondary-color">
                    // A sua melhor compra
                  </h6>
                  <h1 className="section-title white-color">Loja</h1>
                </div>
                <div className="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="index.html">Inicio</a>
                    </li>
                    <li>Loja</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ltn__product-area ltn__product-gutter mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-lg-2">
              <div className="ltn__shop-options">
                <ul>
                  <li>
                    <div className="ltn__grid-list-tab-menu ">
                      <div className="nav">
                        <a
                          className="active show"
                          data-bs-toggle="tab"
                          href="#liton_product_grid"
                        >
                          <i className="fas fa-th-large"></i>
                        </a>
                        <a data-bs-toggle="tab" href="#liton_product_list">
                          <i className="fas fa-list"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="showing-product-number text-right">
                      <span>
                        mostrando {page}–{qtdPages} de {totalItens} resultados
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="short-by text-center">
                      <select>
                        <option value="relevancia">Relevancia</option>
                        <option
                          value="popularidade"
                          onClick={() => handleSort("popularidade")}
                        >
                          Popularidade
                        </option>
                        <option
                          value="novos_itens"
                          onClick={() => handleSort("novos_itens")}
                        >
                          Novos itens
                        </option>
                        <option
                          value="preco_crescente"
                          onClick={() => handleSort("preco_crescente")}
                        >
                          Preço: menos pro maior
                        </option>
                        <option
                          value="preco_decrescente"
                          onClick={() => handleSort("preco_decrescente")}
                        >
                          Preço: maior pro menor
                        </option>
                      </select>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active show" id="liton_product_grid">
                  <div className="ltn__product-tab-content-inner ltn__product-grid-view">
                    <div className="row">
                      {data ? (
                        data.map((ref) => {
                          return (
                            <div className="col-sm-6 col-6">
                              <div className="ltn__product-item ltn__product-item-3 text-center">
                                <div className="product-img">
                                  <a href="product-details.html">
                                    <img
                                      style={{
                                        maxWidth: "326px",
                                        height: "272px",
                                      }}
                                      src={`${BASE_URL}/${ref.foto}`}
                                      alt="#"
                                    />
                                  </a>
                                  <div className="product-badge"></div>
                                  <div className="product-hover-action">
                                    <ul>
                                      <li>
                                        <a
                                          href={`/produto/${ref.id}`}
                                          target="_blank"
                                          title="Observar"
                                        >
                                          <i className="far fa-eye"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          onClick={() => carrinho(ref)}
                                          title="Adicionar ao carrinho"
                                        >
                                          <i className="fas fa-shopping-cart"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="product-info">
                                  <h2 className="product-title">
                                    <a href="product-details.html">
                                      {ref.nome}
                                    </a>
                                  </h2>
                                  {ref.promocao > 0 ? (
                                    <div className="product-price">
                                      <span>
                                        R$
                                        {Number(ref.promocao)
                                          .toFixed(2)
                                          .replace(".", ",")}
                                      </span>
                                      <del>
                                        R$
                                        {Number(ref.preco)
                                          .toFixed(2)
                                          .replace(".", ",")}
                                      </del>
                                    </div>
                                  ) : (
                                    <div className="product-price">
                                      <span>
                                        R$
                                        {Number(ref.preco)
                                          .toFixed(2)
                                          .replace(".", ",")}
                                      </span>
                                    </div>
                                  )}

                                  <div className="product-info-brief">
                                    <ul>
                                      <li>Marca: {ref.marca}</li>
                                      <li>Quantidade em estoque: {ref.qtd}</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_product_list">
                  <div className="ltn__product-tab-content-inner ltn__product-list-view">
                    <div className="row">
                      <div className="col-lg-12">
                        {data ? (
                          data.map((ref) => {
                            return (
                              <div className="ltn__product-item ltn__product-item-3">
                                <div className="product-img">
                                  <a href="product-details.html">
                                    <img src={ref.foto} alt="#" />
                                  </a>
                                </div>
                                <div className="product-info">
                                  <h2 className="product-title">
                                    <a href="product-details.html">
                                      {ref.nome}
                                    </a>
                                  </h2>
                                  {ref.promocao > 0 ? (
                                    <div className="product-price">
                                      <span>
                                        R$
                                        {Number(ref.promocao)
                                          .toFixed(2)
                                          .replace(".", ",")}
                                      </span>
                                      <del>
                                        R${" "}
                                        {Number(ref.preco)
                                          .toFixed(2)
                                          .replace(".", ",")}
                                      </del>
                                    </div>
                                  ) : (
                                    <div className="product-price">
                                      <span>
                                        R${" "}
                                        {Number(ref.preco)
                                          .toFixed(2)
                                          .replace(".", ",")}
                                      </span>
                                    </div>
                                  )}

                                  <div className="product-info-brief">
                                    <ul>
                                      <li>Marca: {ref.marca}</li>
                                      <li>Quantidade em estoque: {ref.qtd}</li>
                                    </ul>
                                  </div>
                                  <div className="product-brief">
                                    <p>{ref.descricao}</p>
                                  </div>
                                  <div className="product-hover-action">
                                    <ul>
                                      <li>
                                        <a
                                          href="#"
                                          title="Ver produto"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick_view_modal"
                                        >
                                          <i className="far fa-eye"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          title="Adicionar ao carrinho"
                                          data-bs-toggle="modal"
                                          data-bs-target="#add_to_cart_modal"
                                        >
                                          <i className="fas fa-shopping-cart"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
                <div className="widget ltn__search-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">
                    Procurar
                  </h4>
                  <form action="#">
                    <input
                      type="text"
                      name="search"
                      placeholder="Digite sua procura..."
                    />
                    <button type="submit">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="widget ltn__menu-widget">
                  <h4 className="ltn__widget-title ltn__widget-title-border">
                    Categorias
                  </h4>
                  <ul>
                    {categorias ? (
                      categorias.map((ref, index) => {
                        return (
                          <li>
                            <a key={index} href="#">
                              {ref.nome}
                              <span>
                                <i className="fas fa-long-arrow-alt-right"></i>
                              </span>
                            </a>
                          </li>
                        );
                      })
                    ) : (
                      <></>
                    )}
                  </ul>
                </div>

                {true === false ? (
                  <div className="widget ltn__top-rated-product-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border">
                      Produtos mais vendidos
                    </h4>
                    <ul>
                      <li>
                        <div className="top-rated-product-item clearfix">
                          <div className="top-rated-product-img">
                            <a href="product-details.html">
                              <img src="img/product/1.png" alt="#" />
                            </a>
                          </div>
                          <div className="top-rated-product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h6>
                              <a href="product-details.html">
                                Mixel Solid Seat Cover
                              </a>
                            </h6>
                            <div className="product-price">
                              <span>$49.00</span>
                              <del>$65.00</del>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="top-rated-product-item clearfix">
                          <div className="top-rated-product-img">
                            <a href="product-details.html">
                              <img src="img/product/2.png" alt="#" />
                            </a>
                          </div>
                          <div className="top-rated-product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h6>
                              <a href="product-details.html">
                                Brake Conversion Kit
                              </a>
                            </h6>
                            <div className="product-price">
                              <span>$49.00</span>
                              <del>$65.00</del>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="top-rated-product-item clearfix">
                          <div className="top-rated-product-img">
                            <a href="product-details.html">
                              <img src="img/product/3.png" alt="#" />
                            </a>
                          </div>
                          <div className="top-rated-product-info">
                            <div className="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fas fa-star-half-alt"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="far fa-star"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h6>
                              <a href="product-details.html">
                                Coil Spring Conversion
                              </a>
                            </h6>
                            <div className="product-price">
                              <span>$49.00</span>
                              <del>$65.00</del>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <></>
                )}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
