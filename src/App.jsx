import { useState } from "react";
import "./styles.css";
import Preloader from "./components/Preloader";
import Reveal from "./components/Reveal";
import HeroSlider from "./components/HeroSlider";

const WHATSAPP_PHONE = "59891086124";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola! 😊\n\nQuiero cotizar una limpieza en Colonia del Sacramento.\n\nNecesito:\n• [Tipo: general/profunda/mudanza]\n• [Dirección]\n• [Tamaño/ambientes]\n• [Fecha/horario preferido]\n\n¿Tienen disponibilidad?"
);
const WA_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${WHATSAPP_MSG}`;

function NavLink({ href, children, onClick }) {
  return (
    <a className="navLink" href={href} onClick={onClick}>
      {children}
    </a>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Preloader />
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
              <div className="brandMark">
                <img src="/logo1.png" alt="alcina's Servicios de limpieza integral" className="logo" />
              </div>
              <div className="brandText">
                <div className="brandName">alcina's</div>
                <div className="brandSub">Servicios de limpieza integral</div>
              </div>
            </div>

            <nav className="nav">
              <NavLink href="#quienes">Quiénes somos</NavLink>
              <NavLink href="#servicios">Servicios</NavLink>
              <NavLink href="#por-que">Por qué elegirnos</NavLink>
              <NavLink href="#contacto">Contacto</NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className={`mobileMenuToggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="mobileMenuOverlay" onClick={closeMobileMenu}></div>
        )}

        {/* Mobile Menu */}
        <div className={`mobileMenu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobileMenuContent">
            <div className="mobileMenuHeader">
              <div className="mobileMenuPhone">📱 +598 91 086 124</div>
              <button
                className="mobileMenuClose"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <nav className="mobileNav">
              <NavLink href="#quienes" onClick={closeMobileMenu}>Quiénes somos</NavLink>
              <NavLink href="#servicios" onClick={closeMobileMenu}>Servicios</NavLink>
              <NavLink href="#por-que" onClick={closeMobileMenu}>Por qué elegirnos</NavLink>
              <NavLink href="#contacto" onClick={closeMobileMenu}>Contacto</NavLink>
            </nav>
            <div className="mobileMenuActions">
              <a className="btn primary fullWidth" href={WA_URL} target="_blank" rel="noreferrer" onClick={closeMobileMenu}>
                💬 WhatsApp
              </a>
              <a className="btn ghost fullWidth" href={`mailto:alcinas.limpieza@gmail.com`} onClick={closeMobileMenu}>
                📩 Email
              </a>
            </div>
          </div>
        </div>

        {/* Hero Slider */}
        <HeroSlider whatsappUrl={WA_URL} />

        {/* Quiénes somos */}
        <section className="section" id="quienes">
          <div className="container">
            <Reveal>
              <h2>Quiénes somos</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="muted">
                Somos un <strong>emprendimiento familiar</strong> de limpieza, dedicado a realizar limpiezas puntuales y a medida,
                con atención personalizada y mucho cuidado en los detalles. Trabajamos con responsabilidad, respeto y dedicación en Colonia del Sacramento.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Servicios */}
        <section className="section alt" id="servicios">
          <div className="container">
            <Reveal>
              <h2>✨ Qué tipo de servicios realizamos</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted" style={{ marginBottom: '24px' }}>
                Ofrecemos <strong>limpiezas puntuales</strong> adaptándonos a cada necesidad en particular:
              </p>
            </Reveal>
            <div className="grid3">
              <Reveal delay={0.06}>
                <div className="card">
                  <div className="cardImage">
                    <img src="/vidrio.png" alt="Limpieza de casas y apartamentos" />
                  </div>
                  <h3>Casas y apartamentos</h3>
                  <p className="muted">Limpiezas generales: baño, cocina, pisos, polvo y orden general.</p>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="card">
                  <div className="cardImage">
                    <img src="/lampazo.jpg" alt="Limpieza profunda" />
                  </div>
                  <h3>Limpieza profunda</h3>
                  <p className="muted">Detalle intensivo para "reset" completo. A coordinar previamente.</p>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="card">
                  <div className="cardImage">
                    <img src="/limpiazapasto.png" alt="Limpieza por mudanza o fin de alquiler" />
                  </div>
                  <h3>Por mudanza o fin de alquiler</h3>
                  <p className="muted">Ideal para dejar el lugar listo para entregar llaves o entrar.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="section" id="por-que">
          <div className="container">
            <Reveal>
              <h2>🧹 Cómo trabajamos</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="muted" style={{ marginBottom: '24px' }}>
                Nosotros llevamos todo lo necesario, vos solo necesitás tener disponible la aspiradora:
              </p>
            </Reveal>
            <div className="grid3">
              <Reveal delay={0.06}>
                <div className="card">
                  <h3>Productos incluidos</h3>
                  <p className="muted">Llevamos productos de limpieza, paños de microfibra, elementos para baño, cocina y pisos, guantes y bolsas de residuos.</p>
                </div>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="card">
                  <h3>Modalidad flexible</h3>
                  <p className="muted">Trabajamos por horas o por trabajo acordado. Día y horario coordinados previamente. La duración se estima según el tamaño y estado del lugar.</p>
                </div>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="card">
                  <h3>Presupuesto claro</h3>
                  <p className="muted">El valor depende del tamaño del espacio, tipo de limpieza y horas necesarias. Te enviamos una cotización clara antes de confirmar.</p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="paymentCard">
                <h3 style={{ marginTop: 0 }}>💳 Forma de pago</h3>
                <p className="muted">
                  Aceptamos <strong>transferencia bancaria</strong>. Para reservar el horario solicitamos el <strong>pago previo</strong>.
                  Una vez confirmado el pago, el servicio queda agendado ✅
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="cta" id="contacto">
          <div
            className="cta-background"
            style={{
              backgroundImage: `linear-gradient(rgba(37, 99, 235, 0.85), rgba(59, 130, 246, 0.85)), url(/ventanales.png)`,
            }}
          >
            <div className="container ctaRow">
              <Reveal>
                <div>
                  <h2>✨ ¿Querés presupuesto hoy?</h2>
                  <p className="muted">
                    Escribinos por WhatsApp con: dirección, tipo de limpieza, tamaño/ambientes y fecha/horario preferido.
                    Te respondemos a la brevedad. Colonia del Sacramento.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <a className="btn primary" href={WA_URL} target="_blank" rel="noreferrer">
                  Abrir WhatsApp
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container footerGrid">
            <div>
              <div className="brandName">alcina's</div>
              <p className="muted">Servicios de limpieza integral</p>
              <p className="muted">Colonia del Sacramento, Uruguay</p>
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
            <span className="muted">© {new Date().getFullYear()} alcina’s</span>
          </div>
        </footer>

        {/* WhatsApp floating */}
        <a className="wa" href={WA_URL} target="_blank" rel="noreferrer">
          WhatsApp
        </a>
      </div>
    </>
  );
}
