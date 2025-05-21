
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import AboutMe from "@/components/AboutMe";
import InternshipExperience from "@/components/InternshipExperience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Responsibilities from "@/components/Responsibilities";
import Publications from "@/components/Publications";
import ExtraCurricular from "@/components/ExtraCurricular";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section id="about" className="py-16">
          <AboutMe />
        </section>
        
        <section id="experience" className="py-16">
          <InternshipExperience />
        </section>
        
        <section id="projects" className="py-16">
          <Projects />
        </section>
        
        <section id="skills" className="py-16">
          <Skills />
        </section>
        
        <section id="certifications" className="py-16">
          <Certifications />
        </section>
        
        <section id="responsibilities" className="py-16">
          <Responsibilities />
        </section>
        
        <section id="publications" className="py-16">
          <Publications />
        </section>
        
        <section id="activities" className="py-16">
          <ExtraCurricular />
        </section>
        
        <section id="contact" className="py-16">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
