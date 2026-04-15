import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oferta Black - Condições Especiais | UNIAGIL",
  description: "Condições exclusivas da oferta Black da UNIAGIL. Confira tudo o que está incluso e garanta sua vaga.",
};

export default function ContratoBlack() {
  return (
    <>
      <section className="bg-secondary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary text-secondary text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            Oferta Black Exclusiva
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Tudo que você recebe na <span className="text-primary">Oferta Black</span>
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Confira os detalhes completos do que está incluído nessa oferta única.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Preço */}
          <div className="bg-secondary text-white rounded-2xl p-8 text-center mb-8 shadow-xl">
            <p className="text-white/60 line-through text-lg">De R$ 3.997</p>
            <p className="text-primary text-6xl font-black mt-1">R$ 1.597</p>
            <p className="text-white/70 mt-2">ou 12x de R$ 133,08 sem juros</p>
            <Link
              href="/lacpaberto"
              className="mt-6 inline-block bg-primary text-secondary px-10 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
            >
              Garantir Minha Vaga
            </Link>
          </div>

          {/* O que está incluso */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-secondary mb-6">O que está incluso:</h2>
            <div className="space-y-4">
              {[
                { item: "Programa LACP Completo", detalhe: "Todos os módulos e certificação" },
                { item: "Acesso Vitalício", detalhe: "Nunca perde o acesso ao conteúdo" },
                { item: "Mentoria em Grupo", detalhe: "Sessões ao vivo mensais" },
                { item: "Comunidade Exclusiva", detalhe: "Acesso ao grupo privado de alunos" },
                { item: "Material de Apoio", detalhe: "Templates, e-books e ferramentas" },
                { item: "Certificado LACP", detalhe: "Reconhecido pelo mercado nacional" },
                { item: "Bônus: Kit de Ferramentas Ágeis", detalhe: "Valor R$ 397 - incluso na oferta" },
              ].map(({ item, detalhe }) => (
                <div key={item} className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary">{item}</p>
                    <p className="text-secondary/50 text-sm">{detalhe}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-primary/10 border border-primary/30 rounded-2xl p-6 text-center">
            <p className="text-secondary font-medium">
              Garantia de 7 dias. Se não gostar, devolvemos 100% do seu dinheiro.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
