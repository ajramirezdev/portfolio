import { FaLinkedin, FaGithub, FaXmark } from "react-icons/fa6";
import { LiaGitlab } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBar = () => {
  const [drop, setDrop] = useState(false);

  const dropMenu = () => {
    setDrop(!drop);
  };

  return (
    <nav className="text-neutral-500 relative max-w-7xl mx-auto">
      <div className="flex justify-between p-6 md:px-10 lg:py-10 items-center">
        <div className="flex items-center text-xl lg:text-2xl gap-3">
          <div className="font-bold cursor-pointer hover:text-neutral-400 transition ease-out duration-500">
            ajramirez.dev
          </div>
          <a
            href="https://www.linkedin.com/in/ajramirezdev"
            className="hover:text-neutral-400 transition ease-out duration-500"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ajramirezdev"
            className="hover:text-neutral-400 transition ease-out duration-500"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://gitlab.com/ae_jay"
            className="hover:text-neutral-400 transition ease-out duration-500"
            target="_blank"
            rel="noreferrer"
          >
            <LiaGitlab />
          </a>
        </div>
        {drop ? (
          <button className="sm:hidden hover:text-neutral-400 transition ease-out duration-500">
            <FaXmark onClick={dropMenu} size={20} />
          </button>
        ) : (
          <button className="sm:hidden hover:text-neutral-400 transition ease-out duration-500">
            <GiHamburgerMenu onClick={dropMenu} size={20} />
          </button>
        )}
        <div className="hidden sm:flex gap-3 font-medium text-lg lg:text-xl">
          <a
            className="hover:text-neutral-400 transition ease-out duration-500"
            href="#about"
          >
            About
          </a>
          <a
            className="hover:text-neutral-400 transition ease-out duration-500"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="hover:text-neutral-400 transition ease-out duration-500"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
      {drop ? (
        <div className="flex flex-col items-end px-4 absolute right-0 sm:hidden font-medium z-10 transform transition-all duration-300">
          <a className="p-1" href="#about">
            About
          </a>
          <a className="p-1" href="#projects">
            Projects
          </a>
          <a className="p-1" href="#contact">
            Contact
          </a>
        </div>
      ) : (
        <div className="flex flex-col items-end px-4 absolute right-0 sm:hidden font-medium -z-10 transform transition-all -translate-y-16 opacity-0 duration-300">
          <a className="p-1" href="#about">
            About
          </a>
          <a className="p-1" href="#projects">
            Projects
          </a>
          <a className="p-1" href="#contact">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
