import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webinar 01 - Liderança Ágil na Prática | UNIAGIL",
  description: "Assista ao primeiro webinar da série UNIAGIL sobre liderança ágil na prática. Conteúdo gratuito para sua formação.",
};

export default function Webinar01() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-2 rounded-full mb-4">
            Episódio 01
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold">
            Liderança Ágil <span className="text-primary">na Prática</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Neste primeiro episódio, você vai entender o que é liderança ágil de verdade e como aplicar na sua equipe a partir de hoje.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Video */}
          <div className="bg-secondary rounded-2xl overflow-hidden aspect-video flex items-center justify-center mb-10 shadow-xl">
            <div className="text-center text-white">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary/90 transition-colors">
                <svg className="w-8 h-8 text-secondary ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/50">Clique para assistir</p>
            </div>
          </div>

          {/* O que você vai aprender */}
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-secondary mb-6">Neste episódio você vai aprender:</h2>
            <ul className="space-y-3">
              {[
                "O que diferencia um líder ágil de um gestor tradicional",
                "Os 3 pilares da liderança ágil de alta performance",
                "Como criar uma cultura de entrega contínua na sua equipe",
                "Ferramentas práticas para começar a aplicar amanhã",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-secondary/70">
                  <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Quer ir além do webinar?
            </h2>
            <p className="text-secondary/60 mb-6">
              Conheça o programa LACP e transforme sua liderança de forma completa.
            </p>
            <Link
              href="/lacpaberto"
              className="inline-block bg-primary text-secondary px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              Conhecer o LACP
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
