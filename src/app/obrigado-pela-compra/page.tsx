import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parabéns pela Compra! | UNIAGIL",
  description: "Sua compra foi realizada com sucesso. Bem-vindo à UNIAGIL — sua jornada ágil começa agora!",
};

export default function ObrigadoPelaCompra() {
  return (
    <section className="min-h-screen bg-secondary flex items-center justify-center py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/30">
          <svg className="w-14 h-14 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
          Parabéns pela <span className="text-primary">Compra!</span>
        </h1>
        <p className="text-white/70 text-xl mb-8">
          Sua decisão vai mudar a sua carreira.
        </p>

        <div className="bg-white/10 border border-primary/30 rounded-2xl p-8 mb-8 text-left">
          <h2 className="text-primary font-bold text-lg mb-4">O que acontece agora?</h2>
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-secondary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
              <span>Você receberá um e-mail de confirmação com os detalhes do acesso.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-secondary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
              <span>Nossa equipe entrará em contato via WhatsApp em até 24h para te acolher.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary text-secondary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
              <span>Você receberá o link para entrar na comunidade exclusiva dos alunos.</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
          >
            Ir para o Site
          </Link>
          <Link
            href="/contato"
            className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold hover:border-primary hover:text-primary transition-colors"
          >
            Falar com Suporte
          </Link>
        </div>
      </div>
    </section>
  );
}
