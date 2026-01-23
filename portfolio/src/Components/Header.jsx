import React, { useEffect, useRef } from "react";

// Import all images
import headerBg from "../assets/header-bg-color.png";
import logoLight from "../assets/logo.png";
import logoDark from "../assets/logo_dark.png";
import moonIcon from "../assets/moon_icon.png";
import sunIcon from "../assets/sun_icon.png";
import menuBlack from "../assets/menu-black.png";
import menuWhite from "../assets/menu-white.png";
import closeBlack from "../assets/close-black.png";
import closeWhite from "../assets/close-white.png";

const Header = () => {
  const sideMenuRef = useRef(null);
  const navRef = useRef(null);
  const navLinkRef = useRef(null);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

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

          <button className="block ml-3 md:hidden" onClick={openMenu}>
            <img src={menuBlack} className="w-6 dark:hidden" />
            <img src={menuWhite} className="hidden w-6 dark:block" />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="fixed top-0 bottom-0 flex flex-col w-64 gap-4 px-10 py-20 transition duration-500 md:hidden -right-64 bg-rose-50 font-Ovo dark:bg-darkHover"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <img src={closeBlack} className="w-5 dark:hidden" />
            <img src={closeWhite} className="hidden w-5 dark:block" />
          </div>

          {menuItems.map((item, i) => (
            <li key={i}>
              <a href="#" onClick={closeMenu}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
