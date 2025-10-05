import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="logo">
          MeuPortfolio
        </Link>
        <nav className="nav">
          <Link href="/projects">Projetos</Link>
          <Link href="/about">Sobre</Link>
          <Link href="/contact">Contato</Link>
        </nav>
      </div>
    </header>
  );
}
