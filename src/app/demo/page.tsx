import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo",
  description: "Veja uma demonstracao do programa LACP da UNIAGIL.",
};

export default function Demo() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-secondary">
          Assista a <span className="text-primary">Demonstracao</span>
        </h1>
        <p className="mt-6 text-lg text-secondary/70">
          Conheca o programa LACP e descubra como a agilidade pode transformar
          sua carreira e sua organizacao.
        </p>
        <div className="mt-12 aspect-video bg-secondary/5 rounded-2xl flex items-center justify-center">
          <p className="text-secondary/40 text-lg">Video da demonstracao</p>
        </div>
        <Link
          href="/lacpaberto"
          className="mt-10 inline-block bg-primary text-secondary px-8 py-4 rounded-full text-lg font-bold hover:bg-primary-dark transition-colors"
        >
          Quero me inscrever no LACP
        </Link>
      </div>
    </section>
  );
}
