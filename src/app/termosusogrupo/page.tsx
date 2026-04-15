import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso do Grupo | UNIAGIL",
  description: "Termos e condições para participação no grupo oficial da UNIAGIL.",
};

export default function TermosUsoGrupo() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">
            Termos de Uso <span className="text-primary">do Grupo</span>
          </h1>
          <p className="mt-4 text-white/70">
            Ao entrar no grupo você concorda com as regras abaixo.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">

            <p className="text-secondary/70">
              Ao participar dos grupos oficiais da UNIAGIL em qualquer plataforma de mensagens, você concorda em respeitar as seguintes regras de convivência:
            </p>

            {[
              {
                num: "1",
                title: "Respeito Mútuo",
                text: "Trate todos os membros com educação e respeito. Não toleramos qualquer forma de preconceito, discriminação ou linguagem ofensiva.",
              },
              {
                num: "2",
                title: "Conteúdo Relevante",
                text: "Compartilhe apenas conteúdos relacionados ao tema do grupo. Evite mensagens fora de contexto, spam ou propaganda.",
              },
              {
                num: "3",
                title: "Direitos Autorais",
                text: "Não compartilhe materiais protegidos por direitos autorais sem autorização. Respeite a propriedade intelectual da UNIAGIL e de terceiros.",
              },
              {
                num: "4",
                title: "Privacidade",
                text: "Não divulgue informações pessoais de outros membros sem consentimento.",
              },
              {
                num: "5",
                title: "Consequências",
                text: "O descumprimento dessas regras pode resultar na remoção imediata do grupo sem aviso prévio.",
              },
            ].map(({ num, title, text }) => (
              <div key={num} className="border-l-4 border-primary pl-5">
                <h2 className="font-bold text-secondary mb-1">{num}. {title}</h2>
                <p className="text-secondary/60 text-sm">{text}</p>
              </div>
            ))}

          </div>

          <div className="mt-8 text-center">
            <Link href="/" className="inline-block bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors">
              Voltar ao Site
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
