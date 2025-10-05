import React from "react";
import ProjectCard from "../components/ui/ProjectCard";

const sampleProjects = [
  {
    id: "p1",
    title: "Projeto A",
    description: "Descrição curta do projeto A. Uma aplicação web moderna.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    url: "#",
  },
  {
    id: "p2",
    title: "Projeto B",
    description: "Descrição curta do projeto B. UI/UX e animações.",
    tech: ["React", "Framer Motion"],
    url: "#",
  },
];

export default function Page() {
  return (
    <main className="container page projects-page">
      <section className="hero">
        <h1>Projetos</h1>
        <p className="lead">Uma seleção de trabalhos e experimentos.</p>
      </section>

      <section className="projects-grid">
        {sampleProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </section>
    </main>
  );
}
