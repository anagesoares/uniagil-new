import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cadastro | UNIAGIL",
  description: "Cadastre-se na UNIAGIL e dê o primeiro passo para transformar sua carreira com a liderança ágil.",
};

export default function Cadastro1() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Faça seu <span className="text-primary">Cadastro</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">
            Preencha os dados abaixo para garantir sua vaga e receber todas as informações sobre nossos programas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <form className="space-y-5">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-secondary mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Seu nome completo"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-secondary mb-1">
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label htmlFor="interesse" className="block text-sm font-medium text-secondary mb-1">
                  Qual programa te interessa?
                </label>
                <select
                  id="interesse"
                  name="interesse"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Selecione...</option>
                  <option value="lacp">LACP - Liderança Ágil Certificada</option>
                  <option value="pos">Pós-Graduação em Agilidade</option>
                  <option value="eacp">EACP - Especialização</option>
                  <option value="outros">Outros Cursos</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-secondary py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors mt-2"
              >
                Quero me Cadastrar
              </button>
            </form>

            <p className="text-center text-secondary/40 text-xs mt-6">
              Ao se cadastrar você concorda com nossa{" "}
              <Link href="/politica-de-privacidade" className="underline hover:text-primary">
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
