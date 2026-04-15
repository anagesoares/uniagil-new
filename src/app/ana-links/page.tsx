import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ana Paula - Links | UNIAGIL",
  description: "Todos os links importantes de Ana Paula, fundadora da UNIAGIL.",
};

const links = [
  { label: "Site Oficial UNIAGIL", href: "/" },
  { label: "Programa LACP Aberto", href: "/lacpaberto" },
  { label: "Pós-Graduação em Agilidade", href: "/pos-graduacao" },
  { label: "EACP - Agile Coach", href: "/pos-eacp" },
  { label: "Todos os Cursos", href: "/cursos" },
  { label: "Webinar Gratuito", href: "/webinar" },
  { label: "Roda Ágil", href: "/rodaagil" },
  { label: "Kit de Ferramentas", href: "/kitdeferramentas" },
  { label: "Contato", href: "/contato" },
];

export default function AnaLinks() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-secondary to-secondary/90 flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-sm">
        {/* Profile */}
        <div className="text-center mb-10">
          <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-secondary text-3xl font-bold shadow-lg shadow-primary/30">
            AP
          </div>
          <h1 className="text-xl font-bold text-white">@anapaula.uniagil</h1>
          <p className="text-primary text-sm font-medium mt-1">UNIAGIL - Escola de Agilidade</p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block w-full text-center bg-primary text-secondary font-bold py-3 px-6 rounded-full hover:bg-primary/90 transition-all duration-200 shadow-md"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-10">
          UNIAGIL © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
