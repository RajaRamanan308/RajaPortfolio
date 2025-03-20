import HeroImg from "../assets/hero.png";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Speed from "./Speed";

function Hero() {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center"
      >
        <div className="md:w-1/2 flex flex-col">
          <h1 className="text-white text-4xl fonstyle">
            Hi,
            <br />
            I'm K RAJA RAMANAN
            <p className="text-2xl">
              And I'm a{" "}
              <span className="text text-blue-400">
                <Speed />
              </span>
            </p>
          </h1>
          <div className="flex py-2">
            <a
              className="pr-3 hover:text-white"
              href="https://www.linkedin.com/in/rajaramana308/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              className="pr-3 hover:text-white"
              href="https://wa.me/9385754667"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={30} />
            </a>
            <a
              className="pr-3 hover:text-white"
              href="https://www.instagram.com/rajatheking2308/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram size={30} />
            </a>
            <a
              className="hover:text-white"
              href="https://github.com/RajaRamanan308"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
        <img className="md:w-1/3" src={HeroImg} alt="" />
      </section>
      <script src="speed.js"></script>
    </>
  );
}

export default Hero;
