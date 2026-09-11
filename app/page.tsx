import { BookingForm } from "@/components/booking-form";
import { SkinFocus } from "@/components/skin-focus";

const principles = [
  {
    number: "01",
    title: "Escuchar",
    copy: "La consulta empieza por contexto: qué notas, qué has probado, qué te preocupa y qué resultado esperas comprender mejor.",
  },
  {
    number: "02",
    title: "Evaluar",
    copy: "La experiencia ordena antecedentes, tolerancia, hábitos y señales relevantes antes de plantear cualquier procedimiento.",
  },
  {
    number: "03",
    title: "Diseñar",
    copy: "Solo después de valorar tendría sentido construir una ruta individual, explicando límites, alternativas y próximos pasos.",
  },
];

const process = [
  ["01", "Valoración inicial", "Conversación, antecedentes y revisión del objetivo de consulta."],
  ["02", "Criterio clínico", "Definición de qué conviene observar, descartar o derivar antes de intervenir."],
  ["03", "Ruta personalizada", "Explicación clara de opciones posibles, límites y cuidados asociados."],
  ["04", "Seguimiento", "Revisión de evolución y ajuste de la ruta solo cuando corresponda."],
];

const careLines = [
  {
    title: "Textura & renovación",
    copy: "Una línea conceptual para explorar irregularidad percibida, tolerancia y objetivos antes de recomendar procedimientos.",
    label: "Assessment first",
  },
  {
    title: "Tono & pigmentación",
    copy: "Pensada para ordenar antecedentes y cambios de tono antes de hablar de protocolos o tecnologías.",
    label: "Context driven",
  },
  {
    title: "Barrera & sensibilidad",
    copy: "Prioriza tolerancia, rutina y reactividad como parte esencial de cualquier decisión estética responsable.",
    label: "Skin respect",
  },
];

