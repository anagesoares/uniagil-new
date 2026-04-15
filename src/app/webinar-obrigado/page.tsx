import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inscrição Confirmada no Webinar! | UNIAGIL",
  description: "Sua inscrição no webinar da UNIAGIL foi confirmada com sucesso.",
};

export default function WebinarObrigado() {
  return (
    <section className="min-h-screen bg-light flex items-center justify-center py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/20">
          <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-secondary mb-4">
          Inscrição <span className="text-primary">Confirmada!</span>
        </h1>
        <p className="text-secondary/60 text-lg mb-6">
          Você está inscrito no webinar da UNIAGIL.
        </p>

        <div className="bg-secondary text-white rounded-2xl p-8 mb-8 text-left">
          <h2 className="font-bold text-primary mb-4">O que fazer agora:</h2>
          <ol className="space-y-3 text-white/70 list-none">
            {[
              "Verifique seu e-mail (e a caixa de spam)",
              "Salve a data e o horário do webinar",
              "Adicione o nosso e-mail aos seus contatos",
              "Compartilhe com quem pode se beneficiar",
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-secondary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <p className="text-secondary/50 text-sm mb-8">
          Enquanto espera, que tal conhecer nossos programas?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/lacpaberto"
            className="bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
          >
            Ver o Programa LACP
          </Link>
          <Link
            href="/"
            className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors"
          >
            Ir para o Site
          </Link>
        </div>
      </div>
    </section>
  );
}
