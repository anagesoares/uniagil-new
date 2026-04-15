import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inscrição no Webinário Confirmada! | UNIAGIL",
  description: "Sua inscrição no webinário da UNIAGIL foi confirmada. Prepare-se para aprender sobre liderança ágil.",
};

export default function ObrigadoWebinario() {
  return (
    <section className="min-h-screen bg-light flex items-center justify-center py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/30">
          <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
          Sua vaga no webinário está <span className="text-primary">confirmada!</span>
        </h1>
        <p className="text-secondary/60 text-lg mb-6">
          Falta pouco! Fique atento ao seu e-mail — você receberá o link de acesso antes do evento.
        </p>

        <div className="bg-secondary text-white rounded-2xl p-6 mb-8 text-left">
          <h2 className="font-bold text-lg mb-3 text-primary">Importante:</h2>
          <ul className="space-y-2 text-white/70 text-sm">
            <li>Verifique sua caixa de entrada e o spam</li>
            <li>Salve a data e horário no seu calendário</li>
            <li>Adicione nosso e-mail à sua lista de contatos</li>
          </ul>
        </div>

        <p className="text-secondary/50 mb-8">
          Enquanto espera, que tal conhecer nossos programas completos?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/lacpaberto"
            className="bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
          >
            Conhecer o LACP
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
