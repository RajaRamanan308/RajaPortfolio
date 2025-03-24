import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <header className="header flex justify-between px-5 py-2 bg-secondary">
        <a
          className="font-bold text-xl text-black duration-500 hover:text-white"
          href="#hero"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
        <nav className="hidden md:block">
          <ul className="flex text-xl text-white">
            <li>
              <a
                className="duration-100 navi"
                href="#hero"
                rel="noopener noreferrer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="duration-100 navi"
                href="#about"
                rel="noopener noreferrer"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="duration-100 navi"
                href="#project"
                rel="noopener noreferrer"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="duration-100 navi"
                href="#resume"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className="duration-100 navi"
                href="#contact"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        {toggleMenu && (
          <nav className="block md:hidden">
            <ul
              onClick={() => setToggleMenu(!toggleMenu)}
              className="flex flex-col text-white mobile-nav text-xl"
            >
              <li>
                <a href="#hero" rel="noopener noreferrer">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" rel="noopener noreferrer">
                  About
                </a>
              </li>
              <li>
                <a href="#project" rel="noopener noreferrer">
                  Projects
                </a>
              </li>
              <li>
                <a href="#resume" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" rel="noopener noreferrer">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="Block md:hidden"
        >
          <Bars3Icon className="text-white h-5" />
        </button>
      </header>
    </>
  );
}

export default Header;
