"use client";

import { useState } from "react";

const focuses = [
  {
    id: "texture",
    label: "Textura",
    title: "Empecemos por cómo se siente y se ve tu piel.",
    copy: "La valoración revisaría rutina, antecedentes, tolerancia y aquello que percibes como textura irregular. La interfaz solo organiza la conversación; no diagnostica.",
    checks: ["Rutina actual", "Cambios recientes", "Tolerancia", "Objetivo de consulta"],
  },
  {
    id: "tone",
    label: "Tono",
    title: "El contexto importa antes de hablar de pigmentación.",
    copy: "Se organizarían preguntas sobre cuándo aparecieron cambios de tono, hábitos relevantes y productos utilizados antes de considerar cualquier ruta clínica.",
    checks: ["Historia del cambio", "Exposición y hábitos", "Productos previos", "Preguntas para consulta"],
  },
  {
    id: "sensitivity",
    label: "Sensibilidad",
    title: "La tolerancia también forma parte del cuidado.",
    copy: "La experiencia pone el foco en reacciones previas, sensaciones frecuentes y rutina para que una valoración profesional tenga mejor contexto.",
    checks: ["Reacciones previas", "Sensaciones frecuentes", "Activos utilizados", "Límites y expectativas"],
  },
];

export function SkinFocus() {
  const [activeId, setActiveId] = useState("texture");
  const active = focuses.find((item) => item.id === activeId) ?? focuses[0];

  return (
    <div className="focus-panel">
      <div className="focus-tabs" role="tablist" aria-label="Motivo principal de valoración">
        {focuses.map((item, index) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeId === item.id}
            className={activeId === item.id ? "focus-tab is-active" : "focus-tab"}
            onClick={() => setActiveId(item.id)}
          >
            <span className="focus-tab-index">0{index + 1}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      <div className="focus-content" role="tabpanel">
        <div>
          <p className="kicker">Skin check-in · demo UX</p>
          <h3>{active.title}</h3>
          <p className="focus-copy">{active.copy}</p>
        </div>

        <div className="focus-checks">
          {active.checks.map((item) => (
            <div key={item} className="focus-check">
              <span aria-hidden="true">✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="focus-note">
        Contenido conceptual de portafolio. No constituye diagnóstico, indicación ni recomendación médica.
      </p>
    </div>
  );
}
