import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webinar UNIAGIL 2 - Agilidade Avançada | UNIAGIL",
  description: "Segunda edição do webinar UNIAGIL. Aprofunde seus conhecimentos em agilidade e liderança com especialistas.",
};

export default function WebinarUniagil2() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-2 rounded-full mb-6">
            Webinar Gratuito — Edição 2
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Agilidade no <span className="text-primary">Próximo Nível</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            A segunda edição do nosso webinar traz conteúdos avançados sobre transformação ágil, liderança de alta performance e como escalar agilidade em organizações.
          </p>

          <Link
            href="/cadastro-1"
            className="mt-10 inline-block bg-primary text-secondary px-10 py-5 rounded-full text-xl font-black hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
          >
            QUERO PARTICIPAR GRÁTIS
          </Link>
          <p className="mt-4 text-white/40 text-sm">100% online e gratuito.</p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            Conteúdo desta edição
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                numero: "01",
                titulo: "Escalando Agilidade",
                desc: "Como expandir práticas ágeis para toda a organização sem perder o essencial.",
              },
              {
                numero: "02",
                titulo: "OKRs + Agilidade",
                desc: "Como combinar OKRs com metodologias ágeis para maximizar resultados.",
              },
              {
                numero: "03",
                titulo: "Liderança Transformadora",
                desc: "O papel do líder na criação de uma cultura de inovação e melhoria contínua.",
              },
            ].map((item) => (
              <div key={item.numero} className="bg-white p-6 rounded-2xl shadow-sm">
                <span className="text-primary text-4xl font-black">{item.numero}</span>
                <h3 className="text-lg font-bold text-secondary mt-2 mb-2">{item.titulo}</h3>
                <p className="text-secondary/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/cadastro-1"
              className="inline-block bg-primary text-secondary px-10 py-5 rounded-full text-lg font-bold hover:bg-primary/90 transition-colors"
            >
              Garantir Minha Vaga
            </Link>
          </div>
        </div>
      </section>

      {/* CTA para programa completo */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-secondary">
            Quer ir além dos webinars?
          </h2>
          <p className="mt-4 text-secondary/70 text-lg">
            Conheça o programa LACP e transforme sua carreira de forma completa.
          </p>
          <Link
            href="/lacpaberto"
            className="mt-8 inline-block bg-secondary text-white px-10 py-4 rounded-full font-bold hover:bg-secondary/90 transition-colors"
          >
            Conhecer o LACP
          </Link>
        </div>
      </section>
    </>
  );
}
