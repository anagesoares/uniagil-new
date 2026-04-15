import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-secondary text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            A maior escola de{" "}
            <span className="text-primary">Agilidade</span> do Brasil
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            Transforme sua carreira e sua organizacao com metodologias ageis.
            Cursos, certificacoes e pos-graduacao reconhecidos pelo mercado.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/lacpaberto"
              className="bg-primary text-secondary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-dark transition-colors"
            >
              Conheca o LACP
            </Link>
            <Link
              href="/pos-graduacao"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary hover:text-secondary transition-colors"
            >
              Pos-Graduacao
            </Link>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary">
            Por que escolher a UNIAGIL?
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Certificacao Reconhecida",
                desc: "Certificacoes valorizadas pelo mercado e reconhecidas internacionalmente.",
                icon: "🎓",
              },
              {
                title: "Metodologia Pratica",
                desc: "Aprenda fazendo. Nossos cursos sao 100% praticos e aplicaveis ao seu dia a dia.",
                icon: "🚀",
              },
              {
                title: "Comunidade Ativa",
                desc: "Faca parte de uma comunidade com milhares de profissionais ageis.",
                icon: "🤝",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
                <p className="mt-3 text-secondary/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos em destaque */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary">
            Nossos Cursos
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "LACP - Lideranca Agil",
                desc: "O programa mais completo de formacao em lideranca agil do Brasil.",
                href: "/lacpaberto",
                tag: "Mais Popular",
              },
              {
                title: "Pos-Graduacao em Agilidade",
                desc: "Pos-graduacao reconhecida pelo MEC com foco em gestao agil de projetos.",
                href: "/pos-graduacao",
                tag: "Pos-Graduacao",
              },
              {
                title: "EACP - Especializacao",
                desc: "Especializacao avancada em coaching e praticas ageis para profissionais.",
                href: "/pos-eacp",
                tag: "Avancado",
              },
            ].map((curso) => (
              <Link
                key={curso.href}
                href={curso.href}
                className="group block bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                  <span className="text-primary text-5xl font-bold">U</span>
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

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary">
            Pronto para transformar sua carreira?
          </h2>
          <p className="mt-4 text-secondary/70 text-lg">
            Junte-se a milhares de profissionais que ja transformaram suas
            carreiras com a UNIAGIL.
          </p>
          <Link
            href="/lacpaberto"
            className="mt-8 inline-block bg-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-secondary/90 transition-colors"
          >
            Comece Agora
          </Link>
        </div>
      </section>
    </>
  );
}
