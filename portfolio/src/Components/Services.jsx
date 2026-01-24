import React from "react";
import { motion } from "framer-motion";

// Import all icons
import webIcon from "../assets/ui/web-icon.png";
import mobileIcon from "../assets/ui/mobile-icon.png";
import uiIcon from "../assets/ui/ui-icon.png";
import graphicsIcon from "../assets/ui/graphics-icon.png";
import arrowIcon from "../assets/ui/right-arrow.png";

const services = [
  {
    name: "Web Development",
    icon: webIcon,
    description:
      "Web development is the process of building, programming, and maintaining websites.",
    link: "https://en.wikipedia.org/wiki/Web_development",
  },
  {
    name: "Mobile app",
    icon: mobileIcon,
    description:
      "Developing mobile applications for iOS and Android with smooth UI/UX.",
    link: "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-mobile-app-development",
  },
  {
    name: "UI/ UX design",
    icon: uiIcon,
    description:
      "Designing intuitive and responsive user interfaces and experiences.",
    link: "https://www.figma.com/resource-library/difference-between-ui-and-ux/",
  },
  {
    name: "Graphics design",
    icon: graphicsIcon,
    description:
      "Creating visual content for digital and print media with creativity.",
    link: "https://www.figma.com/resource-library/what-is-graphic-design/",
  },
];

// Framer motion variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    y: -5,
    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
    transition: { duration: 0.3 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Services = () => {
  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h4
        className="mb-2 text-lg text-center font-Ovo"
        variants={cardVariants}
      >
        What I Offer
      </motion.h4>
      <motion.h2
        className="text-5xl text-center font-Ovo"
        variants={cardVariants}
      >
        My Services
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo"
        variants={cardVariants}
      >
        I am a Full Stack Developer with a BSc (Hons) in Software Engineering
        and solid industry expertise. Passionate about building scalable,
        user-focused applications.{" "}
      </motion.p>

      {/* Grid container */}
      <motion.div
        className="grid gap-6 my-10 sm:grid-cols-2 lg:grid-cols-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {" "}
        {services.map((service) => (
          <motion.div
            key={service.name}
            className="px-8 py-12 border border-gray-300 rounded-lg cursor-pointer dark:border-white/30 hover:bg-lightHover dark:hover:bg-darkHover hover:-translate-y-1 hover:shadow-black dark:hover:shadow-white"
            variants={cardVariants}
            whileHover="hover"
          >
            <img src={service.icon} alt={service.name} className="w-10" />
            <h3 className="my-4 text-lg text-gray-700 dark:text-white">
              {service.name}
            </h3>
            <p className="text-sm leading-5 text-gray-600 dark:text-white/80">
              {service.description}
            </p>
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mt-5 text-sm"
            >
              Read more <img src={arrowIcon} alt="" className="w-4" />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
