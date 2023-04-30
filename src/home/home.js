import "./home.css";
import SlideShow from "../components/slideSHow";
import BoxService from "../components/boxService";
import Cotation from "../components/cotation";
import Services from "../components/services";
import SlideHome from "../components/slidesHome";
import Marcas from "../components/marcas";
import Feeds from "../components/feed";

export default function Home() {
  return (
    <>
      <SlideShow></SlideShow>
      <BoxService></BoxService>
      <Cotation></Cotation>
      <Services></Services>
      <SlideHome></SlideHome>
      <Marcas></Marcas>
      <Feeds></Feeds>
    </>
  );
}
