import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso dos Grupos | UNIAGIL",
  description: "Leia os termos de uso para participação nos grupos e comunidades oficiais da UNIAGIL.",
};

export default function TermoDeUsoGrupos() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">
            Termos de Uso <span className="text-primary">dos Grupos</span>
          </h1>
          <p className="mt-4 text-white/70">
            Regras de convivência e participação nos grupos oficiais da UNIAGIL.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">1. Aceitação dos Termos</h2>
              <p className="text-secondary/70">
                Ao ingressar em qualquer grupo oficial da UNIAGIL (WhatsApp, Telegram, Discord ou qualquer outra plataforma), você automaticamente concorda com estes termos de uso e se compromete a respeitá-los integralmente.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">2. Comportamento Esperado</h2>
              <p className="text-secondary/70 mb-3">Os membros devem:</p>
              <ul className="list-disc list-inside text-secondary/70 space-y-1">
                <li>Tratar todos com respeito e cordialidade</li>
                <li>Contribuir com conteúdo relevante ao tema do grupo</li>
                <li>Respeitar a privacidade dos demais membros</li>
                <li>Seguir as orientações dos administradores</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">3. Conteúdo Proibido</h2>
              <p className="text-secondary/70 mb-3">É expressamente proibido:</p>
              <ul className="list-disc list-inside text-secondary/70 space-y-1">
                <li>Divulgação de spam, propaganda ou conteúdo comercial não autorizado</li>
                <li>Conteúdo ofensivo, discriminatório ou de ódio</li>
                <li>Compartilhamento de materiais protegidos por direitos autorais</li>
                <li>Qualquer forma de assédio ou intimidação</li>
                <li>Links maliciosos ou conteúdo impróprio</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">4. Moderação e Penalidades</h2>
              <p className="text-secondary/70">
                A UNIAGIL reserva-se o direito de remover qualquer membro que descumpra estes termos, sem aviso prévio. Em casos graves, o membro poderá ser banido de todos os grupos e comunidades da UNIAGIL.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">5. Privacidade</h2>
              <p className="text-secondary/70">
                O compartilhamento de informações pessoais de outros membros fora dos grupos sem consentimento expresso é proibido e pode resultar em remoção imediata.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">6. Alterações nos Termos</h2>
              <p className="text-secondary/70">
                A UNIAGIL pode atualizar estes termos a qualquer momento. A continuidade no grupo após as alterações implica na aceitação dos novos termos.
              </p>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              Voltar para o Site
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
