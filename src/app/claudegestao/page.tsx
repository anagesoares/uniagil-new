import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Claude para Gestão Ágil | UNIAGIL",
  description: "Aprenda como usar Inteligência Artificial para potencializar sua gestão ágil e liderança de equipes.",
};

export default function ClaudeGestao() {
  return (
    <>
      <section className="bg-secondary text-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-2 rounded-full mb-6">
            IA + Gestão Ágil
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Gestão Ágil <span className="text-primary">Potencializada</span> por IA
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Descubra como combinar Inteligência Artificial com práticas ágeis para liderar equipes com mais eficiência, clareza e resultados.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lacpaberto"
              className="bg-primary text-secondary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-colors"
            >
              Conhecer o LACP
            </Link>
            <Link
              href="/contato"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary hover:text-secondary transition-colors"
            >
              Falar com Especialista
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            O que você vai aprender
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Como usar IA para facilitar cerimônias ágeis",
              "Automatização de relatórios e métricas de time",
              "Geração de roadmaps e backlogs com IA",
              "Retrospectivas mais efetivas com suporte de IA",
              "Comunicação assíncrona potencializada",
              "Tomada de decisão baseada em dados com IA",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-secondary font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/lacpaberto"
              className="inline-block bg-primary text-secondary px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              Quero Aprender
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
