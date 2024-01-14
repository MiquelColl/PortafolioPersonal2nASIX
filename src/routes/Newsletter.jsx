import "../css/newsletter.css";

function Newsletter() {
  return (
    <article className="nlBody">
      <h1 className="nlTitle">
        Explora el Código: Novedades, Herramientas y Trucos para Desarrolladores
        Web 🖥️💻
      </h1>
      <p>
        ¡Saludos, desarrolladores web! Estoy emocionado de compartirles que he
        añadido nuevo contenido fascinante a mi repositorio en GitHub. Desde
        código fuente hasta proyectos interesantes, hay mucho por descubrir.
        ¿Por qué no le echas un vistazo y me cuentas qué piensas? ¡Espero que
        encuentres algo que te inspire en tu propio viaje de desarrollo! 🚀
      </p>
      <a href="https://sage-swan-012524.netlify.app/" className="dress">
      <img src="/img/dress.png" alt="" className="dressImg"/>
      </a>
      <a href="https://github.com/MiquelColl">
        <img src="/img/git_icon.png" alt="" className="gitIcon"/>
      </a>
      <p>
        ¡Gracias a todos mis suscriptores activos! Su participación y atención
        hacen que este viaje web sea increíble. Estoy muy emocionado por seguir
        compartiendo contenido de calidad. ¡Hasta la próxima!
      </p>
      <p>Atentamente, Miquel Àngel Coll Luciañez</p>
    </article>
  );
}

export default Newsletter;
