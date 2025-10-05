import ProjectCard, { Project } from "../ui/ProjectCard";

const sampleProjects: Project[] = [
  { id: "p1", title: "Projeto A", description: "Aplicação web moderna.", tech: ["Next.js", "TypeScript"], url: "#" },
  { id: "p2", title: "Projeto B", description: "UI/UX e animações.", tech: ["React"], url: "#" },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="page-section projects-section" aria-labelledby="projects-heading">
      <div className="container">
        <h2 id="projects-heading">Projetos</h2>
        <p className="lead">Uma seleção de trabalhos e experimentos.</p>

        <div className="projects-grid">
          {sampleProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