const faqs = [
  [
    "¿AUREA Skin Clinic es una clínica real?",
    "No. AUREA es un caso ficticio de portafolio creado para demostrar estrategia de conversión, UX/UI y desarrollo frontend aplicado a dermatología estética.",
  ],
  [
    "¿Los tratamientos y resultados descritos son promesas médicas?",
    "No. La página evita prometer resultados y presenta únicamente una experiencia conceptual de valoración. Cualquier decisión clínica real requeriría evaluación profesional y evidencia aplicable al caso.",
  ],
  [
    "¿El formulario agenda una cita real?",
    "No. El flujo termina con un estado de éxito local. No existe agenda, CRM, historia clínica ni almacenamiento de datos personales.",
  ],
  [
    "¿Por qué no aparecen testimonios o porcentajes de éxito?",
    "Porque no existen datos reales detrás del caso. El proyecto prioriza transparencia y evita fabricar social proof, credenciales, estadísticas o resultados.",
  ],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" className="brand" aria-label="AUREA Skin Clinic, inicio">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span className="brand-copy">
              <strong>AUREA</strong>
              <small>Skin Clinic</small>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#enfoque">Enfoque</a>
            <a href="#proceso">Proceso</a>
            <a href="#cuidados">Cuidados</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a href="#valoracion" className="button button-clay">Agendar valoración</a>
        </div>
      </header>

      <section id="inicio" className="hero section-shell">
        <div className="hero-topline">
          <p className="eyebrow">Dermatología estética · caso conceptual</p>
          <p className="hero-index">AUREA / 01</p>
        </div>

        <div className="hero-title-grid">
          <h1>Tu piel merece contexto, no promesas.</h1>
          <div className="hero-intro">
            <p>
              Una experiencia de valoración pensada para escuchar primero, evaluar con criterio y explicar cada decisión sin exagerar resultados.
            </p>
            <div className="hero-actions">
              <a href="#valoracion" className="button button-green">Agendar valoración</a>
              <a href="#enfoque" className="text-link">Conocer el enfoque <span aria-hidden="true">↘</span></a>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div
            className="hero-photo"
            role="img"
            aria-label="Retrato editorial de referencia para una campaña de cuidado de la piel"
          />
          <div className="hero-note hero-note-primary">
            <span className="hero-note-dot" aria-hidden="true" />
            <p>Valoración antes de tratar</p>
            <small>La conversación clínica es parte del diseño de la experiencia.</small>
          </div>
          <div className="hero-note hero-note-secondary" aria-hidden="true">
            <span>01</span>
            <p>Escuchar</p>
            <span>02</span>
            <p>Evaluar</p>
            <span>03</span>
            <p>Explicar</p>
          </div>
        </div>

        <div className="hero-foot">
          <p>Clinical-premium · responsive UX · ethical health marketing</p>
          <p>Portfolio concept · 2026</p>
        </div>
      </section>

      <section className="principles section-shell">
        <div className="section-heading split-heading">
          <p className="eyebrow">01 · Antes del tratamiento</p>
          <h2>El cuidado empieza por entender la historia completa.</h2>
        </div>
        <div className="principle-grid">
          {principles.map((item) => (
            <article key={item.number} className="principle-card">
              <span>{item.number}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="enfoque" className="focus-section">
        <div className="section-shell">
          <div className="focus-heading">
            <div>
              <p className="eyebrow eyebrow-light">02 · Valoración AUREA</p>
              <h2>Una interfaz para organizar preguntas antes de una consulta.</h2>
            </div>
            <p>
              Este módulo demuestra cómo una landing de salud puede ayudar a una persona a reconocer qué quiere conversar sin convertir la interfaz en un diagnóstico automático.
            </p>
          </div>
          <SkinFocus />
        </div>
      </section>

      <section id="proceso" className="process section-shell">
        <div className="process-visual">
          <div
            className="process-photo"
            role="img"
            aria-label="Detalle editorial de manos y cuidado de la piel usado como referencia visual"
          />
          <div className="process-caption">
            <p>Care before claims.</p>
            <span>AUREA / process</span>
          </div>
        </div>

        <div className="process-copy">
          <p className="eyebrow">03 · Cómo funciona</p>
          <h2>Una cita clara desde antes de llegar.</h2>
          <p className="section-lead">
            El objetivo de la experiencia no es vender un procedimiento a toda costa, sino reducir incertidumbre y preparar una conversación responsable.
          </p>
          <div className="process-list">
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
        </div>
      </section>

      <section className="technology">
        <div className="section-shell technology-grid">
          <div className="technology-copy">
            <p className="eyebrow">04 · Tecnología con criterio</p>
            <h2>El dispositivo no es el tratamiento. La indicación importa.</h2>
            <p>
              En un sitio clínico real, esta sección explicaría tecnologías concretas con nombre, indicaciones, contraindicaciones y evidencia verificable. En este caso conceptual evitamos inventar equipos o beneficios clínicos.
            </p>
            <a href="#valoracion" className="text-link">Llevar mis preguntas a valoración <span aria-hidden="true">↗</span></a>
          </div>
          <div className="technology-card">
            <div className="tech-orbit" aria-hidden="true">
              <span className="tech-orbit-ring tech-ring-one" />
              <span className="tech-orbit-ring tech-ring-two" />
              <span className="tech-core">A</span>
            </div>
            <div className="technology-card-copy">
              <p className="eyebrow">Principio de diseño</p>
              <h3>Explicar antes de persuadir.</h3>
              <p>La página usa claridad, consentimiento informado y límites visibles como parte de la conversión.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cuidados" className="care section-shell">
        <div className="section-heading care-heading">
          <div>
            <p className="eyebrow">05 · Líneas de cuidado</p>
            <h2>Tres motivos de consulta. Ninguna promesa automática.</h2>
          </div>
          <p className="section-lead">
            Categorías conceptuales para mostrar cómo organizar una oferta clínica sin convertir una landing en un catálogo agresivo de procedimientos.
          </p>
        </div>

        <div className="care-grid">
          {careLines.map((item, index) => (
            <article key={item.title} className={`care-card care-card-${index + 1}`}>
              <p className="care-label">{item.label}</p>
              <div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
              <a href="#valoracion" aria-label={`Agendar valoración para conversar sobre ${item.title}`}>↗</a>
            </article>
          ))}
        </div>
      </section>

      <section className="team-strip">
        <div className="section-shell team-grid">
          <div>
            <p className="eyebrow eyebrow-light">06 · Equipo clínico</p>
            <h2>Credenciales reales o nada.</h2>
          </div>
          <div className="team-note">
            <p>
              En una implementación real, aquí aparecerían profesionales verificables con nombre, especialidad, registro y formación. Como AUREA es ficticio, no inventamos médicos ni credenciales.
            </p>
            <span>Portfolio integrity / verified data only</span>
          </div>
        </div>
      </section>

      <section id="faq" className="faq section-shell">
        <div className="faq-heading">
          <p className="eyebrow">07 · Transparencia</p>
          <h2>Preguntas que deberían resolverse antes de reservar.</h2>
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
            <p className="eyebrow eyebrow-light">08 · Agenda una valoración</p>
            <h2>La decisión empieza con una conversación.</h2>
            <p>
              Este formulario demuestra el cierre de un funnel de salud de forma transparente. La demo no ofrece atención médica real ni almacena información.
            </p>
            <div className="booking-meta">
              <span>Sin CRM</span>
              <span>Sin tracking</span>
              <span>Sin historia clínica</span>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <div className="brand brand-footer">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span className="brand-copy">
              <strong>AUREA</strong>
              <small>Skin Clinic</small>
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
