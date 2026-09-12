import { BookingForm } from "@/components/booking-form";
import { SkinFocus } from "@/components/skin-focus";

const treatments = [
  {
    title: "Piel",
    copy: "Valoración de textura, luminosidad, tolerancia y hábitos para construir una conversación de cuidado con criterio.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=88",
  },
  {
    title: "Facial",
    copy: "Una experiencia orientada a limpieza, hidratación y bienestar facial sin prometer resultados automáticos.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=88",
  },
  {
    title: "Corporal",
    copy: "Motivos de consulta corporal organizados desde contexto, objetivos realistas y valoración profesional previa.",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=88",
  },
];

const benefits = [
  ["01", "Valoración con criterio", "La consulta empieza por contexto antes de hablar de procedimientos."],
  ["02", "Tecnología explicada", "Equipos y técnicas solo tendrían sentido con información verificable."],
  ["03", "Cuidado personalizado", "La ruta se adapta a objetivos, tolerancia y antecedentes."],
  ["04", "Resultados sin promesas", "Comunicación clara, sin claims, urgencia ni testimonios inventados."],
];

const faqs = [
  [
    "¿AUREA Skin Clinic es una clínica real?",
    "No. AUREA es un concepto ficticio de portafolio creado para demostrar UX/UI, frontend y estrategia de conversión aplicada a una clínica estética.",
  ],
  [
    "¿Cómo elegiría el tratamiento adecuado?",
    "En una implementación real, la decisión dependería de una valoración profesional. La interfaz no diagnostica ni recomienda tratamientos de forma automática.",
  ],
  [
    "¿El formulario agenda una cita real?",
    "No. El flujo termina en un estado de éxito local y no almacena datos personales, historia clínica ni solicitudes reales.",
  ],
  [
    "¿Por qué no aparecen testimonios o porcentajes de éxito?",
    "Porque el proyecto no tiene pacientes ni evidencia clínica propia. No se inventan testimonios, credenciales, resultados ni métricas.",
  ],
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <a href="#inicio" className="brand" aria-label="AUREA Skin Clinic, inicio">
            <span className="brand-word">AUREA</span>
            <span className="brand-sub">Aesthetic Clinic</span>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#inicio">Inicio</a>
            <a href="#tratamientos">Tratamientos</a>
            <a href="#sobre-aurea">Sobre AUREA</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a href="#valoracion" className="button button-primary">Agendar cita</a>
        </div>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-inner section-shell">
          <div className="hero-copy">
            <p className="eyebrow">Cuidado avanzado. Belleza natural.</p>
            <h1>Tu mejor versión, <em>refinada.</em></h1>
            <div className="hero-rule" aria-hidden="true" />
            <p className="hero-description">
              Una experiencia estética personalizada diseñada para resaltar tu belleza natural con criterio, calma y una comunicación responsable.
            </p>
            <div className="hero-actions">
              <a href="#valoracion" className="button button-primary">Agendar valoración</a>
              <a href="#tratamientos" className="button button-secondary">Ver tratamientos</a>
            </div>
          </div>

          <div className="hero-visual" role="img" aria-label="Retrato editorial de belleza y cuidado de la piel">
            <div className="hero-seal" aria-hidden="true">
              <span>A</span>
              <small>AUREA · NATURAL BEAUTY</small>
            </div>
          </div>
        </div>
      </section>

      <section id="tratamientos" className="treatments section-shell">
        <div className="section-heading centered">
          <p className="eyebrow">Tratamientos destacados</p>
          <h2>Diseñados para ti</h2>
        </div>

        <div className="treatment-grid">
          {treatments.map((item) => (
            <article key={item.title} className="treatment-card">
              <div className="treatment-image" style={{ backgroundImage: `url(${item.image})` }} role="img" aria-label={`Imagen conceptual para ${item.title}`} />
              <div className="treatment-body">
                <div className="treatment-icon" aria-hidden="true">✦</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <a href="#valoracion">Descubrir <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="confidence-banner">
        <div className="confidence-overlay" />
        <div className="section-shell confidence-content">
          <div>
            <p className="eyebrow eyebrow-light">Belleza. Confianza. Tú.</p>
            <h2>La confianza empieza contigo.</h2>
            <a href="#valoracion" className="button button-light">Agendar valoración</a>
          </div>
          <p>
            Un entorno visual sereno, profesional y cálido para acompañar una experiencia estética donde primero se escucha y después se decide.
          </p>
        </div>
      </section>

      <section className="benefits">
        <div className="section-shell benefits-grid">
          {benefits.map(([number, title, copy]) => (
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

      <section id="sobre-aurea" className="about section-shell">
        <div className="about-image" role="img" aria-label="Interior conceptual de clínica estética premium" />
        <div className="about-copy">
          <p className="eyebrow">Sobre AUREA</p>
          <h2>Estética contemporánea con una experiencia pensada al detalle.</h2>
          <p>
            AUREA combina una dirección visual cálida y sofisticada con una experiencia digital simple: información clara, navegación limpia y un funnel que conduce a la valoración sin presionar ni exagerar beneficios.
          </p>
          <div className="about-points">
            <span>Atención centrada en la persona</span>
            <span>Diseño responsive y accesible</span>
            <span>Conversión ética y transparente</span>
          </div>
        </div>
      </section>

      <section className="assessment">
        <div className="section-shell assessment-grid">
          <div className="assessment-copy">
            <p className="eyebrow">Valoración AUREA</p>
            <h2>Tu piel tiene contexto. La consulta también debería tenerlo.</h2>
            <p>
              Elige el motivo que te gustaría conversar. La interfaz organiza preguntas útiles sin convertirse en un sistema de diagnóstico.
            </p>
          </div>
          <SkinFocus />
        </div>
      </section>

      <section id="faq" className="faq section-shell">
        <div className="faq-heading">
          <p className="eyebrow">Preguntas frecuentes</p>
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
            <p className="eyebrow eyebrow-light">Agenda una valoración</p>
            <h2>Tu experiencia empieza con una conversación.</h2>
            <p>
              Demo de portafolio. El formulario no presta atención médica real ni almacena información personal.
            </p>
            <div className="booking-meta">
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
            <span className="brand-word">AUREA</span>
            <span className="brand-sub">Aesthetic Clinic</span>
          </div>
          <div className="footer-copy">
            <p>UX/UI · Frontend · Conversion landing</p>
            <p>Concepto ficticio desarrollado como caso de portafolio.</p>
          </div>
        </div>
      </footer>

      <a href="#valoracion" className="mobile-cta">Agendar valoración <span aria-hidden="true">→</span></a>
    </main>
  );
}
