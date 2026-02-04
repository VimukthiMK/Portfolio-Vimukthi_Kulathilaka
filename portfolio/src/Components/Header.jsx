import React, { useEffect, useRef, useState } from "react";

// Import all images
import headerBg from "../assets/ui/header-bg-color.png";
import logoLight from "../assets/logo/logo.png";
import logoDark from "../assets/logo/logo_dark.png";
import moonIcon from "../assets/ui/moon_icon.png";
import sunIcon from "../assets/ui/sun_icon.png";
import menuBlack from "../assets/ui/menu-black.png";
import menuWhite from "../assets/ui/menu-white.png";
import closeBlack from "../assets/ui/close-black.png";
import closeWhite from "../assets/ui/close-white.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navLinkRef = useRef(null);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const toggleTheme = () => {
    const root = document.documentElement;

    root.classList.toggle("dark");

    if (root.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current?.classList.add(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20",
        );

        navLinkRef.current?.classList.remove(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent",
        );
      } else {
        navRef.current?.classList.remove(
          "bg-white",
          "bg-opacity-50",
          "backdrop-blur-lg",
          "shadow-sm",
          "dark:bg-darkTheme",
          "dark:shadow-white/20",
        );

        navLinkRef.current?.classList.add(
          "bg-white",
          "shadow-sm",
          "bg-opacity-50",
          "dark:border",
          "dark:border-white/30",
          "dark:bg-transparent",
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleOutsideClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const menuItems = [
    "Home",
    "About me",
    "Services",
    "Projects",
    "Blogs",
    "Contact me",
  ];

  return (
    <>
      {/* background image */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <img src={headerBg} alt="" className="w-full" />
      </div>

      <nav
        ref={navRef}
        className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50"
      >
        {/* logo */}
        <a href="#top">
          <img src={logoLight} alt="Logo" className="w-36 mr-14 dark:hidden" />
          <img
            src={logoDark}
            alt="Logo"
            className="hidden w-36 mr-14 dark:block"
          />
        </a>

        {/* desktop menu */}
        <ul
          ref={navLinkRef}
          className="items-center hidden gap-6 px-12 py-3 bg-white bg-opacity-50 rounded-full shadow-sm md:flex lg:gap-8 font-Ovo dark:border dark:border-white/30 dark:bg-transparent"
        >
          {menuItems.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.split(" ")[0].toLowerCase()}`}
                className="transition hover:text-gray-500 dark:hover:text-gray-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* actions */}
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme}>
            <img src={moonIcon} className="w-5 dark:hidden" />
            <img src={sunIcon} className="hidden w-5 dark:block" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-1.5 border border-gray-300 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full ml-4 font-Ovo dark:border-white/30"
          >
            Contact
          </a>

          <button
            className="relative block ml-3 md:hidden"
            ref={menuButtonRef}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {/* Menu icon */}
            {!isMenuOpen && (
              <>
                <img src={menuBlack} className="w-6 dark:hidden" />
                <img src={menuWhite} className="hidden w-6 dark:block" />
              </>
            )}

            {/* Close icon */}
            {isMenuOpen && (
              <>
                <img src={closeBlack} className="w-6 dark:hidden" />
                <img src={closeWhite} className="hidden w-6 dark:block" />
              </>
            )}
          </button>
        </div>

        {/* mobile menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute right-0 top-12 z-50 w-56 rounded-xl bg-white dark:bg-darkTheme shadow-lg border border-gray-200 dark:border-white/20 md:hidden animate-dropdown"
          >
            {/* Menu items */}
            <ul className="flex flex-col gap-4 px-6 py-6 font-Ovo">
              {menuItems.map((item, i) => (
                <li key={i}>
                  <a
                    href={`#${item.split(" ")[0].toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-sm hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
