import Image from "next/image";

export type Project = {
  id: string;
  title: string;
  description: string;
  tech?: string[];
  url?: string;
  images?: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg" 
             style={{ 
               backgroundColor: 'var(--card-bg)', 
               borderColor: 'var(--border-color)',
               color: 'var(--card-text)'
             }}>
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-3 transition-colors duration-300" 
            style={{ fontFamily: 'var(--font-bowlby-one), cursive', color: 'var(--card-text)' }}>
          {project.title}
        </h3>
        <p className="leading-relaxed mb-4 transition-colors duration-300" 
           style={{ color: 'var(--muted-foreground)' }}>
          {project.description}
        </p>
        
        {project.images && project.images.length > 0 && (
          <div className="mb-6">
            {/* Imagem principal */}
            <div className="relative aspect-video rounded-xl overflow-hidden border mb-3 group/main"
                 style={{ 
                   backgroundColor: 'var(--muted)',
                   borderColor: 'var(--border-color)'
                 }}>
              <Image
                src={project.images[0]}
                alt={`${project.title} - Screenshot principal`}
                fill
                className="object-contain transition-transform duration-300 group-hover/main:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover/main:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Miniaturas das outras imagens */}
            {project.images.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {project.images.slice(1).map((image, index) => (
                  <div 
                    key={index + 1}
                    className="relative aspect-video rounded-lg overflow-hidden border transition-all duration-300 group/thumb hover:shadow-md"
                    style={{ 
                      backgroundColor: 'var(--muted)',
                      borderColor: 'var(--border-color)'
                    }}
                  >
                    <Image
                      src={image}
                      alt={`${project.title} - Screenshot ${index + 2}`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover/thumb:scale-110"
                      sizes="(max-width: 768px) 33vw, 16vw"
                      quality={90}
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover/thumb:bg-transparent transition-colors duration-300" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {project.tech && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full border transition-colors duration-300"
                style={{
                  backgroundColor: 'var(--muted)',
                  color: 'var(--muted-foreground)',
                  borderColor: 'var(--border-color)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {project.url && (
        <a 
          href={project.url} 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-md"
          style={{
            backgroundColor: 'var(--primary)',
            color: 'var(--primary-foreground)'
          }}
        >
          Ver projeto
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </article>
  );
}
