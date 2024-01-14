import "../css/main.css";
import Skills from "./Skills";
import Proyectos from "./Proyectos.jsx";

function Main() {
  return (
    <>
      <main className="textPrin">
        <div className="presText">
          <h1>¡Hola! Soy Miquel Angel Coll, </h1>
          <p>
            Un apasionado creador con un enfoque especializado en desarrollo web
            y sistemas informáticos. Mi objetivo es transformar ideas en
            experiencias visuales impactantes. Mi portafolio refleja mi
            dedicación para crear soluciones innovadoras y funcionales. ¡Vamos a
            trabajar juntos para hacer realidad tu visión!
          </p>
        </div>
        <div className="presImage">
          <img src="/img/miquel_5_baja.jpg" alt="Miquel Angel Coll"></img>
        </div>
      </main>
      <Skills />
      <Proyectos/>
    </>
  );
}

export default Main;
