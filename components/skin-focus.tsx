"use client";

import { useState } from "react";

const focuses = [
  {
    id: "texture",
    label: "Textura",
    title: "Entender la superficie antes de intervenir.",
    copy: "La valoración revisaría antecedentes, rutina actual, tolerancia y aquello que la persona percibe como textura irregular. No sustituye diagnóstico dermatológico.",
    checks: ["Rutina y productos actuales", "Cambios recientes percibidos", "Tolerancia y sensibilidad", "Objetivo realista de la consulta"],
  },
  {
    id: "tone",
    label: "Tono",
    title: "Contexto antes de hablar de pigmentación.",
    copy: "La consulta se plantea para comprender cuándo aparecieron los cambios de tono, cómo se comportan y qué antecedentes conviene revisar antes de definir cualquier ruta.",
    checks: ["Historia del cambio de tono", "Exposición y hábitos relevantes", "Productos usados previamente", "Necesidad de evaluación médica"],
  },
  {
    id: "sensitivity",
    label: "Sensibilidad",
    title: "La tolerancia también forma parte del plan.",
    copy: "Antes de plantear procedimientos, la experiencia pone el foco en señales de sensibilidad, reacciones previas y expectativas. La recomendación final dependería siempre de evaluación profesional.",
    checks: ["Reacciones previas", "Sensaciones frecuentes", "Rutina y activos utilizados", "Preguntas para la valoración"],
  },
];

export function SkinFocus() {
  const [activeId, setActiveId] = useState("texture");
  const active = focuses.find((item) => item.id === activeId) ?? focuses[0];

  return (
    <div className="focus-panel">
      <div className="focus-tabs" role="tablist" aria-label="Aspectos a conversar durante la valoración">
        {focuses.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={activeId === item.id}
            className={activeId === item.id ? "focus-tab is-active" : "focus-tab"}
            onClick={() => setActiveId(item.id)}
          >
            <span className="focus-tab-index">0{focuses.indexOf(item) + 1}</span>
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
              <span aria-hidden="true">↗</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="focus-note">Contenido conceptual para portafolio. No constituye diagnóstico, indicación ni recomendación médica.</p>
    </div>
  );
}
