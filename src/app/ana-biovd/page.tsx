import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ana Paula - Bio | UNIAGIL",
  description: "Conheça Ana Paula, fundadora da UNIAGIL e especialista em liderança ágil no Brasil.",
};

const links = [
  { label: "LACP - Liderança Ágil", href: "/lacpaberto" },
  { label: "Pós-Graduação em Agilidade", href: "/pos-graduacao" },
  { label: "EACP - Especialização", href: "/pos-eacp" },
  { label: "Cursos UNIAGIL", href: "/cursos" },
  { label: "Webinar Gratuito", href: "/webinar" },
  { label: "Fale Conosco", href: "/contato" },
];

export default function AnaBiovd() {
  return (
    <section className="min-h-screen bg-secondary flex flex-col items-center justify-center py-16 px-4">
      <div className="w-full max-w-md">
        {/* Profile Card */}
        <div className="text-center mb-10">
          <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 text-secondary text-4xl font-bold">
            A
          </div>
          <h1 className="text-2xl font-bold text-white">Ana Paula</h1>
          <p className="text-primary font-medium mt-1">Fundadora & CEO da UNIAGIL</p>
          <p className="text-white/60 text-sm mt-3 max-w-xs mx-auto">
            Especialista em Liderança Ágil, Agile Coach e educadora com mais de 15 anos de experiência no mercado brasileiro.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block w-full text-center bg-white/10 hover:bg-primary hover:text-secondary text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 border border-white/10 hover:border-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-10">
          © {new Date().getFullYear()} UNIAGIL
        </p>
      </div>
    </section>
  );
}
