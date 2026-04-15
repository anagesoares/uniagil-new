import Link from "next/link";

const footerLinks = {
  Cursos: [
    { href: "/lacpaberto", label: "LACP - Lideranca Agil" },
    { href: "/pos-graduacao", label: "Pos-Graduacao" },
    { href: "/pos-eacp", label: "EACP" },
    { href: "/cursos", label: "Todos os Cursos" },
  ],
  Institucional: [
    { href: "/politica-de-privacidade", label: "Politica de Privacidade" },
    { href: "/termos-de-uso", label: "Termos de Uso" },
    { href: "/contato", label: "Contato" },
  ],
  Conteudo: [
    { href: "/webinar", label: "Webinars" },
    { href: "/demo", label: "Demo" },
    { href: "/rodaagil", label: "Roda Agil" },
    { href: "/kitdeferramentas", label: "Kit de Ferramentas" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <span className="text-2xl font-bold text-primary">UNIAGIL</span>
            <p className="mt-3 text-sm text-white/60">
              A maior escola de Agilidade do Brasil. Transformando carreiras e
              organizacoes com metodologias ageis.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-sm uppercase tracking-wider text-primary mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} UNIAGIL. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
