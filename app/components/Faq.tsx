"use client";

import { useState } from "react";

export default function Faq({ question, children }: { question: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-3">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full text-left flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
        aria-expanded={open}
        aria-controls={`faq-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="font-medium">{question}</span>
        <span className="text-amber-600" aria-hidden>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div id={`faq-${question.replace(/\s+/g, '-').toLowerCase()}`} className="mt-2 p-3 bg-white rounded-lg shadow-sm">
          {children}
        </div>
      )}
    </div>
  );
}
