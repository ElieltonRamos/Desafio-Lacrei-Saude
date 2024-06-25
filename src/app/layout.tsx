import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalStyle from "./GlobalStyle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lacrei Saude",
  description: "Desafio Técnico Lacrei Saúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <GlobalStyle />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
