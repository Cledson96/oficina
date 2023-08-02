import { BiChevronRight } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BiEdit } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.css";

export default function Endereco({ compra }) {
  const [on, setOn] = useState(false);
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (compra !== null && compra.endereco) {
      setCep(compra.endereco.cep || "");
      setLogradouro(compra.endereco.logradouro || "");
      setNumero(compra.endereco.numero || "");
      setCidade(compra.endereco.cidade || "");
      setBairro(compra.endereco.bairro || "");
      setComplemento(compra.endereco.complemento || "");
      setEstado(compra.endereco.estado || "");
    }
  }, [compra]);

  return (
    <>
      <div class="col-lg-12">
        <div class="ltn__checkout-single-content ">
          <h5 class="title-2 checkout-show" onClick={() => setOn(!on)}>
            Endereço de entrega
            {on ? (
              <BiChevronDown fontSize={50} />
            ) : (
              <BiChevronRight fontSize={50} />
            )}
          </h5>
          {on ? (
            <>
              <div class="ltn__checkout-single-content-info endereco-checkout">
                <BiEdit
                  className="edita-icon"
                  fontSize={30}
                  onClick={() => navigate("/carrinho")}
                />
                <div className="row">
                  <div>
                    <div className="col-md-12">
                      <div className="shop-shipping input-checkout">
                        <input
                          className="input-form"
                          type="text"
                          placeholder="CEP"
                          name="cep"
                          maxLength="9"
                          value={cep}
                          readOnly
                          style={{ width: "200px" }}
                        />

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
                          readOnly
                          style={{ maxWidth: "200px" }}
                        />

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
                          value={complemento}
                          readOnly
                        />

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
                          style={{ maxWidth: "100px", paddingRight: "20px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
