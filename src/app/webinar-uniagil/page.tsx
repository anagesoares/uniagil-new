import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webinar UNIAGIL - Liderança Ágil | UNIAGIL",
  description: "Participe do webinar exclusivo da UNIAGIL e aprenda como a liderança ágil pode transformar sua carreira e sua empresa.",
};

export default function WebinarUniagil() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-2 rounded-full mb-6">
            Webinar Gratuito
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Como a Liderança Ágil <span className="text-primary">Transforma</span> Carreiras e Empresas
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Webinar 100% gratuito com Ana Paula, fundadora da UNIAGIL e especialista em agilidade com mais de 15 anos de experiência.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cadastro-1"
              className="bg-primary text-secondary px-10 py-5 rounded-full text-xl font-black hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              QUERO ME INSCREVER GRÁTIS
            </Link>
          </div>
          <p className="mt-4 text-white/40 text-sm">Gratuito. Sem cartão de crédito. Para sempre.</p>
        </div>
      </section>

      {/* O que vai aprender */}
      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            O que você vai aprender no webinar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Por que 90% dos líderes falham na adoção ágil",
              "Os 5 comportamentos do líder ágil de alta performance",
              "Como transformar equipes resistentes em times engajados",
              "O método LACP e como ele funciona na prática",
              "Cases reais de transformação com agilidade",
              "Como dar o próximo passo na sua jornada ágil",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white p-5 rounded-xl shadow-sm">
                <span className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-secondary font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/cadastro-1"
              className="inline-block bg-primary text-secondary px-10 py-5 rounded-full text-lg font-bold hover:bg-primary/90 transition-colors"
            >
              Garantir Minha Vaga Gratuita
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Ana */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-32 h-32 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-secondary text-4xl font-bold shadow-lg">
              AP
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Quem vai apresentar</h2>
              <h3 className="text-primary font-bold text-lg mb-2">Ana Paula — Fundadora da UNIAGIL</h3>
              <p className="text-white/60">
                Especialista em Liderança Ágil com mais de 15 anos de experiência no mercado brasileiro. Fundadora da UNIAGIL, maior escola de agilidade do Brasil, e mentora de líderes em empresas de todos os portes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
