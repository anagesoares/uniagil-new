import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kit de Ferramentas",
  description: "Baixe o Kit de Ferramentas Ageis da UNIAGIL. Templates, checklists e mais.",
};

export default function KitDeFerramentas() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-secondary">
          Kit de <span className="text-primary">Ferramentas</span> Ageis
        </h1>
        <p className="mt-6 text-lg text-secondary/70">
          Templates, checklists e ferramentas praticas para aplicar agilidade no
          seu dia a dia.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Template de Sprint Planning",
            "Checklist de Daily Scrum",
            "Canvas de Retrospectiva",
            "Modelo de Kanban Board",
          ].map((tool) => (
            <div key={tool} className="bg-light p-6 rounded-xl">
              <h3 className="font-bold text-secondary">{tool}</h3>
            </div>
          ))}
        </div>
        <Link
          href="/contato"
          className="mt-10 inline-block bg-primary text-secondary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-dark transition-colors"
        >
          Baixar Kit Gratuito
        </Link>
      </div>
    </section>
  );
}
