type Project = {
  id: string;
  title: string;
  description: string;
  tech?: string[];
  url?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p className="muted">{project.description}</p>
      {project.tech && (
        <p className="tech">{project.tech.join(" • ")}</p>
      )}
      {project.url && (
        <a className="button" href={project.url} target="_blank" rel="noreferrer">Ver projeto</a>
      )}
    </article>
  );
}
