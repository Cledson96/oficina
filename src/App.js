import Headers from "./headers/headers";
import Home from "./home/home";
import GetIn from "./GetIn/GetIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get_in" element={<GetIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
