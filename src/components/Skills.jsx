import "../css/skills.css";

function Skills() {
    return (
        <article>
            <h1 className="skillsTitle">
                Mis Skills
            </h1>
            <div className="cardsDiv">
                <div className="card">
                    <h3>
                        Lenguajes de Programación
                    </h3>
                    <p>
                        Conocimientos en lenguajes como: HTML, CSS, JS, Python, PHP, React
                    </p>
                </div>
                <div className="card">
                    <h3>
                        Administración de Redes
                    </h3>
                    <p>
                    Experiencia en la instalación de redes informática y en su mantenimiento, para domicilios escuelas, hoteles, restaurantes...
                    </p>
                </div>
                <div className="card">
                    <h3>
                        Mantenimiento de Equipos
                    </h3>
                    <p>
                        Conocimiento sobre el montage y mantenimiento de equipos, puedo realizar tareas como montar equipos , limpieza, instalación de Sistamas Operativos, Gestión de discos y recuperacion de datos perdidos.
                    </p>
                </div>
            </div>
        </article>
    );
}

export default Skills;
