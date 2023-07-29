import { useState, useEffect } from "react";
import { valorFrete } from "../../request/request";
import axios from "axios";
import "./carrinho.css";
export default function CalcularFrete({
  car,
  setFrete,
  setStatus,
  add,
  total,
}) {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [opcoesFrete, setOpcoesFrete] = useState([]);

  useEffect(() => {
    let compra = localStorage.getItem("compra");
    try {
      compra = compra.length > 0 ? JSON.parse(compra) : [];
    } catch (error) {
      compra = [];
    }

    if (compra !== null && compra.endereco) {
      handleCepChange(compra.endereco.cep);
      setNumero(compra.endereco.numero);
      setComplemento(compra.endereco.complemento);
    }
  }, []);

  useEffect(() => {
    setStatus(false);
    setOpcoesFrete([]);
    setSelectedOption(null);
  }, [add]);

  async function calcularFrete() {
    if (
      logradouro.length < 1 ||
      cep.length < 9 ||
      (numero.length < 1 && complemento.length < 1)
    ) {
      alert("Obrigatório endereço valido");
      return;
    }

    try {
      const response = await valorFrete({
        cep: cep.toString().replace("-", ""),
        produtos: car,
      });
      setOpcoesFrete(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCepChange(event) {
    setStatus(false);
    setOpcoesFrete([]);
    setSelectedOption(null);
    let value = event;

    value = value.replace(/\D/g, "");

    value = value.replace(/(\d{5})(\d{3})/, "$1-$2");

    setCep(value);

    if (value.length === 9) {
      try {
        await axios
          .get(`https://viacep.com.br/ws/${value}/json/`)
          .then((response) => {
            if (response.data.erro) {
              setLogradouro("");
              setCidade("");
              setEstado("");
              setBairro("");
            } else {
              setLogradouro(response.data.logradouro);
              setCidade(response.data.localidade);
              setEstado(response.data.uf);
              setBairro(response.data.bairro);
            }
          })
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    } else {
      <></>;
    }
  }

  function handleOptionClick(dados) {
    setSelectedOption(dados.id === selectedOption ? null : dados.id);
    let compra = dados;
    compra.endereco = {
      logradouro,
      numero: numero || "",
      complemento: complemento || "",
      bairro,
      cidade,
      estado,
      cep: cep.replace("-", ""),
    };
    compra.produtos = car;
    compra.valorProdutos = total;

    localStorage.setItem("compra", JSON.stringify(compra));
    setFrete(dados.price || 0);
    setStatus(true);
  }

  return (
    <>
      <div className="row">
        <div>
          <h1 className="titulo-carrinho-endereco">Endereço de entrega:</h1>
          <div className="col-md-12">
            <div className="shop-shipping input-carrinho">
              <input
                className="input-form"
                type="text"
                placeholder="CEP"
                id="cep"
                name="cep"
                maxLength="9"
                value={cep}
                onChange={(e) => handleCepChange(e.target.value)}
              />
              <div>
                <input
                  className="input-form"
                  type="text"
                  placeholder="LOGRADOURO"
                  value={logradouro}
                  readOnly
                />

                <input
                  className="input-form"
                  type="text"
                  placeholder="NUMERO"
                  onChange={(e) => setNumero(e.target.value)}
                  value={numero}
                />
              </div>

              <div>
                <input
                  className="input-form"
                  type="text"
                  placeholder="BAIRRO"
                  value={bairro}
                  readOnly
                />
                <input
                  className="input-form"
                  type="text"
                  placeholder="COMPLEMENTO"
                  onChange={(e) => setComplemento(e.target.value)}
                  value={complemento}
                />
              </div>
              <div>
                <input
                  className="input-form"
                  type="text"
                  placeholder="CIDADE"
                  value={cidade}
                  readOnly
                />

                <input
                  className="input-form"
                  type="text"
                  placeholder="ESTADO"
                  value={estado}
                  readOnly
                />
              </div>

              <div
                onClick={() => calcularFrete()}
                className="btn btn-success ajuste-botao"
              >
                Calcular frete
              </div>
              {cep.length > 8 && cidade.length > 2 ? (
                <div className="precos_frete">
                  <span>Endereço:</span> {logradouro}
                  {numero.length > 1 ? `,${numero}` : <></>}
                  {complemento.length > 1 ? `,${complemento}` : <></>} - CEP:{" "}
                  {cep} - {bairro} - {cidade} - {estado}.
                </div>
              ) : (
                <></>
              )}
              {cep.length > 8 && cidade.length > 2 ? (
                <ul className="opcao_frete">
                  {opcoesFrete.map((referencia, index) => {
                    if (
                      referencia.error ||
                      !referencia.price ||
                      !referencia.name ||
                      !referencia.company.name ||
                      !referencia.custom_delivery_time
                    ) {
                      return;
                    } else {
                      return (
                        <>
                          <li
                            className={
                              (selectedOption === referencia.id
                                ? "selecionado_frete "
                                : "") +
                              (referencia.company.name === "Correios"
                                ? "arruma-correio"
                                : "")
                            }
                            key={index}
                          >
                            {" "}
                            <input
                              type="checkbox"
                              className="custom-checkbox"
                              checked={selectedOption === referencia.id}
                              onChange={() => handleOptionClick(referencia)}
                            />
                            <img
                              alt={referencia.company.name}
                              src={referencia.company.picture}
                            />
                            {referencia.company.name} ({referencia.name}) -
                            Valor:{" "}
                            <h1> R$ {referencia.price.replace(".", ",")}</h1> -
                            Prazo de entrega:{" "}
                            <span>
                              {" "}
                              {referencia.custom_delivery_time} dia(s).
                            </span>
                          </li>
                        </>
                      );
                    }
                  })}
                </ul>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
