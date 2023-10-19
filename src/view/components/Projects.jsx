import chirp from "../../assets/chirp.png";
import d2tt from "../../assets/d2tt.png";
import ramble from "../../assets/ramble.png";
import tlpkmn from "../../assets/tlpkmn.jpg";
import portfolio from "../../assets/portfolio.jpg";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JS from "../../assets/js.png";
import React from "../../assets/react.png";
import Tailwind from "../../assets/tailwind.png";
import NodeJs from "../../assets/nodejs.png";
import MongoDB from "../../assets/mongodb.svg";
import Express from "../../assets/express.png";
import SocketIO from "../../assets/socketio.png";
import Firebase from "../../assets/firebase.png";

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
              <div className="flex flex-col sm:gap-3">
                <p className=" text-neutral-800 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold m-0">
                  Ramble chat app
                </p>
                <div className="flex gap-2">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={Tailwind}
                    alt="Tailwind CSS icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={React}
                    alt="React icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={NodeJs}
                    alt="NodeJS icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={Express}
                    alt="Express icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={MongoDB}
                    alt="MongoDB icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={SocketIO}
                    alt="Socket.io icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={Firebase}
                    alt="Firebase icon"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-neutral-600">
                  Ramble is a webiste created to meet new people and connect you
                  with your friends.
                  <span className="hidden sm:inline">
                    {" "}
                    It empowers you to establish chatrooms for your groups or
                    exchange private messages. To enable real-time chatting, we
                    harnessed the capabilities of Socket.io, and we incorporated
                    Firebase Storage, allowing users to effortlessly upload and
                    display their profile pictures.
                  </span>
                </p>
              </div>
              <div className="flex text-sm gap-2 ">
                <a
                  href="https://ramble-murex.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 bg-neutral-800 rounded text-neutral-200 border-neutral-800 hover:bg-neutral-700 hover:border-neutral-700 transition ease-out duration-500"
                >
                  live demo
                </a>
                <a
                  href="https://github.com/ajramirezdev/ramble-be"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 border-neutral-800 rounded hover:border-neutral-700 hover:text-neutral-700 transition ease-out duration-500"
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
              <div className="flex flex-col sm:gap-3">
                <p className=" text-neutral-800 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold m-0">
                  dota2tournamenttracker
                </p>
                <div className="flex gap-2">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={React}
                    alt="React icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={NodeJs}
                    alt="NodeJS icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={Express}
                    alt="Express icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={MongoDB}
                    alt="MongoDB icon"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-neutral-600">
                  Using the data I fetched from OpenDota API, I made a webiste
                  that operates like a search engine for Dota 2 tournaments.
                  <span className="hidden sm:inline">
                    When users pick a specific tournament, they are directed to
                    a page with more details, including the teams involved and
                    recent match information. Users can also log in and bookmark
                    their preferred tournaments.
                  </span>
                </p>
              </div>
              <div className="flex text-sm gap-2 ">
                <a
                  href="https://dota2tournamenttracker.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 bg-neutral-800 rounded text-neutral-200 border-neutral-800 hover:bg-neutral-700 hover:border-neutral-700 transition ease-out duration-500"
                >
                  live demo
                </a>
                <a
                  href="https://github.com/ajramirezdev/dota2tournamenttracker"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 border-neutral-800 rounded hover:border-neutral-700 hover:text-neutral-700 transition ease-out duration-500"
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
              <div className="flex flex-col sm:gap-3">
                <p className=" text-neutral-800 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold m-0">
                  TaLPoKeMoN
                </p>
                <div className="flex gap-2">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={HTML}
                    alt="HTML icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={CSS}
                    alt="CSS icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={JS}
                    alt="JavaScript icon"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-neutral-600">
                  The concept for this JavaScript game came from a playful twist
                  on the words "Pokemon" and "Talpakan," which I found funny.
                  <span className="hidden sm:inline">
                    This led me to create a turn-based game, reminiscent of the
                    Pokemon series, where players engage in battles not with
                    Pokémons but with chickens. I hope you enjoy this
                    Frankenstein of a game!
                  </span>
                </p>
              </div>
              <div className="flex text-sm gap-2 ">
                <a
                  href="https://talpokemon.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 bg-neutral-800 rounded text-neutral-200 border-neutral-800 hover:bg-neutral-700 hover:border-neutral-700 transition ease-out duration-500"
                >
                  live demo
                </a>
                <a
                  href="https://github.com/ajramirezdev/talpokemon"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 border-neutral-800 rounded hover:border-neutral-700 hover:text-neutral-700 transition ease-out duration-500"
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
              <div className="flex flex-col sm:gap-3">
                <p className=" text-neutral-800 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold m-0">
                  Chirp.
                </p>
                <div className="flex gap-2">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={HTML}
                    alt="HTML icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={CSS}
                    alt="CSS icon"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-neutral-600">
                  I put together this landing page for Chirp using HTML and CSS,
                  mainly to practice laying out content and working with media
                  queries.
                  <span className="hidden sm:inline">
                    {" "}
                    What's interesting about this project is that it was the
                    first time I focused on mobile view styling. I quickly
                    realized that starting with mobile design made easier for me
                    to make the website more responsive and user-friendly.
                  </span>
                </p>
              </div>
              <div className="flex text-sm gap-2 ">
                <a
                  href="https://ajramirezdev.github.io/chirp-landing-page/"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 bg-neutral-800 rounded text-neutral-200 border-neutral-800 hover:bg-neutral-700 hover:border-neutral-700 transition ease-out duration-500"
                >
                  live demo
                </a>
                <a
                  href="https://github.com/ajramirezdev/chirp-landing-page"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 border-neutral-800 rounded hover:border-neutral-700 hover:text-neutral-700 transition ease-out duration-500"
                >
                  source code
                </a>
              </div>
            </div>
          </div>

          <div className="project dark-shadow flex items-center justify-center mx-auto relative aspect-video bg-neutral-200 rounded-lg overflow-hidden">
            <img
              className="project-image w-full h-full object-contain"
              src={portfolio}
              alt="chirp landing page"
            />
            <div className="project-content flex flex-col justify-between absolute top-0 left-0 w-full h-full p-5 bg-neutral-100">
              <div className="flex flex-col sm:gap-3">
                <p className=" text-neutral-800 text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold m-0">
                  Portfolio
                </p>
                <div className="flex gap-2">
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={Tailwind}
                    alt="HTML icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={React}
                    alt="CSS icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={NodeJs}
                    alt="CSS icon"
                  />
                  <img
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
                    src={Express}
                    alt="CSS icon"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm sm:text-base md:text-lg xl:text-xl text-neutral-600">
                  Using what I've learned so far, I expressed myself creatively
                  in making my latest portfolio.
                  <span className="hidden sm:inline">
                    {" "}
                    This website serves as a canvas for me to express my
                    abilities and showcase my most recent projects, providing
                    visitors with a comprehensive look at what I have to offer.
                  </span>
                </p>
              </div>
              <div className="flex text-sm gap-2 ">
                <a
                  href="https://github.com/ajramirezdev/portfolio"
                  target="_blank"
                  rel="noreferrer"
                  className="border-1 px-2 border-neutral-800 rounded hover:border-neutral-700 hover:text-neutral-700 transition ease-out duration-500"
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
