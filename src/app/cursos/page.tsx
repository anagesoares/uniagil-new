import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cursos",
  description: "Todos os cursos da UNIAGIL. Encontre a formacao ideal para sua carreira.",
};

const cursos = [
  {
    title: "LACP - Lideranca Agil e Cultura de Performance",
    desc: "O programa mais completo de formacao em lideranca agil do Brasil.",
    href: "/lacpaberto",
    tag: "Mais Popular",
  },
  {
    title: "Pos-Graduacao em Gestao Agil",
    desc: "Pos-graduacao reconhecida pelo MEC com foco em agilidade.",
    href: "/pos-graduacao",
    tag: "Pos-Graduacao",
  },
  {
    title: "EACP - Especializacao Avancada",
    desc: "Coaching agil e praticas avancadas de transformacao.",
    href: "/pos-eacp",
    tag: "Avancado",
  },
  {
    title: "Webinars Gratuitos",
    desc: "Conteudos gratuitos sobre agilidade e lideranca.",
    href: "/webinar",
    tag: "Gratuito",
  },
  {
    title: "Kit de Ferramentas",
    desc: "Ferramentas praticas para aplicar agilidade no dia a dia.",
    href: "/kitdeferramentas",
    tag: "Ferramenta",
  },
  {
    title: "Roda Agil",
    desc: "Avalie a maturidade agil da sua equipe.",
    href: "/rodaagil",
    tag: "Ferramenta",
  },
];

export default function Cursos() {
  return (
    <>
      <section className="bg-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Nossos <span className="text-primary">Cursos</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Encontre a formacao ideal para sua carreira em agilidade.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cursos.map((curso) => (
              <Link
                key={curso.href}
                href={curso.href}
                className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                  <span className="text-primary text-4xl font-bold">U</span>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                    {curso.tag}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                    {curso.title}
                  </h3>
                  <p className="mt-2 text-sm text-secondary/60">{curso.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
