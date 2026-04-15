import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Obrigado - O Novo Mercado | UNIAGIL",
  description: "Obrigado por participar de O Novo Mercado com a UNIAGIL. Continue sua jornada de desenvolvimento.",
};

export default function ObrigadoONovoMercado() {
  return (
    <section className="min-h-screen bg-secondary flex items-center justify-center py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/30">
          <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Obrigado por estar aqui!
        </h1>
        <p className="text-primary font-semibold text-xl mb-4">O Novo Mercado x UNIAGIL</p>
        <p className="text-white/60 text-lg mb-10">
          Você deu um passo importante! Fique atento ao seu e-mail — você receberá em breve tudo o que precisa para começar.
        </p>

        <div className="bg-white/10 border border-primary/30 rounded-2xl p-6 mb-10 text-left">
          <h2 className="text-white font-bold mb-3">Próximos passos:</h2>
          <ol className="text-white/70 space-y-2 list-decimal list-inside">
            <li>Verifique seu e-mail (inclusive o spam)</li>
            <li>Acesse o material enviado</li>
            <li>Entre no grupo exclusivo pelo link no e-mail</li>
          </ol>
        </div>

        <Link
          href="/"
          className="bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
        >
          Conhecer a UNIAGIL
        </Link>
      </div>
    </section>
  );
}
