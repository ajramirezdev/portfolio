import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import { AiOutlineArrowDown } from "react-icons/ai";

const Portfolio = () => {
  return (
    <>
      <div className="h-screen">
        <div className="intro-img h-full relative">
          <NavBar />
          <Intro />
          <div className="hidden xl:flex absolute bottom-40 w-screen justify-center">
            <a
              href="#about"
              className="animate-bounce text-neutral-500 border-2 border-neutral-500 rounded-full bg-tranparent flex justify-center items-center p-2 w-11 h-11"
            >
              <AiOutlineArrowDown size={40} />
            </a>
          </div>
        </div>
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default Portfolio;
