import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inscrito no Webinar! | UNIAGIL",
  description: "Você está inscrito no webinar da UNIAGIL. Verifique seu e-mail para detalhes do acesso.",
};

export default function ObrigadoWebinar() {
  return (
    <section className="min-h-screen bg-secondary flex items-center justify-center py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/30">
          <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-white mb-4">
          Vaga <span className="text-primary">Garantida!</span>
        </h1>
        <p className="text-white/70 text-lg mb-4">
          Você está inscrito no webinar da UNIAGIL.
        </p>
        <p className="text-white/50 mb-8">
          Em breve você receberá o e-mail com o link de acesso e todos os detalhes. Não se esqueça de verificar o spam!
        </p>

        <div className="bg-white/10 border border-primary/20 rounded-xl p-5 mb-8">
          <p className="text-white/80 text-sm">
            Adicione nosso e-mail <span className="text-primary font-bold">contato@uniagil.com.br</span> à sua lista de contatos para não perder nenhuma mensagem.
          </p>
        </div>

        <Link
          href="/"
          className="bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
        >
          Voltar para o Site
        </Link>
      </div>
    </section>
  );
}
