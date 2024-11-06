import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MTcode Tecnology",
  description: "MTCode Technology é uma empresa especializada em soluções tecnológicas inovadoras, oferecendo serviços de desenvolvimento de software, consultoria em TI e integração de sistemas. Com foco em inovação, usamos as tecnologias mais avançadas, como IA, Big Data e Cloud Computing, para otimizar processos e impulsionar a transformação digital de nossos clientes.Essa descrição é mais direta e ideal para uso em metadados, como tags de SEO ou em cartões de serviço",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
