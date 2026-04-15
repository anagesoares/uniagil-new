import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Obrigado! | UNIAGIL",
  description: "Recebemos seu contato. Em breve nossa equipe entrará em contato com você.",
};

export default function Obrigado() {
  return (
    <section className="min-h-screen bg-light flex items-center justify-center py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/30">
          <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-secondary mb-4">
          Obrigado!
        </h1>
        <p className="text-secondary/60 text-lg mb-4">
          Recebemos seu contato com sucesso.
        </p>
        <p className="text-secondary/50 mb-10">
          Nossa equipe entrará em contato com você em breve pelo WhatsApp ou e-mail informado. Fique de olho!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
          >
            Voltar para o Site
          </Link>
          <Link
            href="/cursos"
            className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-bold hover:bg-secondary hover:text-white transition-colors"
          >
            Ver Nossos Cursos
          </Link>
        </div>
      </div>
    </section>
  );
}
