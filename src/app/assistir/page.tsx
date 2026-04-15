import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Assistir | UNIAGIL",
  description: "Assista aos conteúdos exclusivos da UNIAGIL sobre liderança ágil e desenvolvimento profissional.",
};

export default function Assistir() {
  return (
    <>
      <section className="bg-secondary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Assista e <span className="text-primary">Aprenda</span>
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
            Conteúdo exclusivo sobre agilidade, liderança e transformação organizacional com os especialistas da UNIAGIL.
          </p>
        </div>
      </section>

      <section className="py-16 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Video Placeholder */}
          <div className="bg-secondary rounded-2xl overflow-hidden aspect-video flex items-center justify-center mb-10 shadow-xl">
            <div className="text-center text-white">
              <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white/70 text-lg">Seu conteúdo está carregando...</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-secondary mb-4">
              Gostou do conteúdo?
            </h2>
            <p className="text-secondary/70 mb-8">
              Conheça nossos programas completos e dê o próximo passo na sua carreira ágil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lacpaberto"
                className="bg-primary text-secondary px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
              >
                Conhecer o LACP
              </Link>
              <Link
                href="/webinar"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-secondary transition-colors"
              >
                Ver Webinars Gratuitos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
