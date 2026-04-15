import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Webinars",
  description: "Webinars gratuitos sobre agilidade, lideranca e gestao. Inscreva-se!",
};

export default function Webinar() {
  return (
    <>
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            <span className="text-primary">Webinars</span> Gratuitos
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Aprenda com os melhores especialistas em agilidade do Brasil.
            Conteudos gratuitos e ao vivo.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Lideranca Agil na Pratica",
                desc: "Como aplicar principios ageis na sua lideranca do dia a dia.",
                date: "Em breve",
              },
              {
                title: "OKRs e Metricas Ageis",
                desc: "Aprenda a definir e acompanhar objetivos com metodologias ageis.",
                date: "Em breve",
              },
              {
                title: "Transformacao Digital com Agilidade",
                desc: "Cases reais de transformacao digital utilizando frameworks ageis.",
                date: "Em breve",
              },
              {
                title: "Scrum para Iniciantes",
                desc: "Tudo o que voce precisa saber para comecar com Scrum.",
                date: "Em breve",
              },
            ].map((webinar) => (
              <div
                key={webinar.title}
                className="bg-light p-8 rounded-2xl"
              >
                <span className="text-sm text-primary font-bold">{webinar.date}</span>
                <h3 className="mt-2 text-xl font-bold text-secondary">
                  {webinar.title}
                </h3>
                <p className="mt-3 text-secondary/70">{webinar.desc}</p>
                <Link
                  href="/contato"
                  className="mt-4 inline-block text-primary font-bold hover:underline"
                >
                  Inscreva-se →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
