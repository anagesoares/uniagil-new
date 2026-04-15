import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roda Agil",
  description: "Avalie a maturidade agil da sua equipe com a Roda Agil da UNIAGIL.",
};

export default function RodaAgil() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-secondary">
          <span className="text-primary">Roda</span> Agil
        </h1>
        <p className="mt-6 text-lg text-secondary/70">
          Ferramenta gratuita para avaliar a maturidade agil da sua equipe.
          Identifique pontos fortes e areas de melhoria.
        </p>
        <div className="mt-12 bg-light p-12 rounded-2xl">
          <p className="text-secondary/60">
            Ferramenta interativa da Roda Agil - em breve disponivel aqui.
          </p>
        </div>
      </div>
    </section>
  );
}
