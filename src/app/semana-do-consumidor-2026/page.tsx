import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Semana do Consumidor 2026 | UNIAGIL",
  description: "Oferta especial de Semana do Consumidor 2026 da UNIAGIL. Os maiores descontos do ano em programas de liderança ágil.",
};

export default function SemanaDoConsumidor2026() {
  return (
    <>
      <section className="bg-secondary text-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary text-secondary text-sm font-black px-5 py-2 rounded-full mb-6 uppercase tracking-widest">
            Semana do Consumidor 2026
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Seu Direito é <span className="text-primary">Aprender Melhor</span> por Menos
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Na Semana do Consumidor, você tem o poder de escolha. E escolher a UNIAGIL significa investir na melhor formação em agilidade do Brasil com desconto histórico.
          </p>

          <div className="mt-10 bg-white/10 border border-primary/40 rounded-2xl p-8 max-w-sm mx-auto">
            <p className="text-white/60 text-sm line-through mb-1">De R$ 3.997</p>
            <p className="text-primary text-5xl font-black">R$ 1.697</p>
            <p className="text-white/70 text-sm mt-2">ou 12x de R$ 141,42 sem juros</p>
          </div>

          <Link
            href="/lacpaberto"
            className="mt-10 inline-block bg-primary text-secondary px-10 py-5 rounded-full text-xl font-black hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
          >
            APROVEITAR DESCONTO DO CONSUMIDOR
          </Link>
          <p className="mt-4 text-white/40 text-sm">Oferta válida apenas durante a Semana do Consumidor.</p>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            Por que a UNIAGIL é a melhor escolha?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Maior Escola de Agilidade",
                desc: "Reconhecida como referência nacional em formação ágil com mais de 10 mil profissionais formados.",
              },
              {
                title: "Certificação Valorizada",
                desc: "Nossa certificação LACP é exigida pelas principais empresas do mercado brasileiro.",
              },
              {
                title: "Garantia Total",
                desc: "7 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu investimento.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <h3 className="text-lg font-bold text-secondary mb-3">{item.title}</h3>
                <p className="text-secondary/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/lacpaberto"
              className="inline-block bg-primary text-secondary px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              Quero o Desconto do Consumidor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
