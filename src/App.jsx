import './App.css';
import Experience from './sections/Experience/Experience';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Achievements from './sections/Achievements/Achievements';

function App() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
