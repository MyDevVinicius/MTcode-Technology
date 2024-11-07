import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google';

const poppins = Inter({ subsets: ['latin'], weight: ['400', '600'] });


export const metadata: Metadata = {
  title: "MTcode Tecnologia ",
  description: "MTCode Tecnologia  é uma empresa especializada em soluções tecnológicas inovadoras, oferecendo serviços de desenvolvimento de software, consultoria em TI e integração de sistemas. Com foco em inovação, usamos as tecnologias mais avançadas, como IA, Big Data e Cloud Computing, para otimizar processos e impulsionar a transformação digital de nossos clientes.Essa descrição é mais direta e ideal para uso em metadados, como tags de SEO ou em cartões de serviço",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
       <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
