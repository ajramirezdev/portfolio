import Technologies from "./Technologies";

const About = () => {
  return (
    <section
      id="about"
      className="p-6 px-8 about-img sm:p-10 md:py-16 xl:py-60"
    >
      <div className="lg:max-w-7xl mx-auto lg:p-10 xl:flex xl:p-0 xl:flex-row-reverse gap-6">
        <div className="mb-9 md:mb-14 max-w-690 mx-auto xl:border-l-4 xl:pl-4 xl:border-neutral-600 xl:m-0">
          <div className="abril-font text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-neutral-800 mb-6 md:mb-9">
            About me
          </div>
          <p className="text-neutral-800 text-2xl sm:text-3xl md:text-4xl xl:text-5xl mb-4 md:mb-6 font-light pl-2">
            I am a Full Stack Developer based in the Philippines.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-light text-neutral-800 pl-2">
            I enjoy creating creating user-friendly, captivating websites and
            web applications. When I'm not coding, you can catch me playing
            games, cooking, or taking my dogs out for a walk in park.
          </p>
        </div>
        <Technologies />
      </div>
    </section>
  );
};

export default About;
