/* eslint-disable react/no-unescaped-entities */
import ProjectCard, { Project } from "../ui/ProjectCard";

const sampleProjects: Project[] = [
  { id: "p1", title: "Projeto A", description: "Aplicação web moderna.", tech: ["Next.js", "TypeScript"], url: "#" },
  { id: "p2", title: "Projeto B", description: "UI/UX e animações.", tech: ["React"], url: "#" },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 md:py-40 flex flex-col items-center justify-center text-center mx-auto max-w-2xl px-4 transition-colors duration-300" aria-labelledby="projects-heading" style={{ backgroundColor: 'var(--card-bg)', color: 'var(--card-text)' }}>
  <div className="w-full text-center">
  <h1 className="text-3xl font-bold mb-6 text-center transition-colors duration-300" style={{ fontFamily: 'var(--font-bowlby-one), cursive', color: 'var(--card-text)' }}>Projects</h1>
        <p className="lead transition-colors duration-300" style={{ color: 'var(--muted-foreground)' }}>I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {sampleProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
