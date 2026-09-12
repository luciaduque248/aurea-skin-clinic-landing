"use client";

import { useState } from "react";

const focuses = [
  {
    id: "texture",
    label: "Textura",
    title: "Entender la piel antes de intervenir.",
    copy: "La valoración revisaría rutina, tolerancia, antecedentes y cambios percibidos. El objetivo es ordenar la conversación, no automatizar un diagnóstico.",
    checks: ["Rutina y productos actuales", "Cambios recientes", "Tolerancia y sensibilidad", "Objetivo de la consulta"],
  },
  {
    id: "tone",
    label: "Tono",
    title: "El contexto importa antes de hablar de pigmentación.",
    copy: "Una consulta real tendría que revisar evolución, hábitos, exposición y antecedentes antes de considerar cualquier protocolo estético.",
    checks: ["Historia del cambio de tono", "Exposición y hábitos", "Productos usados previamente", "Preguntas para valoración"],
  },
  {
    id: "sensitivity",
    label: "Sensibilidad",
    title: "La tolerancia forma parte del plan.",
    copy: "La experiencia prioriza reactividad, sensaciones frecuentes y experiencias previas para que la conversación profesional tenga mejor contexto.",
    checks: ["Reacciones previas", "Sensaciones frecuentes", "Activos utilizados", "Expectativas realistas"],
  },
];

export function SkinFocus() {
  const [activeId, setActiveId] = useState("texture");
  const active = focuses.find((item) => item.id === activeId) ?? focuses[0];

  return (
    <div className="focus-panel">
      <div className="focus-tabs" role="tablist" aria-label="Motivos de valoración">
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
          <p className="eyebrow">Valoración guiada · demo UX</p>
          <h3>{active.title}</h3>
          <p className="focus-copy">{active.copy}</p>
        </div>
        <div className="focus-checks">
          {active.checks.map((item) => (
            <div key={item} className="focus-check">
              <span aria-hidden="true">→</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="focus-note">
        Contenido conceptual para portafolio. No constituye diagnóstico, indicación ni recomendación médica.
      </p>
    </div>
  );
}
