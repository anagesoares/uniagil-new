import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LACP - Lideranca Agil e Cultura de Performance",
  description:
    "O programa mais completo de formacao em lideranca agil do Brasil. Inscricoes abertas!",
};

export default function LACPAberto() {
  return (
    <>
      <section className="bg-secondary text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-warm text-secondary text-sm font-bold px-4 py-1 rounded-full mb-6">
            Inscricoes Abertas
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            LACP - Lideranca Agil e{" "}
            <span className="text-primary">Cultura de Performance</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            O programa mais completo de formacao em lideranca agil do Brasil.
            Desenvolva as competencias essenciais para liderar times de alta
            performance.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contato"
              className="bg-primary text-secondary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-dark transition-colors"
            >
              Quero me matricular
            </Link>
            <Link
              href="/demo"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold hover:border-primary hover:text-primary transition-colors"
            >
              Ver demonstracao
            </Link>
          </div>
        </div>
      </section>

      {/* Modulos */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary text-center">
            Modulos do Programa
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Mindset Agil",
              "Lideranca Servidora",
              "Gestao Visual",
              "Metricas Ageis",
              "Scrum & Kanban",
              "OKRs e Estrategia",
              "Cultura Organizacional",
              "Projeto Final",
            ].map((mod) => (
              <div
                key={mod}
                className="bg-light p-6 rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-secondary">{mod}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos placeholder */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary">
            O que nossos alunos dizem
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <p className="text-secondary/70 italic">
                  &quot;O LACP transformou minha forma de liderar. Recomendo para
                  todos que querem evoluir na carreira.&quot;
                </p>
                <p className="mt-4 font-bold text-secondary">Aluno {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
