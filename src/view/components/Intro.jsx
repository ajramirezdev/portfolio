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
          ? " text-neutral-500 p-6 py-16 flex flex-col gap-1 transform transition-all duration-700"
          : " text-neutral-500 p-6 py-16 flex flex-col gap-1 -translate-x-60 opacity-0"
      }
    >
      <div className="flex flex-col">
        <div className="font-medium text-base">Hi there! I'm</div>
        <div className="text-6xl text-green-800 abril-font">AJ Ramirez</div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="text-lg">
          A <span className="text-green-800 font-bold">Web Developer</span> with
          a serious <br /> passion for learning
        </div>
        <a href={Resume} className="button-89 font-bold text-center" download>
          Resume
        </a>
      </div>
    </section>
  );
};

export default Intro;
