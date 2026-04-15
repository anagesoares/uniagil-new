import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MetaPixel } from "@/components/MetaPixel";
import { UTMProvider } from "@/components/UTMProvider";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "UNIAGIL - Agilidade para Resultados",
    template: "%s | UNIAGIL",
  },
  description:
    "A UNIAGIL e a maior escola de Agilidade do Brasil. Cursos, pos-graduacao e certificacoes em metodologias ageis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={sora.className}>
      <body className="min-h-screen flex flex-col">
        <MetaPixel />
        <Suspense>
          <UTMProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </UTMProvider>
        </Suspense>
      </body>
    </html>
  );
}
