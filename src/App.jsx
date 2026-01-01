import "./styles.css";

const WHATSAPP_PHONE = "59891086124";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola! Quiero cotizar una limpieza en Colonia del Sacramento. ¿Tienen disponibilidad?"
);
const WA_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MSG}`;

function NavLink({ href, children }) {
  return (
    <a className="navLink" href={href}>
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="page">
      {/* Topbar */}
      <div className="topbar">
        <div className="container topbarRow">
          <div className="topbarLeft">
            <span>📩 alcinas.limpieza@gmail.com</span>
            <span className="sep">•</span>
            <span>📱 091 086 124</span>
          </div>
          <a className="topbarCta" href={WA_URL} target="_blank" rel="noreferrer">
            Pedir presupuesto
          </a>
        </div>
      </div>

      {/* Navbar */}
      <header className="header">
        <div className="container headerRow">
          <div className="brand">
            <div className="brandMark">A</div>
            <div className="brandText">
              <div className="brandName">Alcina’s</div>
              <div className="brandSub">Limpieza · Colonia</div>
            </div>
          </div>

          <nav className="nav">
            <NavLink href="#quienes">Quiénes somos</NavLink>
            <NavLink href="#servicios">Servicios</NavLink>
            <NavLink href="#por-que">Por qué elegirnos</NavLink>
            <NavLink href="#contacto">Contacto</NavLink>
          </nav>

          <a className="btn primary hideMobile" href={WA_URL} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="inicio">
        <div className="container heroGrid">
          <div>
            <p className="kicker">Servicios de limpieza en Colonia del Sacramento</p>
            <h1>Prolijidad, confianza y coordinación fácil por WhatsApp.</h1>
            <p className="muted">
              Hogares, oficinas, Airbnb, limpiezas profundas y lo que necesites. Nos adaptamos a cada caso.
            </p>

            <div className="actions">
              <a className="btn primary" href={WA_URL} target="_blank" rel="noreferrer">
                Pedir presupuesto
              </a>
              <a className="btn ghost" href="#servicios">
                Ver servicios
              </a>
            </div>

            <ul className="checks">
              <li>✔ Puntualidad y responsabilidad</li>
              <li>✔ Atención personalizada</li>
              <li>✔ Colonia y alrededores</li>
            </ul>
          </div>

          <div className="heroCard">
            <h3>Presupuesto rápido</h3>
            <p className="muted">
              Escribinos y contanos: zona + tipo de lugar + qué limpieza necesitás. Te respondemos a la brevedad.
            </p>
            <div className="miniGrid">
              <div className="mini">
                <strong>Hogar</strong>
                <span className="muted">regular o profunda</span>
              </div>
              <div className="mini">
                <strong>Oficinas</strong>
                <span className="muted">planes mensuales</span>
              </div>
              <div className="mini">
                <strong>Airbnb</strong>
                <span className="muted">check-in / out</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="section" id="quienes">
        <div className="container">
          <h2>Quiénes somos</h2>
          <p className="muted">
            Alcina’s es un servicio local de limpieza en Colonia del Sacramento. Trabajamos con seriedad,
            discreción y mucho detalle. Nuestro objetivo es que te despreocupes y quede todo impecable.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="section alt" id="servicios">
        <div className="container">
          <h2>Servicios</h2>
          <div className="grid3">
            <div className="card">
              <h3>Limpieza general</h3>
              <p className="muted">Casas y apartamentos: baño, cocina, pisos, polvo y orden general.</p>
            </div>
            <div className="card">
              <h3>Limpieza profunda</h3>
              <p className="muted">Detalle intensivo para “reset”: rincones, cocina/baños, más profundidad.</p>
            </div>
            <div className="card">
              <h3>Oficinas y comercios</h3>
              <p className="muted">Mantenimientos semanales o planes mensuales (según necesidad).</p>
            </div>
            <div className="card">
              <h3>Airbnb</h3>
              <p className="muted">Limpieza para check-in/check-out. Coordinación rápida.</p>
            </div>
            <div className="card">
              <h3>Post mudanza / entrega</h3>
              <p className="muted">Ideal para dejar el lugar listo para entregar llaves o entrar.</p>
            </div>
            <div className="card">
              <h3>A medida</h3>
              <p className="muted">¿Algo especial? Lo vemos por WhatsApp y lo resolvemos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="section" id="por-que">
        <div className="container">
          <h2>Por qué elegir Alcina’s</h2>
          <div className="grid3">
            <div className="card">
              <h3>Confianza</h3>
              <p className="muted">Trabajo responsable y cuidadoso con tu hogar o negocio.</p>
            </div>
            <div className="card">
              <h3>Prolijidad</h3>
              <p className="muted">Nos enfocamos en el detalle para que se note el resultado.</p>
            </div>
            <div className="card">
              <h3>Coordinación simple</h3>
              <p className="muted">Todo por WhatsApp: presupuesto, horarios y seguimiento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contacto">
        <div className="container ctaRow">
          <div>
            <h2>¿Querés presupuesto hoy?</h2>
            <p className="muted">Escribinos por WhatsApp y coordinamos. Colonia del Sacramento.</p>
          </div>
          <a className="btn primary" href={WA_URL} target="_blank" rel="noreferrer">
            Abrir WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <div className="brandName">Alcina’s</div>
            <p className="muted">Limpieza · Colonia del Sacramento, Uruguay</p>
          </div>
          <div>
            <strong>Contacto</strong>
            <p className="muted">WhatsApp: 091 086 124</p>
            <p className="muted">Horario: a coordinar</p>
          </div>
          <div>
            <strong>Secciones</strong>
            <p className="muted"><a href="#servicios">Servicios</a></p>
            <p className="muted"><a href="#por-que">Por qué elegirnos</a></p>
          </div>
        </div>

        <div className="container footerBottom">
          <span className="muted">© {new Date().getFullYear()} Alcina’s</span>
        </div>
      </footer>

      {/* WhatsApp floating */}
      <a className="wa" href={WA_URL} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  );
}
