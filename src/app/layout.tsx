import type { Metadata } from "next";
import { Instrument_Sans, Bowlby_One } from "next/font/google";
import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import ClientOnly from "./components/ui/ClientOnly";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bowlbyOne = Bowlby_One({
  variable: "--font-bowlby-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Eduardo Gillung - Front-end Developer",
  description: "Portfolio pessoal criado com Next.js",
  icons: {
    icon: '/haru.svg',
    shortcut: '/haru.svg',
    apple: '/haru.svg',
  },
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
      <body className={`${instrumentSans.variable} ${bowlbyOne.variable} antialiased font-sans`}>
        <ClientOnly>
          <Header />
          {children}
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}
