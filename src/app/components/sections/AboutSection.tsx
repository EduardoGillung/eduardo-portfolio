import Image from "next/image";
import ContentCard from "../ui/ContentCard";
export default function AboutSection() {
  return (
    <section id="about" className="pt-24 md:pt-32 pb-16" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ContentCard className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center text-gray-800">Eduardo Gillung</h1>
          <p className="text-lg text-gray-600 mb-4">Fullstack Developer with a degree in Information Systems and 2 years of experience building modern web apps</p>
        </div>
      </div>

            {/* Bloco Sobre e Experiência */}
      <div className="w-full mt-12">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">About</h2>
        <p className="text-gray-600 mb-6 max-w-2xl">
          Lately, I&apos;ve been focusing more on frontend development and UI design 
          — bringing ideas to life through interfaces that feel good to use.
           I&apos;m currently open to freelance opportunities and new projects that challenge my creativity and technical skills.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Work Experience</h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo-planner.png" alt="Planner Dental" width={32} height={32} className="rounded-full" />
              <div>
                <span className="font-semibold">Planner Dental</span>
                  <div className="text-sm text-gray-600">Front-End Developer</div>
              </div>
            </div>
              <span className="text-gray-600 text-sm">Fev 2025 - Current</span>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo-softmanager.png" alt="Softmanager" width={32} height={32} className="rounded-full object-cover" />
              <div>
                <span className="font-semibold">O.P.P Sistemas de Saúde</span>
                <div className="text-sm text-gray-500">Technical Support N2</div>
              </div>
            </div>
            <span className="text-gray-500 text-sm">Fev 2022 - Jan 2025</span>
          </li> 
        </ul>
      </div>

      {/* Bloco Educação */}
      <div className="w-full mt-12">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo-santacruz.png" alt="Santa Cruz Centro Universitário" width={32} height={32} className="rounded-full" />
              <div>
                <span className="font-semibold">Santa Cruz Centro Universitário</span>
                <div className="text-sm text-gray-500">Bachelor&#39;s Degree of Information Systems (BIS)</div>
              </div>
            </div>
            <span className="text-gray-500 text-sm">2020 - 2024</span>
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
          {['React', 'Next.js', 'Typescript', 'Node.js', 'Python', 'Postgres', 'Docker', 'Java'].map(skill => (
            <span key={skill} className="bg-black text-white px-3 py-1 rounded-md text-sm font-semibold">{skill}</span>
          ))}
        </div>
        </div>
      </ContentCard>
      </div>
    </section>
  );
}