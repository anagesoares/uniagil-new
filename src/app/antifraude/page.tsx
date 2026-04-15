import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política Antifraude | UNIAGIL",
  description: "Conheça a política antifraude da UNIAGIL e saiba como nos protegemos e protegemos nossos alunos.",
};

export default function Antifraude() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">
            Política <span className="text-primary">Antifraude</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            Sua segurança é nossa prioridade.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8">

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-3">1. Compromisso com a Segurança</h2>
              <p className="text-secondary/70">
                A UNIAGIL adota medidas rigorosas para proteger todos os seus alunos, parceiros e colaboradores contra atividades fraudulentas. Estamos comprometidos com a integridade de todas as transações realizadas em nossa plataforma.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-3">2. Canais Oficiais</h2>
              <p className="text-secondary/70">
                Todas as comunicações oficiais da UNIAGIL são realizadas exclusivamente pelos nossos canais verificados. Desconfie de qualquer contato que ofereça descontos, cobranças extras ou solicite dados bancários fora dos nossos canais oficiais.
              </p>
              <ul className="list-disc list-inside text-secondary/70 mt-3 space-y-1">
                <li>Site oficial: uniagil.com.br</li>
                <li>E-mail: contato@uniagil.com.br</li>
                <li>WhatsApp oficial disponível no site</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-3">3. Como Identificar Fraudes</h2>
              <p className="text-secondary/70">
                Fique atento a situações como:
              </p>
              <ul className="list-disc list-inside text-secondary/70 mt-3 space-y-1">
                <li>Solicitações de pagamento via PIX para contas pessoais</li>
                <li>Promessas de bolsas ou descontos não anunciados em nosso site</li>
                <li>Contatos não solicitados pedindo dados pessoais ou bancários</li>
                <li>Links suspeitos que imitam nosso site</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-3">4. Denúncias</h2>
              <p className="text-secondary/70">
                Se você identificar qualquer atividade suspeita em nome da UNIAGIL, entre em contato imediatamente conosco pelo canal oficial. Agimos com urgência para investigar e coibir qualquer tipo de fraude.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-secondary mb-3">5. Segurança nas Transações</h2>
              <p className="text-secondary/70">
                Todas as cobranças da UNIAGIL são realizadas por meio de plataformas de pagamento seguras e certificadas. Nunca solicitamos senhas ou dados completos de cartão de crédito por telefone ou e-mail.
              </p>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contato"
              className="inline-block bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
            >
              Entrar em Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
