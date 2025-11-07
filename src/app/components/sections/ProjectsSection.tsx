import ProjectCard, { Project } from "../ui/ProjectCard";

const sampleProjects: Project[] = [
  { 
    id: "soft-manager", 
    title: "Soft Manager", 
    description: "Landing page for Enterprise Clinical Software - Sistema completo de gestão clínica com interface moderna e intuitiva.", 
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"], 
    url: "#",
    images: ["/soft.png", "/soft1.png", "/soft3.png", "/soft4.png"]
  },
  { 
    id: "planner-dental", 
    title: "Planner Dental", 
    description: "ERP completo para clínicas odontológicas com gestão de pacientes, agendamentos, prontuários digitais e controle financeiro integrado.", 
    tech: ["React", "Node.js", "PostgreSQL", "TypeScript"], 
    url: "#",
    images: ["/logo-planner.png", "/soft.png", "/soft1.png", "/soft3.png"]
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-32 md:py-40 flex flex-col items-center justify-center text-center mx-auto max-w-7xl px-4 transition-colors duration-300" 
             style={{ backgroundColor: 'var(--hero-bg)', color: 'var(--hero-text)' }}
             aria-labelledby="projects-heading">
      <div className="w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center transition-colors duration-300" 
            style={{ fontFamily: 'var(--font-bowlby-one), cursive', color: 'var(--hero-text)' }}>
          Projects
        </h1>
        <p className="text-lg md:text-xl mb-16 max-w-3xl mx-auto leading-relaxed transition-colors duration-300" 
           style={{ color: 'var(--muted-foreground)' }}>
          I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {sampleProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
