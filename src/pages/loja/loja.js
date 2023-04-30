import { useEffect, useState } from "react";
import capa from "../../img/wallpaper.jpg";
import { get_produtos, get_categorias } from "../../request/request";
export default function Loja() {
  const [page, setpage] = useState(1);
  const [qtdPages, setqtdPages] = useState(1);
  const [totalItens, setTotalItens] = useState(1);
  const [data, setData] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const product = get_produtos();
    product.then((res) => {
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
      console.log(res.data);
      setCategorias(res.data);
    });
    categoria.catch(() =>
      console.log("Tivemos um problema para obter os dados!!")
    );
  }, []);

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
        class="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image plr--9"
        data-bs-bg={capa}
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              <div class="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                <div class="section-title-area ltn__section-title-2">
                  <h6 class="section-subtitle ltn__secondary-color">
                    // A sua melhor compra
                  </h6>
                  <h1 class="section-title white-color">Loja</h1>
                </div>
                <div class="ltn__breadcrumb-list">
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
      <div class="ltn__product-area ltn__product-gutter mb-120">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 order-lg-2">
              <div class="ltn__shop-options">
                <ul>
                  <li>
                    <div class="ltn__grid-list-tab-menu ">
                      <div class="nav">
                        <a
                          class="active show"
                          data-bs-toggle="tab"
                          href="#liton_product_grid"
                        >
                          <i class="fas fa-th-large"></i>
                        </a>
                        <a data-bs-toggle="tab" href="#liton_product_list">
                          <i class="fas fa-list"></i>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="showing-product-number text-right">
                      <span>
                        mostrando {page}–{qtdPages} de {totalItens} resultados
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="short-by text-center">
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
              <div class="tab-content">
                <div class="tab-pane fade active show" id="liton_product_grid">
                  <div class="ltn__product-tab-content-inner ltn__product-grid-view">
                    <div class="row">
                      {data ? (
                        data.map((ref) => {
                          return (
                            <div class="col-sm-6 col-6">
                              <div class="ltn__product-item ltn__product-item-3 text-center">
                                <div class="product-img">
                                  <a href="product-details.html">
                                    <img src={ref.foto} alt="#" />
                                  </a>
                                  <div class="product-badge"></div>
                                  <div class="product-hover-action">
                                    <ul>
                                      <li>
                                        <a
                                          href="#"
                                          title="Observar"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick_view_modal"
                                        >
                                          <i class="far fa-eye"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          title="Adicionar ao carrinho"
                                          data-bs-toggle="modal"
                                          data-bs-target="#add_to_cart_modal"
                                        >
                                          <i class="fas fa-shopping-cart"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="product-info">
                                  <h2 class="product-title">
                                    <a href="product-details.html">
                                      {ref.nome}
                                    </a>
                                  </h2>
                                  {ref.promocao > 0 ? (
                                    <div class="product-price">
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
                                    <div class="product-price">
                                      <span>
                                        R$
                                        {Number(ref.preco)
                                          .toFixed(2)
                                          .replace(".", ",")}
                                      </span>
                                    </div>
                                  )}

                                  <div class="product-info-brief">
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
                <div class="tab-pane fade" id="liton_product_list">
                  <div class="ltn__product-tab-content-inner ltn__product-list-view">
                    <div class="row">
                      <div class="col-lg-12">
                        {data ? (
                          data.map((ref) => {
                            return (
                              <div class="ltn__product-item ltn__product-item-3">
                                <div class="product-img">
                                  <a href="product-details.html">
                                    <img src={ref.foto} alt="#" />
                                  </a>
                                </div>
                                <div class="product-info">
                                  <h2 class="product-title">
                                    <a href="product-details.html">
                                      {ref.nome}
                                    </a>
                                  </h2>
                                  {ref.promocao > 0 ? (
                                    <div class="product-price">
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
                                    <div class="product-price">
                                      <span>
                                        R${" "}
                                        {Number(ref.preco)
                                          .toFixed(2)
                                          .replace(".", ",")}
                                      </span>
                                    </div>
                                  )}

                                  <div class="product-info-brief">
                                    <ul>
                                      <li>Marca: {ref.marca}</li>
                                      <li>Quantidade em estoque: {ref.qtd}</li>
                                    </ul>
                                  </div>
                                  <div class="product-brief">
                                    <p>{ref.descricao}</p>
                                  </div>
                                  <div class="product-hover-action">
                                    <ul>
                                      <li>
                                        <a
                                          href="#"
                                          title="Ver produto"
                                          data-bs-toggle="modal"
                                          data-bs-target="#quick_view_modal"
                                        >
                                          <i class="far fa-eye"></i>
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          title="Adicionar ao carrinho"
                                          data-bs-toggle="modal"
                                          data-bs-target="#add_to_cart_modal"
                                        >
                                          <i class="fas fa-shopping-cart"></i>
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
            <div class="col-lg-4">
              <aside class="sidebar ltn__shop-sidebar ltn__right-sidebar">
                <div class="widget ltn__search-widget">
                  <h4 class="ltn__widget-title ltn__widget-title-border">
                    Procurar
                  </h4>
                  <form action="#">
                    <input
                      type="text"
                      name="search"
                      placeholder="Digite sua procura..."
                    />
                    <button type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div class="widget ltn__menu-widget">
                  <h4 class="ltn__widget-title ltn__widget-title-border">
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
                                <i class="fas fa-long-arrow-alt-right"></i>
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
                  <div class="widget ltn__top-rated-product-widget">
                    <h4 class="ltn__widget-title ltn__widget-title-border">
                      Produtos mais vendidos
                    </h4>
                    <ul>
                      <li>
                        <div class="top-rated-product-item clearfix">
                          <div class="top-rated-product-img">
                            <a href="product-details.html">
                              <img src="img/product/1.png" alt="#" />
                            </a>
                          </div>
                          <div class="top-rated-product-info">
                            <div class="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h6>
                              <a href="product-details.html">
                                Mixel Solid Seat Cover
                              </a>
                            </h6>
                            <div class="product-price">
                              <span>$49.00</span>
                              <del>$65.00</del>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="top-rated-product-item clearfix">
                          <div class="top-rated-product-img">
                            <a href="product-details.html">
                              <img src="img/product/2.png" alt="#" />
                            </a>
                          </div>
                          <div class="top-rated-product-info">
                            <div class="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h6>
                              <a href="product-details.html">
                                Brake Conversion Kit
                              </a>
                            </h6>
                            <div class="product-price">
                              <span>$49.00</span>
                              <del>$65.00</del>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="top-rated-product-item clearfix">
                          <div class="top-rated-product-img">
                            <a href="product-details.html">
                              <img src="img/product/3.png" alt="#" />
                            </a>
                          </div>
                          <div class="top-rated-product-info">
                            <div class="product-ratting">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="fas fa-star-half-alt"></i>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i class="far fa-star"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <h6>
                              <a href="product-details.html">
                                Coil Spring Conversion
                              </a>
                            </h6>
                            <div class="product-price">
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
