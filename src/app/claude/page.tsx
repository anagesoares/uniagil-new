import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Claude AI na UNIAGIL | UNIAGIL",
  description: "Descubra como a UNIAGIL utiliza inteligência artificial Claude para potencializar o aprendizado em agilidade.",
};

export default function ClaudePage() {
  return (
    <>
      <section className="bg-secondary text-white py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-2 rounded-full mb-6">
            Inteligência Artificial
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            IA a Serviço da <span className="text-primary">Agilidade</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            A UNIAGIL integra o poder da Inteligência Artificial com metodologias ágeis para criar experiências de aprendizagem únicas e personalizadas.
          </p>
          <Link
            href="/contato"
            className="mt-10 inline-block bg-primary text-secondary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-colors"
          >
            Saiba Mais
          </Link>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary mb-12">
            Como usamos IA nos nossos programas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Aprendizado Personalizado",
                desc: "Trilhas de estudo adaptadas ao seu perfil, ritmo e objetivos de carreira.",
              },
              {
                title: "Feedback em Tempo Real",
                desc: "Receba feedback instantâneo sobre seus exercícios práticos e projetos.",
              },
              {
                title: "Tutoria Inteligente",
                desc: "Tire dúvidas sobre conteúdo ágil a qualquer hora com nosso assistente de IA.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary rounded-md" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-secondary/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
