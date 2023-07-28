import axios from "axios";
import React, { useState, useEffect } from "react";
import { cad_produtos } from "../request/request";
const BASE_URL = "http://localhost:55505";
export default function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [marca, setMarca] = useState("");
  const [qtd, setQtd] = useState("");
  const [vendidos, setVendidos] = useState("");
  const [codigo, setCodigo] = useState("not");
  const [preco, setPreco] = useState("");
  const [promocao, setPromocao] = useState("");
  const [foto, setFoto] = useState();
  const [fotos, setFotos] = useState([]);
  const [descricao, setDescricao] = useState("");

  function cadastro() {
    const formData = new FormData();
    for (let i = 0; i < fotos.length; i++) {
      formData.append("fotos", fotos[i]);
    }
    formData.append("nome", nome);
    formData.append("categoria", 1);
    formData.append("marca", marca);
    formData.append("qtd", qtd);
    formData.append("codigo", codigo);
    formData.append("preco", preco);
    formData.append("descricao", descricao);
    formData.append("foto", foto[0]);
    formData.append("promocao", promocao);

    console.log(formData);
    const post = cad_produtos(formData);
    post.then((ref) => {
      console.log(ref);
    });
    post.catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <div className="row painel2">
        <div className="col-md-12 ">
          <h2> Cadastrar Produto </h2>
          <form action="#" className="ltn__form-box contact-form-box">
            <div className="row">
              <div className="col-md-3 form-group">
                Nome:
                <input
                  onChange={(e) => setNome(e.target.value)}
                  type="text"
                  name="nome"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-3 form-group">
                categoria:
                <input
                  onChange={(e) => setCategoria(e.target.value)}
                  type="text"
                  name="categoria"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-3 form-group">
                Quantidade:
                <input
                  onChange={(e) => setQtd(e.target.value)}
                  type="number"
                  name="qtd"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-3 form-group">
                Marca:
                <input
                  onChange={(e) => setMarca(e.target.value)}
                  type="text"
                  name="marca"
                  className="form-control"
                  required
                />
              </div>

              <div className="col-md-3 form-group">
                Código de barras(opcional):
                <input
                  onChange={(e) => setCodigo(e.target.value)}
                  type="text"
                  name="codigo"
                  className="form-control"
                />
              </div>
              <div className="col-md-3 form-group">
                Preço:
                <input
                  onChange={(e) => setPreco(e.target.value)}
                  type="text"
                  name="preco"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-3 form-group">
                Promoção(opcioal):
                <input
                  onChange={(e) => setPromocao(e.target.value)}
                  type="text"
                  name="promocao"
                  className="form-control"
                />
              </div>
              <div className="col-md-3 form-group">
                Descrição:
                <textarea
                  onChange={(e) => setDescricao(e.target.value)}
                  type="text"
                  name="descricao"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-3 form-group">
                Foto principal:
                <input
                  onChange={(e) => setFoto(e.target.files)}
                  type="file"
                  name="foto"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-3 form-group">
                Fotos:
                <input
                  multiple
                  onChange={(e) => {
                    const files = Array.from(e.target.files);
                    setFotos(files);
                  }}
                  type="file"
                  name="fotos"
                  className="form-control"
                />
              </div>
              <span onClick={() => cadastro()}>cadastrar</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
