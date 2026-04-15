import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oferta Encerrada | UNIAGIL",
  description: "Esta oferta não está mais disponível. Confira nossas ofertas ativas na UNIAGIL.",
};

export default function Desativado22() {
  return (
    <section className="min-h-screen bg-light flex items-center justify-center py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-secondary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-secondary mb-4">
          Esta oferta foi encerrada
        </h1>
        <p className="text-secondary/60 text-lg mb-8">
          Infelizmente essa oferta não está mais disponível. Mas temos outros programas e condições especiais esperando por você!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/lacpaberto"
            className="bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
          >
            Ver Ofertas Ativas
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
