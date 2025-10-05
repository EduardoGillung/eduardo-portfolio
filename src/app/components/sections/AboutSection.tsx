export default function AboutSection() {
  return (
    <section id="about" className="page-section about-section" aria-labelledby="about-heading">
      <div className="container">
        <h2 id="about-heading">Sobre mim</h2>
        <p className="lead">Sou desenvolvedor(a) front-end focado em projetos web modernos.</p>

        <h3>O que eu faço</h3>
        <p>
          Crio interfaces e experiências digitais com ênfase em performance, acessibilidade e design.
        </p>

        <h3>Habilidades</h3>
        <ul className="skills">
          <li>Next.js / React</li>
          <li>TypeScript</li>
          <li>CSS moderno / Tailwind</li>
        </ul>
      </div>
    </section>
  );
}
