import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "WebJam UNIAGIL | UNIAGIL",
  description: "Participe do WebJam UNIAGIL — o evento online de agilidade, inovação e conexão entre líderes ágeis do Brasil.",
};

export default function WebJam() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block bg-primary text-secondary text-sm font-black px-5 py-2 rounded-full mb-6 uppercase tracking-widest">
            Evento Online
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
            Web<span className="text-primary">Jam</span>
          </h1>
          <p className="mt-4 text-primary font-semibold text-xl">by UNIAGIL</p>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            O maior evento online de agilidade do Brasil. Conexão, aprendizado e muita energia em um formato único — intenso, prático e transformador.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cadastro-1"
              className="bg-primary text-secondary px-10 py-5 rounded-full text-xl font-black hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              QUERO PARTICIPAR
            </Link>
            <Link
              href="/contato"
              className="border-2 border-white/30 text-white px-10 py-5 rounded-full text-xl font-bold hover:border-primary hover:text-primary transition-colors"
            >
              Saber Mais
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre o evento */}
      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary">
              O que é o WebJam?
            </h2>
            <p className="mt-4 text-secondary/60 max-w-2xl mx-auto">
              O WebJam é um evento imersivo online onde profissionais ágeis se encontram para aprender, compartilhar e crescer juntos. Um formato dinâmico com palestras, workshops e muita troca.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "12h+", label: "De Conteúdo" },
              { num: "10+", label: "Palestrantes" },
              { num: "5k+", label: "Participantes" },
              { num: "100%", label: "Online e Gratuito" },
            ].map(({ num, label }) => (
              <div key={label} className="bg-white p-6 rounded-2xl shadow-sm text-center">
                <p className="text-primary text-3xl font-black">{num}</p>
                <p className="text-secondary/60 text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programação */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">
            O que esperar do <span className="text-primary">WebJam</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Palestras com os maiores especialistas em agilidade do Brasil",
              "Workshops práticos e mão na massa",
              "Painéis de debate com líderes de mercado",
              "Networking com profissionais de todo o Brasil",
              "Conteúdo aplicável a partir do primeiro dia",
              "Certificado de participação digital",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-white/80 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/cadastro-1"
              className="inline-block bg-primary text-secondary px-10 py-5 rounded-full text-lg font-bold hover:bg-primary/90 transition-colors"
            >
              Garantir Minha Vaga no WebJam
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
