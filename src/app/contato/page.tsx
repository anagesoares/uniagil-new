import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a UNIAGIL. Estamos prontos para ajudar voce.",
};

export default function Contato() {
  return (
    <>
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Fale <span className="text-primary">Conosco</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Tire suas duvidas, solicite informacoes sobre cursos ou fale com
            nosso time.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-secondary">
                Nome completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:ring-primary"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-secondary">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:ring-primary"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-secondary">
                Telefone
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:ring-primary"
                placeholder="(00) 00000-0000"
              />
            </div>
            <div>
              <label htmlFor="assunto" className="block text-sm font-medium text-secondary">
                Assunto
              </label>
              <select
                id="assunto"
                name="assunto"
                className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:ring-primary"
              >
                <option>LACP - Lideranca Agil</option>
                <option>Pos-Graduacao</option>
                <option>EACP</option>
                <option>Webinars</option>
                <option>Outro</option>
              </select>
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-secondary">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-secondary focus:border-primary focus:ring-primary"
                placeholder="Sua mensagem..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-secondary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-dark transition-colors"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
