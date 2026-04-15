import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Privacidade",
  description: "Politica de privacidade da UNIAGIL.",
};

export default function PoliticaDePrivacidade() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
        <h1 className="text-4xl font-bold text-secondary">Politica de Privacidade</h1>
        <p className="mt-6 text-secondary/70">
          A UNIAGIL valoriza a privacidade dos seus usuarios. Esta politica
          descreve como coletamos, usamos e protegemos seus dados pessoais.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-secondary">1. Coleta de Dados</h2>
        <p className="text-secondary/70">
          Coletamos dados pessoais quando voce se inscreve em nossos cursos,
          webinars ou entra em contato conosco.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-secondary">2. Uso dos Dados</h2>
        <p className="text-secondary/70">
          Utilizamos seus dados para fornecer nossos servicos, enviar
          comunicacoes relevantes e melhorar sua experiencia.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-secondary">3. Protecao dos Dados</h2>
        <p className="text-secondary/70">
          Implementamos medidas de seguranca adequadas para proteger seus dados
          pessoais contra acesso nao autorizado.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-secondary">4. Contato</h2>
        <p className="text-secondary/70">
          Para duvidas sobre esta politica, entre em contato pelo nosso
          formulario de contato.
        </p>
      </div>
    </section>
  );
}
