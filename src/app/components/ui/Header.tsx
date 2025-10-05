import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <a href="#top" className="logo">Eduardo Gillung</a>
        <nav className="nav">
          <a href="#projects">Projetos</a>
          <a href="#about">Sobre</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  );
}
