import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Você Ganhou um Bônus Surpresa! | UNIAGIL",
  description: "Temos uma surpresa especial para você! Descubra seu bônus exclusivo da UNIAGIL.",
};

export default function Surpresa() {
  return (
    <section className="min-h-screen bg-secondary flex items-center justify-center py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        <div className="text-7xl mb-6">🎁</div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Você Ganhou um <span className="text-primary">Bônus Surpresa!</span>
        </h1>
        <p className="text-white/70 text-lg mb-8">
          Como agradecimento especial, separamos um bônus exclusivo para você. Não esperava por isso, né?
        </p>

        <div className="bg-white/10 border border-primary/30 rounded-2xl p-8 mb-8">
          <h2 className="text-primary font-bold text-xl mb-4">Seu bônus inclui:</h2>
          <ul className="space-y-3 text-white/70 text-left">
            {[
              "Kit de Ferramentas Ágeis (valor R$ 397)",
              "Acesso ao Webinar Exclusivo de Bônus",
              "E-book: Liderança Ágil na Prática",
              "Template Pack para Cerimônias Ágeis",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="text-primary">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-8">
          <p className="text-white/80 text-sm">
            Este bônus está automaticamente vinculado à sua compra. Acesse pelo link que enviamos ao seu e-mail.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/lacpaberto"
            className="bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
          >
            Ver Oferta Completa
          </Link>
          <Link
            href="/"
            className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold hover:border-primary hover:text-primary transition-colors"
          >
            Ir para o Site
          </Link>
        </div>
      </div>
    </section>
  );
}
