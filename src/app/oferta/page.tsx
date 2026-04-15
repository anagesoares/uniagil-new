import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oferta Especial | UNIAGIL",
  description: "Aproveite nossa oferta especial para o programa LACP e transforme sua carreira em liderança ágil.",
};

export default function Oferta() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary text-secondary text-sm font-black px-5 py-2 rounded-full mb-6 uppercase tracking-widest">
            Oferta por Tempo Limitado
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Sua Chance de se Tornar um <span className="text-primary">Líder Ágil</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            O programa LACP com condições especiais que você não vai encontrar em nenhum outro momento. Vagas extremamente limitadas.
          </p>

          <div className="mt-10 bg-white/10 border border-primary/40 rounded-2xl p-8 max-w-sm mx-auto">
            <p className="text-white/60 text-sm line-through mb-1">De R$ 3.997</p>
            <p className="text-primary text-5xl font-black">R$ 1.897</p>
            <p className="text-white/70 text-sm mt-2">ou 12x sem juros</p>
          </div>

          <Link
            href="/lacpaberto"
            className="mt-10 inline-block bg-primary text-secondary px-10 py-5 rounded-full text-xl font-black hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
          >
            QUERO APROVEITAR A OFERTA
          </Link>
          <p className="mt-4 text-white/40 text-sm">Garantia de 7 dias. Compra 100% segura.</p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            O que está incluso na oferta
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              "Programa LACP completo (6 meses)",
              "Certificação reconhecida pelo mercado",
              "Acesso vitalício ao conteúdo",
              "Mentoria ao vivo com especialistas",
              "Comunidade exclusiva de líderes ágeis",
              "Material didático e ferramentas práticas",
              "Suporte individualizado durante o programa",
              "Bônus: Kit de Ferramentas Ágeis",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
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
              className="inline-block bg-secondary text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-secondary/90 transition-colors"
            >
              Garantir Minha Vaga Agora
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary">
            Não deixe essa oportunidade passar
          </h2>
          <p className="mt-4 text-secondary/70 text-lg">
            As vagas são limitadas e podem se esgotar a qualquer momento.
          </p>
          <Link
            href="/lacpaberto"
            className="mt-8 inline-block bg-secondary text-white px-10 py-4 rounded-full font-bold hover:bg-secondary/90 transition-colors"
          >
            Quero Garantir Minha Vaga
          </Link>
        </div>
      </section>
    </>
  );
}
