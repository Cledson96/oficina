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

export default function App() {
  const [logged, setlogged] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Headers setlogged={setlogged} logged={logged} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn setlogged={setlogged} />} />
          <Route path="/cadastro" element={<SignUp setlogged={setlogged} />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/produto/:id" element={<Produto />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
