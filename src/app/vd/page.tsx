import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Liderança Ágil Certificada | UNIAGIL",
  description: "Torne-se um Líder Ágil Certificado com o programa LACP da UNIAGIL. Transforme sua carreira e sua equipe.",
};

export default function Vd() {
  return (
    <>
      {/* Hero / VSL */}
      <section className="bg-secondary text-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-2 rounded-full mb-6">
            Formação Completa
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Como se Tornar um <span className="text-primary">Líder Ágil</span> em 6 Meses
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            O programa LACP vai te transformar em um líder capaz de mover equipes, entregar resultados e ser reconhecido pelo mercado. Sem enrolação, sem teoria vazia.
          </p>

          {/* Video Placeholder */}
          <div className="mt-10 bg-secondary/80 border border-white/10 rounded-2xl overflow-hidden aspect-video max-w-2xl mx-auto flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto cursor-pointer hover:bg-primary/90 transition-colors">
                <svg className="w-8 h-8 text-secondary ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/50 text-sm mt-4">Assista ao vídeo e entenda a transformação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problema / Solução */}
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Você já se sentiu assim?
              </h2>
              <ul className="space-y-3 text-secondary/70">
                {[
                  "Gerencia projetos mas sem metodologia clara",
                  "Sua equipe entrega menos do que poderia",
                  "Não sabe como aplicar agilidade de verdade",
                  "Quer crescer mas falta um diferencial no currículo",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                O LACP vai te dar:
              </h2>
              <ul className="space-y-3 text-secondary/70">
                {[
                  "Método claro e aplicável desde o primeiro módulo",
                  "Técnicas para times de alta performance",
                  "Certificação reconhecida pelas maiores empresas",
                  "Diferencial competitivo real no mercado",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary">
            Pronto para dar o próximo passo?
          </h2>
          <p className="mt-4 text-secondary/70 text-lg">
            Vagas limitadas. Garante a sua antes que acabem.
          </p>
          <Link
            href="/lacpaberto"
            className="mt-8 inline-block bg-secondary text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-secondary/90 transition-colors"
          >
            Quero me Inscrever no LACP
          </Link>
        </div>
      </section>
    </>
  );
}
