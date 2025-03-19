import ecomweb1 from "../assets/portfolio.avif";
import ecomweb2 from "../assets/weather.png";
import ecomweb3 from "../assets/website-blog.jpg";

export default function Project() {
  return (
    <section
      id="project"
      className="flex flex-col py-10 px-5 bg-primary text-white"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-[#2b2d77] font-bold w-[134px] mb-4">
            Projects
          </h1>
          <p>
            Explore some of my featured projects where I showcase my skills in
            web development, backend integration, and database management. Each
            project reflects my expertise in technologies like Java, Spring
            Boot, MySQL, React, and more. Click below to view the project
            details or visit the Git repository for the code.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={ecomweb1} />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">
                Showcasing my web development projects built using HTML, CSS,
                JavaScript, React. Explore live demos and code repositories.
              </p>
              <div className="flex justify-between px-1">
                <p>
                  <a className="btn text-center" href="">
                    Explore
                  </a>
                </p>
                <p>
                  <a className="btn text-center" href="">
                    Repositories
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={ecomweb2} />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">
                Get real-time weather updates with a sleek and responsive
                design.
              </p>
              <div className="flex justify-between px-1">
                <p>
                  <a
                    className="btn text-center"
                    href="https://rajaramanan308.github.io/weather-project/"
                  >
                    Explore
                  </a>
                </p>
                <p>
                  <a
                    className="btn text-center"
                    href="https://github.com/RajaRamanan308/weather-project"
                  >
                    Repositories
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={ecomweb3} />
            <div className="absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100">
              <p className="text-center px-5 py-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet, numquam?
              </p>
              <div className="flex justify-between px-1">
                <p>
                  <a className="btn text-center" href="">
                    Explore
                  </a>
                </p>
                <p>
                  <a className="btn text-center" href="">
                    Repositories
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
