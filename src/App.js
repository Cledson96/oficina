import Headers from "./headers/headers";
import Home from "./home/home";
import SignIn from "./GetIn/SingIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Footer from "./components/footer";
export default function App() {
  const [logged, setlogged] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Headers setlogged={setlogged} logged={logged} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn setlogged={setlogged} />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
