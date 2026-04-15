import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pos-Graduacao em Agilidade",
  description:
    "Pos-graduacao reconhecida pelo MEC em Gestao Agil. Torne-se um especialista em metodologias ageis.",
};

export default function PosGraduacao() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-1 rounded-full mb-6">
              Reconhecida pelo MEC
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Pos-Graduacao em{" "}
              <span className="text-primary">Gestao Agil</span>
            </h1>
            <p className="mt-6 text-lg text-white/70">
              A unica pos-graduacao do Brasil focada 100% em agilidade.
              Desenvolva competencias de lideranca, gestao e transformacao
              organizacional com metodologias ageis.
            </p>
            <Link
              href="/contato"
              className="mt-8 inline-block bg-primary text-secondary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-dark transition-colors"
            >
              Quero me inscrever
            </Link>
          </div>
        </div>
      </section>

      {/* Grade curricular */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary text-center">
            Grade Curricular
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Fundamentos de Agilidade",
              "Scrum e Kanban Avancado",
              "Lideranca Agil",
              "Gestao de Produtos",
              "Transformacao Digital",
              "Metricas e OKRs",
              "Design Thinking e Inovacao",
              "Projeto Aplicado",
            ].map((modulo, i) => (
              <div
                key={modulo}
                className="flex items-center gap-4 p-6 bg-light rounded-xl"
              >
                <span className="flex-shrink-0 w-10 h-10 bg-primary text-secondary rounded-full flex items-center justify-center font-bold">
                  {i + 1}
                </span>
                <span className="text-secondary font-medium">{modulo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary">
            Garanta sua vaga na proxima turma
          </h2>
          <p className="mt-4 text-secondary/70">
            Vagas limitadas. Inscricoes abertas para a proxima turma.
          </p>
          <Link
            href="/contato"
            className="mt-8 inline-block bg-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary/90 transition-colors"
          >
            Fale com um consultor
          </Link>
        </div>
      </section>
    </>
  );
}
