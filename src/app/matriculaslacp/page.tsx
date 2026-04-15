import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Matrículas LACP | UNIAGIL",
  description: "Faça sua matrícula no LACP - Liderança Ágil Certificada, o programa mais completo de formação ágil do Brasil.",
};

export default function MatriculasLacp() {
  return (
    <>
      <section className="bg-secondary text-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-primary/20 text-primary text-sm font-bold px-4 py-2 rounded-full mb-6">
            Matrículas Abertas
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Garanta sua Vaga no <span className="text-primary">LACP</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            O programa de Liderança Ágil Certificada mais completo do Brasil. Matrículas abertas com vagas limitadas.
          </p>
          <Link
            href="/lacpaberto"
            className="mt-10 inline-block bg-primary text-secondary px-10 py-5 rounded-full text-xl font-black hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
          >
            QUERO ME MATRICULAR
          </Link>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Informações */}
            <div>
              <h2 className="text-2xl font-bold text-secondary mb-6">Sobre o LACP</h2>
              <div className="space-y-4">
                {[
                  { label: "Duração", value: "6 meses" },
                  { label: "Formato", value: "Online ao vivo + Gravado" },
                  { label: "Certificação", value: "LACP - Reconhecida pelo Mercado" },
                  { label: "Início", value: "Próxima turma em breve" },
                  { label: "Vagas", value: "Limitadas por turma" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
                    <span className="text-secondary/60 font-medium">{label}</span>
                    <span className="text-secondary font-bold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Rápido */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-secondary mb-6">Quero me matricular</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp com DDD"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-secondary py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
                >
                  Garantir Minha Vaga
                </button>
              </form>
              <p className="text-secondary/40 text-xs text-center mt-4">
                Sem spam. Seus dados estão seguros.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
