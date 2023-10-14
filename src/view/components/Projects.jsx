import chirp from "../../assets/chirp.png";
import d2tt from "../../assets/d2tt.png";
import ramble from "../../assets/ramble.png";
import tlpkmn from "../../assets/tlpkmn.png";

const Projects = () => {
  return (
    <section id="projects" className="p-6 projects-img sm:p-10 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="abril-font text-5xl sm:text-6xl mb-4 sm:mb-9 md:mb-12 xl:mb-20 md:text-7xl xl:text-8xl text-neutral-200">
          Projects
        </div>
        <div className="py-8 xl:grid grid-cols-2 gap-x-8">
          <div className="project flex items-center mx-auto mb-8 justify-center relative aspect-video  rounded-lg overflow-hidden">
            <img
              className="project-image w-full h-full object-contain"
              src={ramble}
              alt="ramble chat app screenshot"
            />
            <div className="project-content flex flex-col justify-between absolute top-0 left-0 w-full h-full p-5 bg-neutral-100">
              <div>
                <p className=" text-neutral-800 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold m-0">
                  Ramble chat app
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-neutral-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex text-sm gap-2 ">
                <a
                  href="https://ramble-murex.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 bg-neutral-800 rounded text-neutral-200 border-neutral-800"
                >
                  live demo
                </a>
                <a
                  href="https://github.com/ajramirezdev/ramble-be"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 border-neutral-800 rounded"
                >
                  source code
                </a>
              </div>
            </div>
          </div>

          <div className="project dark-shadow flex items-center mx-auto mb-8 justify-center relative aspect-video  rounded-lg overflow-hidden">
            <img
              className="project-image w-full h-full object-contain"
              src={d2tt}
              alt="dota 2 tournament tracker screenshot"
            />
            <div className="project-content flex flex-col justify-between absolute top-0 left-0 w-full h-full p-5 bg-neutral-100">
              <div>
                <p className=" text-neutral-800 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold m-0">
                  dota2tournamenttracker
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-neutral-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex text-sm gap-2 ">
                <a
                  href="https://dota2tournamenttracker.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 bg-neutral-800 rounded text-neutral-200 border-neutral-800"
                >
                  live demo
                </a>
                <a
                  href="https://github.com/ajramirezdev/dota2tournamenttracker"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 border-neutral-800 rounded"
                >
                  source code
                </a>
              </div>
            </div>
          </div>

          <div className="project flex items-center justify-center mx-auto mb-8 relative aspect-video bg-neutral-200 rounded-lg overflow-hidden">
            <img
              className="project-image w-full h-full object-contain"
              src={tlpkmn}
              alt="talpokemon game"
            />
            <div className="project-content flex flex-col justify-between absolute top-0 left-0 w-full h-full p-5 bg-neutral-100">
              <div>
                <p className=" text-neutral-800 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold m-0">
                  TaLPoKeMoN
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-neutral-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex text-sm gap-2 ">
                <a
                  href="https://talpokemon.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 bg-neutral-800 rounded text-neutral-200 border-neutral-800"
                >
                  live demo
                </a>
                <a
                  href="https://github.com/ajramirezdev/talpokemon"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 border-neutral-800 rounded"
                >
                  source code
                </a>
              </div>
            </div>
          </div>

          <div className="project flex items-center justify-center mx-auto mb-8 relative aspect-video bg-neutral-200 rounded-lg overflow-hidden">
            <img
              className="project-image w-full h-full object-contain"
              src={chirp}
              alt="chirp landing page"
            />
            <div className="project-content flex flex-col justify-between absolute top-0 left-0 w-full h-full p-5 bg-neutral-100">
              <div>
                <p className=" text-neutral-800 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold m-0">
                  Chirp.
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-neutral-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex text-sm gap-2 ">
                <a
                  href="https://ajramirezdev.github.io/chirp-landing-page/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 bg-neutral-800 rounded text-neutral-200 border-neutral-800"
                >
                  live demo
                </a>
                <a
                  href="https://github.com/ajramirezdev/chirp-landing-page"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 border-neutral-800 rounded"
                >
                  source code
                </a>
              </div>
            </div>
          </div>

          <div className="project flex items-center justify-center mx-auto relative aspect-video bg-neutral-200 rounded-lg overflow-hidden">
            <img
              className="project-image w-full h-full object-contain"
              src={chirp}
              alt="chirp landing page"
            />
            <div className="project-content flex flex-col justify-between absolute top-0 left-0 w-full h-full p-5 bg-neutral-100">
              <div>
                <p className=" text-neutral-800 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold m-0">
                  Chirp.
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-neutral-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex text-sm gap-2 ">
                <a
                  href="https://ajramirezdev.github.io/chirp-landing-page/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 bg-neutral-800 rounded text-neutral-200 border-neutral-800"
                >
                  live demo
                </a>
                <a
                  href="https://github.com/ajramirezdev/chirp-landing-page"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 border-neutral-800 rounded"
                >
                  source code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
