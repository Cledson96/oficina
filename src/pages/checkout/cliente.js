import { BiChevronRight } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { useState, useEffect } from "react";
import { get_cliente } from "../../request/request";
import "./checkout.css";

export default function Cliente({ cliente, setComprador }) {
  const [on, setOn] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [contato, setContato] = useState("");
  const [cpf, setCpf] = useState("");

  useEffect(() => {
    const dados = get_cliente(cliente);
    dados.then((response) => {
      setNome(response.data.name || "");
      setEmail(response.data.email || "");
      setTelefone(response.data.phone || "");
      setContato(response.data.phonecontact || "");
      setCpf(response.data.cpf || "");
    });
    dados.catch(() => console.log("Tivemos um problema para obter os dados!!"));
  }, []);

  useEffect(() => {
    const dados = {
      id:cliente,
      nome,
      email,
      telefone,
      contato,
      cpf
    };
    setComprador(dados);
  }, [nome, email, telefone, contato, cpf]);

  return (
    <>
      <div class="col-lg-12">
        <div class="ltn__checkout-single-content ">
          <h5 class="title-2 checkout-show" onClick={() => setOn(!on)}>
            Dados do cliente{" "}
            {on ? (
              <BiChevronDown fontSize={50} />
            ) : (
              <BiChevronRight fontSize={50} />
            )}
          </h5>
          {on ? (
            <>
              <div class="ltn__checkout-single-content-info cliente-dados-checkout">
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-item input-item-name ltn__custom-icon icon-ajuste">
                      <input
                        type="text"
                        name="nome"
                        placeholder="Nome completo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-item input-item-email ltn__custom-icon icon-ajuste">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="input-item input-item-name ltn__custom-icon icon-ajuste">
                      <input
                        type="text"
                        name="cpf"
                        placeholder="CPF (opcional)"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="input-item input-item-phone ltn__custom-icon icon-ajuste">
                      <input
                        type="text"
                        name="telefone"
                        placeholder="Telefone"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="input-item input-item-phone ltn__custom-icon icon-ajuste">
                      <input
                        type="text"
                        name="ltn__company"
                        placeholder="Telefone de contato (opcional)"
                        value={contato}
                        onChange={(e) => setContato(e.target.value)}
                      />
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
