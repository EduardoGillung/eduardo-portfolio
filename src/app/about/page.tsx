import React from "react";

export default function Page() {
  return (
    <main className="container page about-page">
      <section className="hero">
        <h1>Sobre mim</h1>
        <p className="lead">Sou desenvolvedor(a) front-end focado em projetos web modernos.</p>
      </section>

      <section className="content">
        <h2>O que eu faço</h2>
        <p>
          Crio interfaces e experiências digitais com ênfase em performance, acessibilidade e design.
        </p>

        <h3>Habilidades</h3>
        <ul className="skills">
          <li>Next.js / React</li>
          <li>TypeScript</li>
          <li>CSS moderno / Tailwind</li>
        </ul>
      </section>
    </main>
  );
}
