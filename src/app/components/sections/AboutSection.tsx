import Image from "next/image";
export default function AboutSection() {
  return (
  <section id="about" className="flex flex-col items-center justify-center mx-auto my-16 max-w-3xl px-4 pt-16 md:pt-24" aria-labelledby="about-heading">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center">Eduardo Gillung</h1>
          <p className="text-lg text-gray-700 mb-4">Fullstack Developer with a degree in Information Systems and 2 years of experience building modern web apps</p>
        </div>
          <div className="flex-shrink-0">
              <Image
                src="/me.png"
                alt="Eduardo Gillung"
                width={144}
                height={144}
                className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-lg"
                priority
              />
          </div>
      </div>

            {/* Bloco Sobre e Experiência */}
      <div className="w-full mt-12">
        <h2 className="text-2xl font-semibold mb-2">Sobre</h2>
        <p className="text-gray-700 mb-6 max-w-2xl">
          No final de 2022, decidi focar em projetos próprios e escalar meu negócio SaaS. Já atuei em grandes empresas de tecnologia, participei de hackathons e sou apaixonado por aprender e construir soluções inovadoras.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Experiência Profissional</h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo-planner.png" alt="Planner Dental" width={32} height={32} className="rounded-full" />
              <div>
                <span className="font-semibold">Planner Dental</span>
                <div className="text-sm text-gray-500">Fullstack Developer</div>
              </div>
            </div>
            <span className="text-gray-500 text-sm">Mai 2025 - Out 2025</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo-softmanager.png" alt="Softmanager" width={32} height={32} className="rounded-full object-cover" />
              <div>
                <span className="font-semibold">O.P.P Sistemas de Saúde</span>
                <div className="text-sm text-gray-500">Technical Support N2</div>
              </div>
            </div>
            <span className="text-gray-500 text-sm">Jan 2020 - Abr 2020</span>
          </li> 
        </ul>
      </div>

      {/* Bloco Educação */}
      <div className="w-full mt-12">
        <h2 className="text-2xl font-semibold mb-4">Educação</h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo-santacruz.png" alt="Santa Cruz Centro Universitário" width={32} height={32} className="rounded-full" />
              <div>
                <span className="font-semibold">Santa Cruz Centro Universitário</span>
                <div className="text-sm text-gray-500">Bachelor&#39;s Degree of Information Systems (BIS)</div>
              </div>
            </div>
            <span className="text-gray-500 text-sm">2016 - 2021</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo-langer.png" alt="Roberto Langer Júnior State School" width={32} height={32} className="rounded-full" />
              <div>
                <span className="font-semibold">Roberto Langer Júnior State School</span>
                <div className="text-sm text-gray-500">High School</div>
              </div>
            </div>
            <span className="text-gray-500 text-sm">2013 - 2019</span>
          </li>
        </ul>
      </div>

      {/* Bloco Skills */}
      <div className="w-full mt-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {['React', 'Next.js', 'Typescript', 'Node.js', 'Python', 'Go', 'Postgres', 'Docker', 'Kubernetes', 'Java', 'C++'].map(skill => (
            <span key={skill} className="bg-black text-white px-3 py-1 rounded-md text-sm font-semibold">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
