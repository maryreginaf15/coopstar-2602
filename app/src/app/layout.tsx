import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coopstar Express | Entregas Rápidas e Moto Frete em São Paulo",
  description: "Especialista em entregas e coletas em São Paulo e Grande SP há mais de 9 anos. Moto frete 24h em Moema com agilidade e segurança.",
  keywords: "moto frete sp, entregas rápidas moema, delivery corporativo são paulo, logistica urbana sp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
