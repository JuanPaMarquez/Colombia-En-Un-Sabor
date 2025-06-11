import Carrusel from "../components/Carrusel/Carrusel"
import Footer from "../ui/Inicio/Footer";
import Navegacion from "../ui/Inicio/Navegacion";
import Descripcion from "../ui/Inicio/DescripcionSecond";
import Video from "../ui/Inicio/Video";

function Inicio() {
  
  return (
    <>
      <Navegacion />
      <main>
        <div className="flex justify-center">
          <Carrusel />
        </div>
        <Descripcion />
        <Video />
      </main>
      <Footer />
    </>
  )
}

export default Inicio;
