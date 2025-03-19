import AboutImg from "../assets/about.png";

export default function About() {
  return (
    <section id="about" className="flex flex-col md:flex-row bg-secondary px-5">
      <div className="md:w-1/2 ">
        <img src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center py-5">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-[#5551e3] mb-4 w-[170px] font-bold">
            About Me
          </h1>
          <p className="text-2xl mb-2">Full Stack Developer</p>
          <p className="">
            "I'm a full-stack developer with a passion for creating dynamic,
            user-friendly applications. With expertise in Java, Spring Boot,
            React.js, and MySQL, I build seamless web solutions. I love
            problem-solving, optimizing performance, and continuously learning
            new technologies. Let’s build something amazing together!"
          </p>
        </div>
      </div>
    </section>
  );
}
