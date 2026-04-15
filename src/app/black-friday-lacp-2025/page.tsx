import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Black Friday LACP 2025 | UNIAGIL",
  description: "Oferta especial de Black Friday para o programa LACP - Liderança Ágil Certificada. Aproveite antes que acabe!",
};

export default function BlackFridayLacp2025() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block bg-primary text-secondary text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            Black Friday 2025
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            LACP com o <span className="text-primary">Maior Desconto</span> do Ano
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            Essa é a sua chance de ingressar no programa de Liderança Ágil Certificada mais completo do Brasil por um preço histórico. Vagas extremamente limitadas.
          </p>

          <div className="mt-10 bg-white/10 border border-primary/40 rounded-2xl p-8 max-w-sm mx-auto">
            <p className="text-white/60 text-sm line-through mb-1">De R$ 3.997</p>
            <p className="text-primary text-5xl font-black">R$ 1.997</p>
            <p className="text-white/70 text-sm mt-2">ou 12x sem juros</p>
          </div>

          <Link
            href="/lacpaberto"
            className="mt-10 inline-block bg-primary text-secondary px-10 py-5 rounded-full text-xl font-black hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
          >
            GARANTIR MINHA VAGA AGORA
          </Link>
          <p className="mt-4 text-white/50 text-sm">Oferta válida por tempo limitado. Vagas esgotando.</p>
        </div>
      </section>

      {/* O que está incluído */}
      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            O que você recebe no LACP
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Certificação LACP reconhecida pelo mercado",
              "Acesso vitalício ao conteúdo do curso",
              "Mentoria ao vivo com especialistas",
              "Comunidade exclusiva de líderes ágeis",
              "Material didático completo",
              "Suporte personalizado durante toda a formação",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              Quero Aproveitar a Oferta
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
