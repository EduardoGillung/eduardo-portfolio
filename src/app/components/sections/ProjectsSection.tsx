import ProjectCard, { Project } from "../ui/ProjectCard";

const sampleProjects: Project[] = [
  { id: "p1", title: "Projeto A", description: "Aplicação web moderna.", tech: ["Next.js", "TypeScript"], url: "#" },
  { id: "p2", title: "Projeto B", description: "UI/UX e animações.", tech: ["React"], url: "#" },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col items-center justify-center text-center mx-auto max-w-2xl px-4" aria-labelledby="projects-heading">
  <div className="w-full text-center">
  <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">Projetos</h1>
        <p className="lead">Uma seleção de trabalhos e experimentos.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {sampleProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
