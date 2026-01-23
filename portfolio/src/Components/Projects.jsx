import React, { useState } from "react";
import { motion } from "framer-motion";

import sendIcon from "../assets/right-arrow-bold.png";
import arrowLight from "../assets/right-arrow-bold.png";
import arrowDark from "../assets/right-arrow-bold-dark.png";

// Import project images
import project1 from "../assets/projects/macro-os.webp";
import project2 from "../assets/projects/vehicle_res.png";
import project3 from "../assets/projects/res-red.PNG";
import project4 from "../assets/projects/map-exp.PNG";
import project5 from "../assets/projects/diapredictor.PNG";
import project6 from "../assets/projects/elite-estates.PNG";
import project7 from "../assets/projects/des-shooter.png";
import project8 from "../assets/projects/clearway.png";

const allWork = [
  {
    name: "MacroOS",
    icon: project1,
    description:
      "A simple x86 operating system written in Assembly that displays system-level hardware information.",
    stack: "Assembly",
    link: "#",
  },
  {
    name: "Vehicle Service Reservation App",
    icon: project2,
    description:
      "A secure JSP-based app for scheduling vehicle services, integrated with OAuth 2.0 and WSO2 Asgardeo for identity management.",
    stack: "JSP, Servlet, OAuth 2.0, Asgardeo",
    link: "#",
  },
  {
    name: "Resolute Redemption",
    icon: project3,
    description:
      "A fast-paced, immersive first-person shooter game developed using Unity Engine with cinematic visuals and responsive controls.",
    stack: "Unity 2022.3.7f1, C#",
    link: "https://github.com/VimukthiMK/Resolute_Redemption",
  },
  {
    name: "Map-Explore",
    icon: project4,
    description:
      "A travel-focused web application with map integration, allowing users to explore and mark destinations.",
    stack: "MongoDB, Express.js, React.js, Node.js, Mapbox API, Material-UI",
    link: "https://github.com/VimukthiMK/Map-Explore",
  },
  {
    name: "DiaPredictor",
    icon: project5,
    description:
      "A machine learning web app that predicts diabetes using an SVM classifier with visual analytics.",
    stack: "Python, NumPy, pandas, scikit-learn, Streamlit",
    link: "https://github.com/VimukthiMK/DiaPredictor",
  },
  {
    name: "EliteEstates",
    icon: project6,
    description:
      "A full-stack real estate web application with real-time chat for seamless buyer–seller interactions.",
    stack:
      "MongoDB, Express.js, React, Node.js, Prisma, JWT, Socket.io, SASS, React-Leaflet",
    link: "https://github.com/VimukthiMK/EliteEstates",
  },
  {
    name: "Desert Shooter",
    icon: project7,
    description:
      "A stylized FPS game set in an Egyptian desert, built with Unreal Engine and enhanced animations.",
    stack: "Unreal Engine 4.23.1, Stylized Egypt Pack, FPS Weapon Bundle",
    link: "https://drive.google.com/file/d/1OXE56i2LpjT9b2Ycd7Wf8pQrRiEgFfei/view",
  },
  {
    name: "ClearWay (Group)",
    icon: project8,
    description:
      "A mobile application empowering visually impaired users with real-time navigation, voice guidance, and video assistance.",
    stack: "Flutter, Firebase, Node.js, Riverpod, WebRTC, Gemini AI",
    link: "https://github.com/ClearWayDev/clearway_flutter",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    y: -5,
    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
    transition: { duration: 0.3 },
  },
};

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const showMore = () => setVisibleCount(allWork.length);
  const work = [...allWork].reverse().slice(0, visibleCount);

  return (
    <motion.div
      id="projects"
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
        My Portfolio
      </motion.h4>
      <motion.h2
        className="text-5xl text-center font-Ovo"
        variants={cardVariants}
      >
        My Latest Work
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo"
        variants={cardVariants}
      >
        Welcome to my portfolio! Explore a collection of projects showcasing my
        expertise in Software Development.
      </motion.p>

      <motion.div className="grid gap-6 my-10 sm:grid-cols-2 lg:grid-cols-4">
        {work.map((item) => (
          <motion.div
            key={item.name}
            onClick={() => window.open(item.link, "_blank")}
            className="flex flex-col justify-between overflow-hidden transition-all duration-300 bg-white border border-gray-300 rounded-lg cursor-pointer dark:bg-darkHover group dark:border-white/30 hover:shadow-lg hover:-translate-y-1"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Image section */}
            <div
              className="bg-center bg-no-repeat bg-cover aspect-video"
              style={{ backgroundImage: `url(${item.icon})` }}
            />

            {/* Content section */}
            <div className="flex flex-col flex-1 p-5 ">
              <h2 className="font-semibold text-gray-700 dark:text-white">
                {item.name}
              </h2>
              <p className="flex-1 mt-2 text-sm text-gray-600 dark:text-white/80">
                {item.description}
              </p>
              <p className="mt-2 text-sm text-gray-500 dark:text-white/60">
                Tech Stack: {item.stack}
              </p>
              <div className="flex justify-end mt-4">
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-blue-100 transition">
                  <img src={sendIcon} alt="Send" className="w-5" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {allWork.length > 4 && visibleCount < allWork.length && (
        <motion.button
          onClick={showMore}
          className="flex items-center justify-center gap-2 px-8 py-2 mx-auto my-20 text-gray-700 duration-300 border border-gray-300 rounded-full w-max dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover dark:text-white"
          whileHover={{ scale: 1.05 }}
        >
          Show more
          <img src={arrowLight} alt="" className="w-4 dark:hidden" />
          <img src={arrowDark} alt="" className="hidden w-4 dark:block" />
        </motion.button>
      )}
    </motion.div>
  );
};

export default Projects;
