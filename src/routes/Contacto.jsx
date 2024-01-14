import "../css/contacto.css";
function Contacto() {
  return (
    <article className="pagContacto">
      <div className="ubicacion">
        <h2>Ubicación</h2>
        <p>Carrer de Salvador Dalí, 3, Ponent, 07011 Palma, Illes Balears</p>
      </div>

      <div className="siguenos">
        <h2>Sígueme</h2>
        <img src="/img/git_icon.png" alt="" />
        <img src="/img/fac.png" alt="" className="fac" />
        <img src="/img/inst.png" alt="" />
        <img src="/img/tw.png" alt="" />
      </div>
      <div className="contacto">
        <h2>Formulario de Contacto</h2>
        <form action="#" method="post">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
            <br />
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />
            <br />
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
            <br />
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>
    </article>
  );
}

export default Contacto;
