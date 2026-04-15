import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quero Conhecer a UNIAGIL | UNIAGIL",
  description: "Deixe seus dados e receba gratuitamente informações sobre os melhores programas de liderança ágil do Brasil.",
};

export default function Captacao() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-2 rounded-full mb-6">
                Gratuito
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                Comece sua Jornada <span className="text-primary">Ágil</span> Agora
              </h1>
              <p className="mt-6 text-lg text-white/70">
                Deixe seu contato e um especialista da UNIAGIL vai te ajudar a encontrar o programa ideal para o seu perfil e momento de carreira.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Consultoria gratuita e sem compromisso",
                  "Descubra qual certificação é ideal para você",
                  "Conheça as formas de pagamento e bolsas disponíveis",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <span className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-xl font-bold text-secondary mb-6">
                Quero receber mais informações
              </h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Seu WhatsApp"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-secondary py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
                >
                  Quero ser Contactado
                </button>
                <p className="text-secondary/40 text-xs text-center">
                  Suas informações estão seguras. Sem spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary/60 text-lg">
            Mais de <span className="text-secondary font-bold">10.000 profissionais</span> já transformaram suas carreiras com a UNIAGIL.
          </p>
        </div>
      </section>
    </>
  );
}
