import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import ClientOnly from "./components/ui/ClientOnly";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientOnly>
          <Navbar />
          {children}
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}
