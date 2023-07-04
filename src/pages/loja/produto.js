import capa from "../../img/wallpaper.jpg";
import { useEffect, useState } from "react";
import { get_produto, get_ranking, BASE_URL } from "../../request/request";
export default function Produto({ setAdd, add }) {
  const idproduto = window.location.pathname.split("/")[2];
  const [data, setData] = useState();
  const [qtd, setQtd] = useState(1);
  const [ranking, setRanking] = useState([]);

  function alterarQuantidadeNoCarrinho(itemId) {
    const carrinho = localStorage.getItem("carrinho") || "[]";
    const carrinhoAtualizado = JSON.parse(carrinho);

    const itemExistente = carrinhoAtualizado.find(
      (item) => item.id === itemId.id
    );
    if (itemExistente) {
      itemExistente.quantidade = qtd;
    } else {
      if (qtd > itemId.qtd) {
        itemId.quantidade = itemId.qtd;
      } else {
        itemId.quantidade = qtd;
      }

      carrinhoAtualizado.push(itemId);
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
    setAdd(!add); // Atualize o estado para refletir a alteração no componente
  }

  function carrinho(item) {
    const carrinho = localStorage.getItem("carrinho") || "[]";
    const carrinhoAtualizado = JSON.parse(carrinho);

    const itemExistente = carrinhoAtualizado.find((i) => i.id === item.id);
    if (itemExistente) {
      if (itemExistente.quantidade < itemExistente.qtd) {
        itemExistente.quantidade += qtd;
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

  useEffect(() => {
    const product = get_produto(idproduto);
    product.then((res) => {
      setData(res.data[0]);
    });
    product.catch(() =>
      console.log("Tivemos um problema para obter os dados!!")
    );
  }, []);
  useEffect(() => {
    const rankings = get_ranking();
    rankings.then((res) => {
      setRanking(res.data);
    });
    rankings.catch(() =>
      console.log("Tivemos um problema para obter os dados!!")
    );
  }, []);
  console.log(ranking);
  console.log(data);
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
                  <h1 class="section-title white-color">Detalhes produto</h1>
                </div>
                <div class="ltn__breadcrumb-list">
                  <ul>
                    <li>
                      <a href="/">Inicio</a>
                    </li>
                    <li>Detalhes produtos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {data ? (
        <div class="ltn__shop-details-area pb-85">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-12">
                <div class="ltn__shop-details-inner mb-60">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="ltn__shop-details-img-gallery">
                        <div class="ltn__shop-details-large-img">
                          <div class="single-large-img">
                            <a
                              href={`${BASE_URL}/${data.foto}`}
                              data-rel="lightcase:myCollection"
                              style={{
                                maxHeight: "600px",
                                minHeight: "400px",
                              }}
                            >
                              <img
                                style={{
                                  maxHeight: "600px",
                                  minHeight: "400px",
                                }}
                                src={`${BASE_URL}/${data.foto}`}
                                alt="Image"
                              />
                            </a>
                          </div>

                          <div class="single-large-img">
                            <a
                              href={`${BASE_URL}/${data.fotos[0] || data.foto}`}
                              data-rel="lightcase:myCollection"
                            >
                              <img
                                style={{
                                  maxHeight: "600px",
                                  minHeight: "400px",
                                }}
                                src={`${BASE_URL}/${
                                  data.fotos[0] || data.foto
                                }`}
                                alt="Image"
                              />
                            </a>
                          </div>
                          <div class="single-large-img">
                            <a
                              href={`${BASE_URL}/${data.fotos[1] || data.foto}`}
                              data-rel="lightcase:myCollection"
                              style={{
                                maxHeight: "600px",
                                minHeight: "400px",
                              }}
                            >
                              <img
                                style={{
                                  maxHeight: "600px",
                                  minHeight: "400px",
                                }}
                                src={`${BASE_URL}/${
                                  data.fotos[1] || data.foto
                                }`}
                                alt="Image"
                              />
                            </a>
                          </div>
                          <div class="single-large-img">
                            <a
                              href={`${BASE_URL}/${data.fotos[2] || data.foto}`}
                              data-rel="lightcase:myCollection"
                              style={{
                                maxHeight: "600px",
                                minHeight: "400px",
                              }}
                            >
                              <img
                                style={{
                                  maxHeight: "600px",
                                  minHeight: "400px",
                                }}
                                src={`${BASE_URL}/${
                                  data.fotos[2] || data.foto
                                }`}
                                alt="Image"
                              />
                            </a>
                          </div>
                          <div class="single-large-img">
                            <a
                              href={`${BASE_URL}/${data.fotos[3] || data.foto}`}
                              data-rel="lightcase:myCollection"
                              style={{
                                maxHeight: "600px",
                                minHeight: "400px",
                              }}
                            >
                              <img
                                style={{
                                  maxHeight: "600px",
                                  minHeight: "400px",
                                }}
                                src={`${BASE_URL}/${
                                  data.fotos[3] || data.foto
                                }`}
                                alt="Image"
                              />
                            </a>
                          </div>
                          <div class="single-large-img">
                            <a
                              href={`${BASE_URL}/${data.fotos[4] || data.foto}`}
                              data-rel="lightcase:myCollection"
                              style={{
                                maxHeight: "600px",
                                minHeight: "400px",
                              }}
                            >
                              <img
                                style={{
                                  maxHeight: "600px",
                                  minHeight: "400px",
                                }}
                                src={`${BASE_URL}/${
                                  data.fotos[4] || data.foto
                                }`}
                                alt="Image"
                              />
                            </a>
                          </div>
                          <div class="single-large-img">
                            <a
                              href={`${BASE_URL}/${data.fotos[5] || data.foto}`}
                              data-rel="lightcase:myCollection"
                              style={{
                                maxHeight: "600px",
                                minHeight: "400px",
                              }}
                            >
                              <img
                                style={{
                                  maxHeight: "600px",
                                  minHeight: "400px",
                                }}
                                src={`${BASE_URL}/${
                                  data.fotos[5] || data.foto
                                }`}
                                alt="Image"
                              />
                            </a>
                          </div>
                        </div>
                        <div class="ltn__shop-details-small-img slick-arrow-2">
                          <div class="single-small-img">
                            <img
                              style={{ width: "75px", height: "75px" }}
                              src={`${BASE_URL}/${data.foto}`}
                              alt="Image"
                            />
                          </div>
                          <div class="single-small-img">
                            <img
                              style={{ width: "75px", height: "75px" }}
                              src={`${BASE_URL}/${data.fotos[0] || data.foto}`}
                              alt="Image"
                            />
                          </div>
                          <div class="single-small-img">
                            <img
                              style={{ width: "75px", height: "75px" }}
                              src={`${BASE_URL}/${data.fotos[1] || data.foto}`}
                              alt="Image"
                            />
                          </div>
                          <div class="single-small-img">
                            <img
                              style={{ width: "75px", height: "75px" }}
                              src={`${BASE_URL}/${data.fotos[2] || data.foto}`}
                              alt="Image"
                            />
                          </div>
                          <div class="single-small-img">
                            <img
                              style={{ width: "75px", height: "75px" }}
                              src={`${BASE_URL}/${data.fotos[3] || data.foto}`}
                              alt="Image"
                            />
                          </div>
                          <div class="single-small-img">
                            <img
                              style={{ width: "75px", height: "75px" }}
                              src={`${BASE_URL}/${data.fotos[4] || data.foto}`}
                              alt="Image"
                            />
                          </div>
                          <div class="single-small-img">
                            <img
                              style={{ width: "75px", height: "75px" }}
                              src={`${BASE_URL}/${data.fotos[5] || data.foto}`}
                              alt="Image"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="modal-product-info shop-details-info pl-0">
                        <h3>{data.nome}</h3>
                        {data.promocao > 0 ? (
                          <div class="product-price">
                            <span>
                              R$
                              {Number(data.promocao)
                                .toFixed(2)
                                .replace(".", ",")}
                            </span>
                            <del>
                              R$
                              {Number(data.preco).toFixed(2).replace(".", ",")}
                            </del>
                          </div>
                        ) : (
                          <div class="product-price">
                            <span>
                              R$
                              {Number(data.preco).toFixed(2).replace(".", ",")}
                            </span>
                          </div>
                        )}

                        <div class="ltn__product-details-menu-2">
                          <ul>
                            <li>
                              <div
                                style={{
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  padding: "6px",
                                }}
                                class="cart-plus-minus d-flex"
                              >
                                <i
                                  style={{ color: "red" }}
                                  className="fa fa-minus"
                                  onClick={() => {
                                    if (qtd > 1) {
                                      setQtd(qtd - 1);
                                    }
                                  }}
                                ></i>
                                <input
                                  type="text"
                                  value={qtd}
                                  name="qtybutton"
                                  class="cart-plus-minus-box"
                                  style={{ fontSize: "20px" }}
                                />
                                <i
                                  style={{ color: "red" }}
                                  className="fa fa-plus"
                                  onClick={() => {
                                    if (qtd < data.qtd) {
                                      setQtd(qtd + 1);
                                    }
                                  }}
                                ></i>
                              </div>
                            </li>
                            <li>
                              <a
                                onClick={() =>
                                  alterarQuantidadeNoCarrinho(data)
                                }
                                class="theme-btn-1 btn btn-effect-1"
                                title="Adicionar ao carrinho"
                              >
                                <i class="fas fa-shopping-cart"></i>
                                <span>Adicionar ao carrinho</span>
                              </a>
                            </li>
                          </ul>
                        </div>

                        <hr />

                        <hr />
                        <div class="ltn__safe-checkout">
                          <h5>Compra segura</h5>
                          <img
                            src="/img/icons/payment-2.png"
                            alt="Payment Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                  <div class="ltn__shop-details-tab-menu">
                    <div class="nav">
                      <a
                        class="active show"
                        data-bs-toggle="tab"
                        href="#liton_tab_details_1_1"
                      >
                        Descrição
                      </a>
                    </div>
                  </div>
                  <div class="tab-content">
                    <div
                      class="tab-pane fade active show"
                      id="liton_tab_details_1_1"
                    >
                      <div class="ltn__shop-details-tab-content-inner">
                        <h4 class="title-2">{data.nome}</h4>
                        <p>{data.descricao}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <aside class="sidebar ltn__shop-sidebar ltn__right-sidebar">
                  <div class="widget ltn__top-rated-product-widget">
                    <h4 class="ltn__widget-title ltn__widget-title-border">
                      Produtos mais vendidos
                    </h4>
                    <ul>
                      {ranking.map((ref) => {
                        return (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                            class="top-rated-product-item clearfix"
                          >
                            <div class="top-rated-product-img">
                              <a href={`/produto/${ref.id}`}>
                                <img
                                  style={{
                                    maxHeight: "80px",
                                    minHeight: "80px",
                                  }}
                                  src={`${BASE_URL}/${ref.foto}`}
                                  alt="#"
                                />
                              </a>
                            </div>
                            <div
                              style={{ width: "150px", marginLeft: "10px" }}
                              class="top-rated-product-info"
                            >
                              <h6>
                                <a href={`/produto/${ref.id}`}>{ref.nome}</a>
                              </h6>
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
                            </div>
                          </div>
                        );
                      })}
                      <li></li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="ltn__shop-details-area pb-85">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-12">
                <div class="ltn__shop-details-inner mb-60">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="ltn__shop-details-img-gallery">
                        <div class="ltn__shop-details-large-img">
                          <div class="single-large-img">
                            <a
                              href="/img/product/1.png"
                              data-rel="lightcase:myCollection"
                            >
                              <img src="/img/product/1.png" alt="Image" />
                            </a>
                          </div>
                          <div class="single-large-img">
                            <a
                              href="/img/product/2.png"
                              data-rel="lightcase:myCollection"
                            >
                              <img src="/img/product/2.png" alt="Image" />
                            </a>
                          </div>
                          <div class="single-large-img">
                            <a
                              href="/img/product/3.png"
                              data-rel="lightcase:myCollection"
                            >
                              <img src="/img/product/3.png" alt="Image" />
                            </a>
                          </div>
                          <div class="single-large-img">
                            <a
                              href="/img/product/4.png"
                              data-rel="lightcase:myCollection"
                            >
                              <img src="/img/product/4.png" alt="Image" />
                            </a>
                          </div>
                          <div class="single-large-img">
                            <a
                              href="/img/product/5.png"
                              data-rel="lightcase:myCollection"
                            >
                              <img src="/img/product/5.png" alt="Image" />
                            </a>
                          </div>
                          <div class="single-large-img">
                            <a
                              href="/img/product/6.png"
                              data-rel="lightcase:myCollection"
                            >
                              <img src="/img/product/6.png" alt="Image" />
                            </a>
                          </div>
                          <div class="single-large-img">
                            <a
                              href="/img/product/7.png"
                              data-rel="lightcase:myCollection"
                            >
                              <img src="/img/product/7.png" alt="Image" />
                            </a>
                          </div>
                        </div>
                        <div class="ltn__shop-details-small-img slick-arrow-2">
                          <div class="single-small-img">
                            <img src="/img/product/1.png" alt="Image" />
                          </div>
                          <div class="single-small-img">
                            <img src="/img/product/2.png" alt="Image" />
                          </div>
                          <div class="single-small-img">
                            <img src="/img/product/3.png" alt="Image" />
                          </div>
                          <div class="single-small-img">
                            <img src="/img/product/4.png" alt="Image" />
                          </div>
                          <div class="single-small-img">
                            <img src="/img/product/5.png" alt="Image" />
                          </div>
                          <div class="single-small-img">
                            <img src="/img/product/6.png" alt="Image" />
                          </div>
                          <div class="single-small-img">
                            <img src="/img/product/7.png" alt="Image" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="modal-product-info shop-details-info pl-0">
                        <h3>Carregando</h3>

                        <div class="product-price">
                          <span>R$ carregando</span>
                        </div>

                        <div class="modal-product-meta ltn__product-details-menu-1">
                          <ul>
                            <li>
                              <strong>Categories:</strong>
                              <span>
                                <a href="#">Parts</a>
                                <a href="#">Car</a>
                                <a href="#">Seat</a>
                                <a href="#">Cover</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div class="ltn__product-details-menu-2">
                          <ul>
                            <li>
                              <div class="cart-plus-minus">
                                <input
                                  type="text"
                                  value="02"
                                  name="qtybutton"
                                  class="cart-plus-minus-box"
                                />
                              </div>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="theme-btn-1 btn btn-effect-1"
                                title="Add to Cart"
                                data-bs-toggle="modal"
                                data-bs-target="#add_to_cart_modal"
                              >
                                <i class="fas fa-shopping-cart"></i>
                                <span>ADD TO CART</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="ltn__product-details-menu-3">
                          <ul>
                            <li>
                              <a
                                href="#"
                                class=""
                                title="Wishlist"
                                data-bs-toggle="modal"
                                data-bs-target="#liton_wishlist_modal"
                              >
                                <i class="far fa-heart"></i>
                                <span>Add to Wishlist</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class=""
                                title="Compare"
                                data-bs-toggle="modal"
                                data-bs-target="#quick_view_modal"
                              >
                                <i class="fas fa-exchange-alt"></i>
                                <span>Compare</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <hr />
                        <div class="ltn__social-media">
                          <ul>
                            <li>Share:</li>
                            <li>
                              <a href="#" title="Facebook">
                                <i class="fab fa-facebook-f"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Twitter">
                                <i class="fab fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Linkedin">
                                <i class="fab fa-linkedin"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Instagram">
                                <i class="fab fa-instagram"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <hr />
                        <div class="ltn__safe-checkout">
                          <h5>Guaranteed Safe Checkout</h5>
                          <img
                            src="/img/icons/payment-2.png"
                            alt="Payment Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                  <div class="ltn__shop-details-tab-menu">
                    <div class="nav">
                      <a
                        class="active show"
                        data-bs-toggle="tab"
                        href="#liton_tab_details_1_1"
                      >
                        Description
                      </a>
                      <a
                        data-bs-toggle="tab"
                        href="#liton_tab_details_1_2"
                        class=""
                      >
                        Reviews
                      </a>
                    </div>
                  </div>
                  <div class="tab-content">
                    <div
                      class="tab-pane fade active show"
                      id="liton_tab_details_1_1"
                    >
                      <div class="ltn__shop-details-tab-content-inner">
                        <h4 class="title-2">
                          Lorem ipsum dolor sit amet elit.
                        </h4>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum. Sed ut
                          perspiciatis unde omnis iste natus error sit
                          voluptatem, totam rem aperiam, eaque ipsa quae ab illo
                          inventore veritatis et quasi architecto beatae vitae
                          dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                          voluptas sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                      </div>
                    </div>
                    <div class="tab-pane fade" id="liton_tab_details_1_2">
                      <div class="ltn__shop-details-tab-content-inner">
                        <h4 class="title-2">Customer Reviews</h4>
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
                            <li class="review-total">
                              {" "}
                              <a href="#"> ( 95 Reviews )</a>
                            </li>
                          </ul>
                        </div>
                        <hr />

                        <div class="ltn__comment-area mb-30">
                          <div class="ltn__comment-inner">
                            <ul>
                              <li>
                                <div class="ltn__comment-item clearfix">
                                  <div class="ltn__commenter-img">
                                    <img
                                      src="/img/testimonial/1.jpg"
                                      alt="Image"
                                    />
                                  </div>
                                  <div class="ltn__commenter-comment">
                                    <h6>
                                      <a href="#">Adam Smit</a>
                                    </h6>
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
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Doloribus, omnis fugit
                                      corporis iste magnam ratione.
                                    </p>
                                    <span class="ltn__comment-reply-btn">
                                      September 3, 2020
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="ltn__comment-item clearfix">
                                  <div class="ltn__commenter-img">
                                    <img
                                      src="/img/testimonial/3.jpg"
                                      alt="Image"
                                    />
                                  </div>
                                  <div class="ltn__commenter-comment">
                                    <h6>
                                      <a href="#">Adam Smit</a>
                                    </h6>
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
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Doloribus, omnis fugit
                                      corporis iste magnam ratione.
                                    </p>
                                    <span class="ltn__comment-reply-btn">
                                      September 2, 2020
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div class="ltn__comment-item clearfix">
                                  <div class="ltn__commenter-img">
                                    <img
                                      src="/img/testimonial/2.jpg"
                                      alt="Image"
                                    />
                                  </div>
                                  <div class="ltn__commenter-comment">
                                    <h6>
                                      <a href="#">Adam Smit</a>
                                    </h6>
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
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit. Doloribus, omnis fugit
                                      corporis iste magnam ratione.
                                    </p>
                                    <span class="ltn__comment-reply-btn">
                                      September 2, 2020
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div class="ltn__comment-reply-area ltn__form-box mb-30">
                          <form action="#">
                            <h4 class="title-2">Add a Review</h4>
                            <div class="mb-30">
                              <div class="add-a-review">
                                <h6>Your Ratings:</h6>
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
                              </div>
                            </div>
                            <div class="input-item input-item-textarea ltn__custom-icon">
                              <textarea placeholder="Type your comments...."></textarea>
                            </div>
                            <div class="input-item input-item-name ltn__custom-icon">
                              <input
                                type="text"
                                placeholder="Type your name...."
                              />
                            </div>
                            <div class="input-item input-item-email ltn__custom-icon">
                              <input
                                type="email"
                                placeholder="Type your email...."
                              />
                            </div>
                            <div class="input-item input-item-website ltn__custom-icon">
                              <input
                                type="text"
                                name="website"
                                placeholder="Type your website...."
                              />
                            </div>
                            <label class="mb-0">
                              <input type="checkbox" name="agree" /> Save my
                              name, email, and website in this browser for the
                              next time I comment.
                            </label>
                            <div class="btn-wrapper">
                              <button
                                class="btn theme-btn-1 btn-effect-1 text-uppercase"
                                type="submit"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <aside class="sidebar ltn__shop-sidebar ltn__right-sidebar">
                  <div class="widget ltn__top-rated-product-widget">
                    <h4 class="ltn__widget-title ltn__widget-title-border">
                      Top Rated Product
                    </h4>
                    <ul>
                      <li>
                        <div class="top-rated-product-item clearfix">
                          <div class="top-rated-product-img">
                            <a href="product-details.html">
                              <img src="/img/product/1.png" alt="#" />
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
                              <img src="/img/product/2.png" alt="#" />
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
                              <img src="/img/product/3.png" alt="#" />
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

                  <div class="widget ltn__banner-widget">
                    <a href="shop.html">
                      <img src="/img/banner/2.jpg" alt="#" />
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
