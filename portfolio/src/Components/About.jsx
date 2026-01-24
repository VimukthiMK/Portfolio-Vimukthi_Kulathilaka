import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import eduIcon from "../assets/ui/edu-icon.png";
import eduIconDark from "../assets/ui/edu-icon-dark.png";
import projectIcon from "../assets/ui/project-icon.png";
import projectIconDark from "../assets/ui/project-icon-dark.png";

// Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const hoverUp = {
  hover: {
    y: -5,
    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
    transition: { duration: 0.3 },
  },
};

  const educationData = [
        {
      title: "Ananda College, Colombo 10, Sri Lanka",
      year: "2011 - 2019",
      description:
        "School Education | Physical Science Stream | 2A 1C | z-Score - 1.6770",
      icon1: eduIcon,
      icon2: eduIconDark,
    },
    {
      title:
        "Bsc(Hons)Software Engineering - University of Kelaniya, Sri Lanka",
      year: "2021 - 2025",
      description: "Class : Second Class Upper Division",
      icon1: eduIcon,
      icon2: eduIconDark,
    },
  ];

    const workData = [
       {
      title: "Intern Software Engineer | icieos (Pvt) Ltd",
      year: "Jun 2024 – Jan 2025",
      description:
        "Participated in cross-functional full-stack development projects within a fast-paced Agile environment, contributing to both backend and frontend services using React.js, Spring Boot, Node.js, and Next.js. Worked closely with team leads to improve internal processes through iterative API development and performance tuning. Contributed to UI/UX enhancements by refining interfaces and translating requirements into intuitive designs using Figma, HTML, CSS, and Tailwind. Actively engaged in quality assurance through API testing with Postman and collaborative debugging sessions.",
      icon1: projectIcon,
      icon2: projectIconDark,
    },
    {
      title: "Associate Software Engineer | icieos (Pvt) Ltd",
      year: "Jan 2025 – May 2025",
      description:
        "Served as an internal supervisor for internship teams, supporting task planning, mentoring, and progress reviews while acting as the project reporter for two major software projects. Contributed to software development with a strong focus on quality, timelines, and Agile delivery. Gained hands-on experience in project coordination using Jira and Confluence, translating business requirements into actionable sprint goals, and collaborating closely with cross-functional teams to ensure smooth execution and stakeholder alignment.",
      icon1: projectIcon,
      icon2: projectIconDark,
    },
  ];

   // Tools with Skillicons CDN
  const tools = [
    "c",
    "java",
    "js",
    "ts",
    "php",
    "python",
    "dart",
    "html",
    "css",
    "spring",
    "react",
    "redux",
    "nodejs",
    "express",
    "nextjs",
    "flutter",
    "tailwind",
    "mysql",
    "postgres",
    "mongodb",
    "sqlite",
    "docker",
    "redis",
    "aws",
    "git",
    "github",
    "postman",
    "firebase",
    "figma",
    "vscode",
  ].map((tool) => ({
    name: tool,
    icon: `https://skillicons.dev/icons?i=${tool}`,
  }));

const About = () => {
  const [activeTab, setActiveTab] = useState("Education");

  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20 flex flex-col items-center relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h4
        className="mb-2 text-lg text-center font-Ovo"
        variants={fadeInUp}
      >
        Introduction
      </motion.h4>
      <motion.h2
        className="mb-10 text-5xl text-center font-Ovo"
        variants={fadeInUp}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl mb-10 text-center font-Ovo"
        variants={fadeInUp}
      >
        I am a motivated Software Engineering graduate and Full Stack Developer
        with strong industry expertise. I bring proven leadership, analytical
        thinking, and problem-solving skills, and have contributed to building
        impactful digital solutions within dynamic, team-driven development
        environments.
      </motion.p>

      {/* Tabs */}
      <motion.div className="flex gap-4 mb-10" variants={fadeInUp}>
        {["Education", "Work Experience"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 font-Ovo rounded-lg cursor-pointer border transition-colors duration-300 ${
              activeTab === tab
                ? "bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white border-transparent"
                : "bg-white dark:bg-darkHover text-gray-700 dark:text-white border-gray-300 dark:border-white/30"
            }`}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* AnimatePresence for smooth tab content transition */}
      <AnimatePresence mode="wait">
        <motion.ul
          key={activeTab}
          className="grid w-full max-w-4xl grid-cols-1 gap-6 mb-10 sm:grid-cols-2 lg:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
        >
          {(activeTab === "Education" ? educationData : workData).reverse().map(
            (item, index) => (
              <motion.li
                key={index}
                className="p-6 border border-gray-300 cursor-pointer rounded-xl dark:border-white/30 hover:bg-lightHover dark:hover:bg-darkHover/50 hover:shadow-black dark:hover:shadow-white/50"
                whileHover={hoverUp.hover}
              >
                <img src={item.icon1} alt="" className="mt-3 w-7 dark:hidden" />
                <img
                  src={item.icon2}
                  alt=""
                  className="hidden mt-3 w-7 dark:block"
                />
                <h3 className="my-3 font-semibold text-gray-700 dark:text-white">
                  {item.title}
                </h3>
                <p className="mb-2 text-sm text-gray-500 dark:text-white/80">
                  {item.year}
                </p>
                <p className="text-sm text-justify text-gray-600 dark:text-white/80">
                  {item.description}
                </p>{" "}
              </motion.li>
            ),
          )}
        </motion.ul>
      </AnimatePresence>

      {/* Skills Section */}
      <motion.h4
        className="my-6 text-gray-700 font-Ovo dark:text-white/80"
        variants={fadeInUp}
      >
        Languages & Tools I Use
      </motion.h4>

      <motion.ul className="flex flex-wrap items-center gap-3 sm:gap-5">
        {tools.map((tool) => (
          <motion.li
            key={tool.name}
            className="flex items-center justify-center w-12 transition-all border border-gray-300 rounded-lg cursor-pointer sm:w-14 aspect-square dark:border-white/30 hover:-translate-y-1"
            variants={fadeInUp}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default About;
