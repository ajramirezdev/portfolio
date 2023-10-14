import Form from "./Form";
import { FaLinkedin } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="p-6 py-12 pb-20 sm:pt-10 md:py-24 xl:pb-32 xl:pt-28 contact-img"
    >
      <div className="flex justify-between items-center mb-12 md:mb-16 xl:mb-24 max-w-650 mx-auto">
        <div className="abril-font text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-neutral-800">
          Get in touch
        </div>
        <div className="">
          <a
            href="https://www.linkedin.com/in/ajramirezdev"
            className="hover:text-neutral-700 transition ease-out duration-500"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="mailto:ajlimramirez@gmail.com"
            className="hover:text-neutral-700 transition ease-out duration-500"
          >
            <BiLogoGmail size={25} />
          </a>
        </div>
      </div>
      <Form />
    </section>
  );
};

export default Contact;
