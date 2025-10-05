import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <div id="top" className="landing-root">
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
