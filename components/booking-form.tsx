"use client";

import { FormEvent, useRef, useState } from "react";

export function BookingForm() {
  const [sent, setSent] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSent(true);
    requestAnimationFrame(() => successRef.current?.focus());
  }

  if (sent) {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        className="booking-success"
        role="status"
        aria-live="polite"
      >
        <span className="booking-success-mark" aria-hidden="true">✓</span>
        <p className="eyebrow eyebrow-light">Solicitud demostrativa completada</p>
        <h3>Tu valoración quedaría reservada aquí.</h3>
        <p>
          En una implementación real, este paso conectaría con agenda, CRM o confirmación por correo. En esta demo no almacenamos ni enviamos datos.
        </p>
        <button type="button" className="text-link text-link-light" onClick={() => setSent(false)}>
          Volver al formulario <span aria-hidden="true">↗</span>
        </button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate={false}>
      <div className="booking-grid">
        <label>
          <span>Nombre</span>
          <input name="name" type="text" autoComplete="name" placeholder="Tu nombre" required />
        </label>
        <label>
          <span>Correo</span>
          <input name="email" type="email" autoComplete="email" placeholder="nombre@correo.com" required />
        </label>
        <label>
          <span>Teléfono</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+57 300 000 0000" required />
        </label>
        <label>
          <span>Motivo de valoración</span>
          <select name="focus" defaultValue="" required>
            <option value="" disabled>Selecciona una opción</option>
            <option value="texture">Textura y uniformidad</option>
            <option value="tone">Tono y apariencia de manchas</option>
            <option value="sensitivity">Sensibilidad y tolerancia</option>
            <option value="unsure">No estoy segura todavía</option>
          </select>
        </label>
      </div>

      <label className="booking-message">
        <span>¿Qué te gustaría conversar en la valoración?</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Cuéntanos tu objetivo o las preguntas que quisieras llevar a consulta."
        />
      </label>

      <label className="booking-consent">
        <input type="checkbox" required name="portfolio-disclaimer" />
        <span>
          Entiendo que AUREA Skin Clinic es un caso ficticio de portafolio y que este formulario no presta un servicio médico ni enviará mis datos.
        </span>
      </label>

      <div className="booking-footer">
        <p>Demo de UX. Sin diagnóstico, agenda real, almacenamiento ni seguimiento clínico.</p>
        <button type="submit" className="button button-ivory">Agendar valoración</button>
      </div>
    </form>
  );
}
