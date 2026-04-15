import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lista de Espera | UNIAGIL",
  description: "Entre na lista de espera e seja o primeiro a saber quando as matrículas abrirem para o próximo programa da UNIAGIL.",
};

export default function Pre() {
  return (
    <section className="min-h-screen bg-secondary flex items-center justify-center py-20 px-4">
      <div className="max-w-lg mx-auto text-center">
        <span className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-2 rounded-full mb-8">
          Em Breve
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          As Matrículas Estão <span className="text-primary">Quase Abertas</span>
        </h1>
        <p className="text-white/60 text-lg mb-10">
          Cadastre-se na lista VIP e garanta acesso antecipado às melhores condições antes da abertura oficial. Quem entra cedo, consegue mais.
        </p>

        <form className="space-y-4 max-w-sm mx-auto">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <input
            type="tel"
            placeholder="WhatsApp (com DDD)"
            className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-4 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="submit"
            className="w-full bg-primary text-secondary py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
          >
            Entrar na Lista VIP
          </button>
          <p className="text-white/30 text-xs">
            Sem spam. Você pode cancelar a qualquer momento.
          </p>
        </form>

        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          {[
            { num: "10k+", label: "Alunos Formados" },
            { num: "98%", label: "Satisfação" },
            { num: "5+", label: "Anos de Excelência" },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="text-primary text-2xl font-black">{num}</p>
              <p className="text-white/40 text-xs mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
