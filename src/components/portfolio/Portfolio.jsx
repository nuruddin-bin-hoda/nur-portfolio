import Header from "../portal/Header";
import Hero from "../portal/Hero";
import About from "../portal/About";
import Skills from "../portal/Skills";
import Projects from "../portal/Projects";
import Contact from "../portal/Contact";
import Footer from "../portal/Footer";

function Portfolio() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Portfolio;
