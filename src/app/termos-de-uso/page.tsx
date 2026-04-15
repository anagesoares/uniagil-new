import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso da plataforma UNIAGIL.",
};

export default function TermosDeUso() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
        <h1 className="text-4xl font-bold text-secondary">Termos de Uso</h1>
        <p className="mt-6 text-secondary/70">
          Ao utilizar os servicos da UNIAGIL, voce concorda com os termos e
          condicoes descritos abaixo.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-secondary">1. Aceitacao dos Termos</h2>
        <p className="text-secondary/70">
          Ao acessar e utilizar nossos servicos, voce aceita e concorda em
          cumprir estes termos.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-secondary">2. Servicos</h2>
        <p className="text-secondary/70">
          A UNIAGIL oferece cursos, treinamentos e materiais educacionais na
          area de agilidade.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-secondary">3. Propriedade Intelectual</h2>
        <p className="text-secondary/70">
          Todo o conteudo disponibilizado pela UNIAGIL e protegido por direitos
          autorais.
        </p>
      </div>
    </section>
  );
}
