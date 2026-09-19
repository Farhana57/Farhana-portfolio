import ScrollToTop from '../components/ScrollToTop';
import CustomCursor from '../components/CustomCursor';
import ParticleBackground from '../components/ParticleBackground';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Projects from '../components/Projects';
import Services from '../components/Services';
import TechMarquee from '../components/TechMarquee';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen text-white relative selection:bg-purple-500 selection:text-black overflow-x-hidden">
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <TechMarquee />
      <Skills />
      <ExperienceTimeline />
      <Projects />
      <Testimonials />
      <BlogSection />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </main>
  );
}