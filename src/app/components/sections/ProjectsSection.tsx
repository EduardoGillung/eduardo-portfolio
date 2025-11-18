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
    id: "ong-project", 
    title: "ONG AJCS", 
    description: "Plataforma completa para gestão de ONGs com sistema de doações, voluntariado, gerenciamento de projetos sociais e relatórios de impacto.", 
    tech: ["React", "Vite","TypeScript", "ThreeJS", "TailwindCSS"], 
    url: "#",
    images: ["/ong.png", "/ong2.png", "/ong3.png", "/ong4.png"]
  },
  { 
    id: "planner-dental", 
    title: "Planner Dental", 
    description: "ERP completo para clínicas odontológicas com gestão de pacientes, agendamentos, prontuários digitais e controle financeiro integrado.", 
    tech: ["React", "Node.js", "PostgreSQL", "TypeScript"], 
    url: "#",
    images: ["/plan.png", "/soft.png", "/soft1.png", "/soft3.png"]
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16 md:py-24 flex flex-col items-center justify-center text-center transition-colors duration-300 z-10" 
             style={{ color: 'var(--hero-text)' }}
             aria-labelledby="projects-heading">
      <div className="w-full text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center transition-colors duration-300" 
            style={{ fontFamily: 'var(--font-bowlby-one), cursive', color: 'var(--hero-text)' }}>
          Projects
        </h1>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed transition-colors duration-300" 
           style={{ color: 'var(--muted-foreground)' }}>
          I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {sampleProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
