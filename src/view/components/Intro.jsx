import { useEffect, useState } from "react";
import Resume from "../../assets/AJRamirez_FullStackDev_MERN_2023.pdf";

const Intro = () => {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setAnimation(true);
    }, 300);
  }, []);

  return (
    <section
      className={
        animation
          ? " text-neutral-500 text-center p-6 py-16 flex flex-col gap-4 transform transition-all duration-700"
          : " text-neutral-500 text-center p-6 py-16 flex flex-col gap-4 -translate-x-60 opacity-0"
      }
    >
      <div className="flex flex-col gap-2">
        <div className="text-lg sm:text-xl sm:mb-2 md:text-2xl xl:text-3xl">
          Hi there! I'm
        </div>
        <div className="text-6xl sm:text-7xl sm:mb-3 md:text-8xl xl:text-9xl text-green-800 abril-font">
          AJ Ramirez
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="text-xl sm:text-2xl md:text-3xl xl:text-4xl">
          A <span className="text-green-800 font-bold">Web Developer</span> with
          a serious <br /> passion for learning
        </div>
        <a
          href={Resume}
          className="button border-1 border-green-800 bg-transparent rounded text-neutral-500 mx-auto"
          download
        >
          <span className="button__text ">Resume</span>
          <span className="button__icon bg-green-800 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 35 35"
              id="bdd05811-e15d-428c-bb53-8661459f9307"
              data-name="Layer 2"
              className="svg fill-neutral-300"
            >
              <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
              <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
              <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Intro;
