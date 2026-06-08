import { useState } from "react";

import { Link } from "react-scroll";

import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import Logo from "../assets/logo.svg?react";

const Navbar = ({
  theme,
  setTheme,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full">

      <div className="mx-auto max-w-7xl px-6 pt-6">

        <nav className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/70 px-6 py-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/5">

          {/* Logo */}
          <div className="flex items-center justify-center rounded-xl bg-cyan-400 px-1 py-1 text-white dark:text-black">
            <Logo className="h-8 w-auto" />
          </div>

          {/* Nav */}
          <div className="hidden md:flex">

            <ul className="flex items-center gap-8 text-sm font-medium">

              {[
                "home",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer capitalize text-gray-700 transition hover:text-cyan-400 dark:text-gray-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Theme Toggle */}
            <button
              onClick={() =>
                setTheme(
                  theme === "dark"
                    ? "light"
                    : "dark"
                )
              }
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/5 transition hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >

              {theme === "dark" ? (
                <FaSun />
              ) : (
                <FaMoon />
              )}

            </button>

            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-black/5 md:hidden dark:border-white/10 dark:bg-white/5"
            >

              {menuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}

            </button>

            {/* Resume */}

            <a
              href="/Ashis_Barik_Resume.pdf"
              download
              className="rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >Resume</a>

          </div>

        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-4 rounded-2xl border border-black/10 bg-white/80 p-6 backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/90 md:hidden">

            <ul className="space-y-6 text-center">

              {[
                "home",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="block cursor-pointer text-lg capitalize text-gray-700 transition hover:text-cyan-400 dark:text-gray-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>
        )}

      </div>

    </header>
  );
};

export default Navbar;