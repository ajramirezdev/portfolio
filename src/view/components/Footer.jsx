import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { LiaGitlab } from "react-icons/lia";

const Footer = () => {
  return (
    <section className="flex justify-center py-24 md:py-28 bg-neutral-950 text-neutral-300">
      <div className="flex items-center text-base gap-3">
        <a
          className="font-bold cursor-pointer sm:text-lg md:text-xl xl:text-2xl hover:text-neutral-400 transition ease-out duration-500"
          href="#top"
        >
          ajramirez.dev
        </a>
        <a
          href="https://www.linkedin.com/in/ajramirezdev"
          className="hover:text-neutral-400 transition ease-out duration-500"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://github.com/ajramirezdev"
          className="hover:text-neutral-400 transition ease-out duration-500"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://gitlab.com/ae_jay"
          className="hover:text-neutral-400 transition ease-out duration-500"
          target="_blank"
          rel="noreferrer"
        >
          <LiaGitlab size={20} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
