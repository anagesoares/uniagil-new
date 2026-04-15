import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso - LACP Connect | UNIAGIL",
  description: "Termos de uso da plataforma LACP Connect da UNIAGIL. Leia antes de utilizar nossa comunidade.",
};

export default function TermoUsoLacpConnect() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">
            Termos de Uso — <span className="text-primary">LACP Connect</span>
          </h1>
          <p className="mt-4 text-white/70">
            Leia atentamente antes de acessar a comunidade LACP Connect.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">1. O que é o LACP Connect</h2>
              <p className="text-secondary/70">
                O LACP Connect é a comunidade exclusiva de alunos e ex-alunos do programa LACP da UNIAGIL. É um espaço de networking, troca de experiências e desenvolvimento contínuo em liderança ágil.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">2. Acesso e Elegibilidade</h2>
              <p className="text-secondary/70">
                O acesso ao LACP Connect é exclusivo para alunos matriculados ou certificados no programa LACP da UNIAGIL. O compartilhamento de credenciais de acesso é estritamente proibido.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">3. Regras de Conduta</h2>
              <ul className="list-disc list-inside text-secondary/70 space-y-2">
                <li>Manter postura respeitosa e profissional</li>
                <li>Não divulgar conteúdo exclusivo da plataforma para não-membros</li>
                <li>Contribuir positivamente para a comunidade</li>
                <li>Não utilizar a plataforma para fins comerciais não autorizados</li>
                <li>Respeitar a propriedade intelectual da UNIAGIL e dos membros</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">4. Conteúdo dos Usuários</h2>
              <p className="text-secondary/70">
                Ao publicar conteúdo no LACP Connect, você garante que possui os direitos necessários e concede à UNIAGIL uma licença não exclusiva para exibir esse conteúdo na plataforma.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">5. Encerramento de Acesso</h2>
              <p className="text-secondary/70">
                A UNIAGIL reserva-se o direito de encerrar o acesso de qualquer membro que viole estes termos, sem necessidade de aviso prévio e sem direito a reembolso.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">6. Propriedade Intelectual</h2>
              <p className="text-secondary/70">
                Todo o conteúdo disponibilizado no LACP Connect pela UNIAGIL — incluindo textos, vídeos, templates e materiais de apoio — é protegido por direitos autorais e não pode ser reproduzido sem autorização expressa.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">7. Atualizações</h2>
              <p className="text-secondary/70">
                Estes termos podem ser atualizados a qualquer momento. O uso continuado da plataforma após as mudanças implica na aceitação dos novos termos.
              </p>
            </div>

          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lacpaberto"
              className="inline-block bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              Conhecer o LACP
            </Link>
            <Link
              href="/"
              className="inline-block border-2 border-secondary text-secondary px-8 py-4 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors"
            >
              Voltar ao Site
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
