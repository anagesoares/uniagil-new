import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Últimas Vagas! | UNIAGIL",
  description: "Restam apenas as últimas vagas para o programa LACP. Garanta a sua antes que acabe!",
};

export default function VdUltimasVagas() {
  return (
    <>
      {/* Hero urgência */}
      <section className="bg-secondary text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 bg-red-600 text-white text-center py-3 text-sm font-bold tracking-wide uppercase">
          Atenção: Últimas Vagas Disponíveis!
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <span className="inline-block bg-red-500/20 text-red-400 border border-red-500/30 text-sm font-black px-5 py-2 rounded-full mb-6 uppercase tracking-widest">
            Vagas Esgotando
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Esta é <span className="text-primary">Sua Última Chance</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Restam apenas as últimas vagas para esta turma do LACP. Quando acabar, não haverá nova turma tão cedo. Não deixe para depois o que pode mudar sua vida agora.
          </p>

          <div className="mt-10 bg-white/10 border border-primary/40 rounded-2xl p-8 max-w-sm mx-auto">
            <p className="text-white/60 text-sm line-through mb-1">De R$ 3.997</p>
            <p className="text-primary text-5xl font-black">R$ 1.997</p>
            <p className="text-white/70 text-sm mt-2">ou 12x sem juros</p>
          </div>

          <Link
            href="/lacpaberto"
            className="mt-10 inline-block bg-primary text-secondary px-10 py-5 rounded-full text-xl font-black hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 animate-pulse"
          >
            GARANTIR MINHA VAGA AGORA
          </Link>
          <p className="mt-4 text-white/40 text-sm">Vagas esgotando. Garantia de 7 dias.</p>
        </div>
      </section>

      {/* Prova social */}
      <section className="py-16 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary mb-10">
            Quem já está na turma diz:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                nome: "Rodrigo M.",
                cargo: "Scrum Master",
                texto: "O LACP foi o divisor de águas na minha carreira. Em 3 meses já tinha recebido uma promoção.",
              },
              {
                nome: "Carla B.",
                cargo: "Product Owner",
                texto: "Nunca imaginei que aprender agilidade pudesse ser tão prático e aplicável. Recomendo demais!",
              },
              {
                nome: "Felipe S.",
                cargo: "Tech Lead",
                texto: "Meu time entrega 40% mais rápido depois que apliquei o que aprendi no LACP.",
              },
            ].map(({ nome, cargo, texto }) => (
              <div key={nome} className="bg-white p-6 rounded-2xl shadow-sm">
                <p className="text-secondary/70 text-sm mb-4 italic">&ldquo;{texto}&rdquo;</p>
                <p className="font-bold text-secondary">{nome}</p>
                <p className="text-secondary/50 text-xs">{cargo}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/lacpaberto"
              className="inline-block bg-primary text-secondary px-10 py-5 rounded-full text-lg font-bold hover:bg-primary/90 transition-colors"
            >
              Quero a Última Vaga
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
