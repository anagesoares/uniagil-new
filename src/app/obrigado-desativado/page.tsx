import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cadastro Recebido | UNIAGIL",
  description: "Recebemos seu cadastro. Fique atento ao seu e-mail para as próximas novidades da UNIAGIL.",
};

export default function ObrigadoDesativado() {
  return (
    <section className="min-h-screen bg-light flex items-center justify-center py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-secondary mb-4">
          Cadastro Recebido!
        </h1>
        <p className="text-secondary/60 text-lg mb-4">
          Obrigado pelo seu interesse!
        </p>
        <p className="text-secondary/50 mb-10">
          Infelizmente as vagas para essa turma já foram preenchidas. Mas não se preocupe — avisaremos você assim que abrirmos uma nova turma. Fique de olho no seu e-mail!
        </p>

        <Link
          href="/"
          className="bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
        >
          Conhecer Outros Programas
        </Link>
      </div>
    </section>
  );
}
