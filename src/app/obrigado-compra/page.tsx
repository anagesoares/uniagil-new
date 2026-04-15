import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compra Confirmada! | UNIAGIL",
  description: "Sua compra foi confirmada. Bem-vindo à UNIAGIL! Prepare-se para transformar sua carreira.",
};

export default function ObrigadoCompra() {
  return (
    <section className="min-h-screen bg-secondary flex items-center justify-center py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center mx-auto mb-8 shadow-xl shadow-primary/30">
          <svg className="w-14 h-14 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Compra <span className="text-primary">Confirmada!</span>
        </h1>
        <p className="text-white/70 text-lg mb-4">
          Seja bem-vindo à família UNIAGIL!
        </p>
        <p className="text-white/50 mb-3">
          Você receberá um e-mail com as instruções de acesso à plataforma em até 24 horas.
        </p>
        <p className="text-white/50 mb-10">
          Em caso de dúvidas, entre em contato com nosso suporte pelo WhatsApp.
        </p>

        <div className="bg-white/10 border border-primary/30 rounded-2xl p-6 mb-10">
          <p className="text-white font-medium">
            Próximo passo: verifique sua caixa de entrada e o spam do seu e-mail.
          </p>
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
            className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:border-primary hover:text-primary transition-colors"
          >
            Preciso de Ajuda
          </Link>
        </div>
      </div>
    </section>
  );
}
