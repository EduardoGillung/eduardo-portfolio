import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import ClientOnly from "./components/ui/ClientOnly";
import ColorBends from "./components/ui/ColorBends";


const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Meu Portfolio",
  description: "Portfolio pessoal criado com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Inline script: remove attributes injected by browser extensions (e.g. Dark Reader)
            before React hydrates, to avoid hydration mismatch errors. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var el=document.documentElement; if(!el) return; var attrs=[]; for(var i=0;i<el.attributes.length;i++){attrs.push(el.attributes[i].name);} attrs.forEach(function(name){ if(/^data-darkreader/.test(name)) el.removeAttribute(name); });}catch(e){} })();`,
          }}
        />
      </head>
      <body className={`${instrumentSans.variable} antialiased font-sans`}>
        <ColorBends />
        <ClientOnly>
          <Header />
          {children}
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}
