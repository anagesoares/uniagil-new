import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EACP - Especializacao em Agilidade, Coaching e Praticas",
  description:
    "Especializacao avancada em Agilidade, Coaching e Praticas. Eleve seu nivel profissional.",
};

export default function PosEACP() {
  return (
    <>
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent/20 text-accent text-sm font-bold px-4 py-1 rounded-full mb-6">
              Especializacao Avancada
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              EACP - Especializacao em{" "}
              <span className="text-primary">Agilidade, Coaching e Praticas</span>
            </h1>
            <p className="mt-6 text-lg text-white/70">
              Programa avancado para profissionais que desejam aprofundar seus
              conhecimentos em coaching agil e praticas de transformacao
              organizacional.
            </p>
            <Link
              href="/contato"
              className="mt-8 inline-block bg-primary text-secondary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-dark transition-colors"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary text-center">
            O que voce vai aprender
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Coaching Agil",
                desc: "Tecnicas avancadas de coaching para times e organizacoes ageis.",
              },
              {
                title: "Facilitacao",
                desc: "Domine a arte de facilitar reunioes, workshops e cerimônas ageis.",
              },
              {
                title: "Transformacao Organizacional",
                desc: "Lidere transformacoes ageis em escala com frameworks consagrados.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-light p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
                <p className="mt-3 text-secondary/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
