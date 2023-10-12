import About from "../components/About";
import Contact from "../components/Contact";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";

const Portfolio = () => {
  return (
    <>
      <div className="h-screen">
        <div className="intro-img h-full">
          <NavBar />
          <Intro />
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Portfolio;
