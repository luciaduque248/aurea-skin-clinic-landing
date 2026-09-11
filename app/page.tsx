import { BookingForm } from "@/components/booking-form";
import { SkinFocus } from "@/components/skin-focus";

const careLines = [
  {
    number: "01",
    title: "Textura",
    copy: "Rutina, tolerancia y cambios percibidos antes de considerar cualquier procedimiento.",
    tone: "peach",
  },
  {
    number: "02",
    title: "Tono",
    copy: "Contexto, hábitos y antecedentes antes de hablar de pigmentación o protocolos.",
    tone: "lilac",
  },
  {
    number: "03",
    title: "Sensibilidad",
    copy: "Barrera, reactividad y experiencias previas como punto de partida del cuidado.",
    tone: "mint",
  },
];

const process = [
  ["01", "Cuéntanos qué buscas", "El objetivo llega antes que el tratamiento."],
  ["02", "Valoración profesional", "Se revisan contexto, hábitos, antecedentes y tolerancia."],
  ["03", "Ruta clara", "Se explican opciones, límites y próximos pasos sin presión."],
  ["04", "Seguimiento", "La evolución se revisa antes de cambiar cualquier plan."],
];

const faqs = [
  [
    "¿AUREA Skin Clinic es una clínica real?",
    "No. Es un concepto ficticio de portafolio creado para demostrar UX/UI, frontend y estrategia de conversión aplicada a una clínica estética.",
  ],
  [
    "¿La página recomienda tratamientos médicos?",
    "No. La experiencia solo organiza motivos de consulta y preguntas. No diagnostica ni sustituye una valoración profesional.",
  ],
  [
    "¿El formulario agenda una cita real?",
    "No. El envío termina en un estado de éxito local y no almacena datos personales, historia clínica ni solicitudes reales.",
  ],
  [
    "¿Por qué no aparecen testimonios o porcentajes de resultados?",
    "Porque el proyecto no tiene pacientes ni evidencia clínica propia. No se inventan testimonios, credenciales, resultados ni métricas.",
  ],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" className="brand" aria-label="AUREA Skin Clinic, inicio">
            <span className="brand-orb" aria-hidden="true">A</span>
            <span className="brand-copy">
              <strong>AUREA</strong>
              <small>skin clinic</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#cuidados">Cuidados</a>
            <a href="#enfoque">Valoración</a>
            <a href="#proceso">Proceso</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a href="#valoracion" className="button button-dark">Reservar valoración</a>
        </div>
      </header>

      <section id="inicio" className="hero section-shell">
        <div className="hero-copy">
          <p className="kicker">Dermatología estética · concepto de portafolio</p>
          <h1>
            Tu piel,
            <span>sin filtros.</span>
          </h1>
          <p className="hero-description">
            Una experiencia digital para una clínica estética contemporánea: visual, cercana y clara. Primero entendemos lo que quieres conversar; después tendría sentido hablar de opciones.
          </p>

          <div className="hero-actions">
            <a href="#valoracion" className="button button-pink">Agendar valoración</a>
            <a href="#enfoque" className="button button-ghost">Explorar la experiencia</a>
          </div>

          <div className="hero-chips" aria-label="Motivos de consulta conceptuales">
            <span>Textura</span>
            <span>Tono</span>
            <span>Sensibilidad</span>
          </div>
        </div>

        <div className="hero-visual">
          <div
            className="hero-photo"
            role="img"
            aria-label="Retrato editorial de belleza y cuidado de la piel"
          />
          <div className="hero-glow" aria-hidden="true" />

          <div className="floating-card floating-card-top">
            <span className="mini-dot" aria-hidden="true" />
            <div>
              <small>AUREA approach</small>
              <strong>Assessment first</strong>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <small>Antes de recomendar</small>
            <strong>Escuchar · Evaluar · Explicar</strong>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="section-shell trust-strip-inner">
          <span>Beauty-tech, no spa cliché</span>
          <span>Valoración antes de tratamiento</span>
          <span>Sin promesas médicas inventadas</span>
          <span>UX responsive + accesible</span>
        </div>
      </section>

      <section id="cuidados" className="care section-shell">
        <div className="section-heading">
          <div>
            <p className="kicker">01 · Motivos de consulta</p>
            <h2>Lo que ves en el espejo no siempre cuenta toda la historia.</h2>
          </div>
          <p>
            AUREA organiza la conversación alrededor de necesidades reales, no de un catálogo de tratamientos que empuja a comprar antes de entender el caso.
          </p>
        </div>

        <div className="care-grid">
          {careLines.map((item) => (
            <article key={item.number} className={`care-card care-card-${item.tone}`}>
              <div className="care-card-top">
                <span>{item.number}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
              <a href="#valoracion">Conversarlo en valoración</a>
            </article>
          ))}
        </div>
      </section>

      <section id="enfoque" className="focus-section">
        <div className="section-shell focus-shell">
          <div className="focus-intro">
            <p className="kicker">02 · Skin check-in</p>
            <h2>Una experiencia que se siente más beauty que formulario médico.</h2>
            <p>
              La persona elige qué quiere conversar y la interfaz le ayuda a ordenar preguntas. No entrega diagnósticos ni recomendaciones automáticas.
            </p>
          </div>
          <SkinFocus />
        </div>
      </section>

      <section id="proceso" className="process section-shell">
        <div className="process-heading">
          <p className="kicker">03 · Así funcionaría</p>
          <h2>Una cita que empieza antes de llegar.</h2>
        </div>

        <div className="process-grid">
          {process.map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="beauty-tech">
        <div className="section-shell beauty-tech-grid">
          <div className="beauty-tech-copy">
            <p className="kicker kicker-light">04 · Tecnología con criterio</p>
            <h2>Más tecnología no significa mejor cuidado.</h2>
            <p>
              En un proyecto clínico real, aquí aparecerían equipos y procedimientos únicamente con información verificable. En esta demo mostramos el principio de producto: explicar para qué sirve algo antes de venderlo.
            </p>
            <a href="#valoracion" className="button button-light">Llevar mis preguntas</a>
          </div>

          <div className="scan-card" aria-label="Visual conceptual de una evaluación de piel">
            <div className="scan-card-header">
              <span>Skin profile</span>
              <span>Concept demo</span>
            </div>
            <div className="scan-face" aria-hidden="true">
              <span className="scan-ring scan-ring-one" />
              <span className="scan-ring scan-ring-two" />
              <span className="scan-center">A</span>
            </div>
            <div className="scan-pills">
              <span>Context</span>
              <span>Tolerance</span>
              <span>History</span>
              <span>Goals</span>
            </div>
          </div>
        </div>
      </section>

      <section className="integrity section-shell">
        <div className="integrity-card">
          <span className="integrity-icon" aria-hidden="true">✦</span>
          <div>
            <p className="kicker">05 · Portfolio integrity</p>
            <h2>Una estética creíble también necesita información creíble.</h2>
          </div>
          <p>
            Por eso AUREA no inventa profesionales, credenciales, testimonios, antes/después, porcentajes de éxito ni equipos con beneficios clínicos ficticios.
          </p>
        </div>
      </section>

      <section id="faq" className="faq section-shell">
        <div className="faq-heading">
          <p className="kicker">06 · Preguntas frecuentes</p>
          <h2>Transparencia antes de reservar.</h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary>
                <span>{question}</span>
                <span className="faq-plus" aria-hidden="true">+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="valoracion" className="booking">
        <div className="section-shell booking-grid-shell">
          <div className="booking-copy">
            <p className="kicker kicker-light">07 · Reserva una valoración</p>
            <h2>Empieza por lo que quieres entender de tu piel.</h2>
            <p>
              Este cierre demuestra un funnel de conversión para una clínica estética sin fingir que existe una agenda o un servicio médico real detrás de la demo.
            </p>
            <div className="booking-badges">
              <span>Sin CRM</span>
              <span>Sin tracking</span>
              <span>Sin almacenamiento</span>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <div className="brand brand-footer">
            <span className="brand-orb" aria-hidden="true">A</span>
            <span className="brand-copy">
              <strong>AUREA</strong>
              <small>skin clinic</small>
            </span>
          </div>
          <div>
            <p>UX/UI · Frontend · Conversion landing</p>
            <p>Concepto ficticio desarrollado como caso de portafolio.</p>
          </div>
        </div>
      </footer>

      <a href="#valoracion" className="mobile-cta">Agendar valoración <span aria-hidden="true">↗</span></a>
    </main>
  );
}
