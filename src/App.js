import Headers from "./headers/headers";
import Home from "./home/home";
import SignIn from "./GetIn/SingIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/footer";
import SignUp from "./GetIn/SingUp";
import Sobre from "./pages/sobre/sobre";
import Servicos from "./pages/servicos/servicos";
import Contato from "./pages/contato/contato";
import Loja from "./pages/loja/loja";
import Produto from "./pages/loja/produto";
import CadastroProduto from "./admin/cadastro";
import Carrinho from "./pages/carrinho/carrinho";

export default function App() {
  const [logged, setlogged] = useState(false);
  const [add, setAdd] = useState(false);
  const [qtd, setQtd] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Headers
          setlogged={setlogged}
          logged={logged}
          add={add}
          setQtd={setQtd}
          qtd={qtd}
          setAdd={setAdd}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/carrinho"
            element={<Carrinho add={add} setQtd={setQtd} setAdd={setAdd} />}
          />
          <Route path="/login" element={<SignIn setlogged={setlogged} />} />
          <Route path="/cadastro" element={<SignUp setlogged={setlogged} />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/loja" element={<Loja setAdd={setAdd} add={add} />} />
          <Route
            path="/produto/:id"
            element={<Produto setAdd={setAdd} add={add} />}
          />
          <Route path="/admin/cad_produto" element={<CadastroProduto />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
