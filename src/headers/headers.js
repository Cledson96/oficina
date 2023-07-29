import "./headers.css";
import Cars from "../components/cars";
import Mobile from "./mobileMenu";
import Topo from "./topo";
import Menu from "./menu";

export default function Headers({
  setlogged,
  logged,
  add,
  setQtd,
  qtd,
  setAdd,
  total,
  setTotal,
  car,
  setCar,
  setCliente
}) {
  return (
    <>
      <header className="ltn__header-area ltn__header-5 ltn__header-transparent gradient-color-4 pt-2">
        <Topo />
        <Menu logged={logged} setlogged={setlogged} qtd={qtd} setCliente={setCliente} />
      </header>
      <Cars
        add={add}
        setQtd={setQtd}
        setAdd={setAdd}
        total={total}
        setTotal={setTotal}
        car={car}
        setCar={setCar}
      ></Cars>
      <Mobile></Mobile>
    </>
  );
}
