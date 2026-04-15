import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Black Natal - Oferta Especial | UNIAGIL",
  description: "Promoção Black Natal da UNIAGIL. Presenteie-se com o melhor curso de liderança ágil do Brasil.",
};

export default function Blacknatal() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary text-secondary text-sm font-bold px-4 py-2 rounded-full mb-6 uppercase tracking-widest">
            Black Natal
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            O Melhor Presente <br />
            <span className="text-primary">Para Sua Carreira</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Combine o espírito natalino com a melhor oferta do ano. Invista no seu crescimento profissional com desconto especial de Natal.
          </p>

          <div className="mt-10 inline-block bg-white/10 border border-primary/40 rounded-2xl p-8">
            <p className="text-white/60 text-sm line-through mb-1">De R$ 3.997</p>
            <p className="text-primary text-5xl font-black">R$ 1.797</p>
            <p className="text-white/70 text-sm mt-2">ou 12x sem juros</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lacpaberto"
              className="bg-primary text-secondary px-10 py-5 rounded-full text-xl font-black hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              GARANTIR OFERTA NATAL
            </Link>
          </div>
          <p className="mt-4 text-white/50 text-sm">Oferta por tempo limitado. Apenas até o Natal.</p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            Por que começar agora?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Comece o Novo Ano Diferente",
                desc: "Entre em 2026 com uma certificação reconhecida e novas competências de liderança.",
              },
              {
                title: "Preço Histórico",
                desc: "Essa promoção só acontece uma vez no ano. Não deixe para depois.",
              },
              {
                title: "Acesso Imediato",
                desc: "Assim que confirmar sua matrícula, você já tem acesso à plataforma.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-secondary/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/lacpaberto"
              className="inline-block bg-primary text-secondary px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              Quero Meu Presente de Natal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
