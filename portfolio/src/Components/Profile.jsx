import React from "react";
import { motion } from "framer-motion";

import profileImg from "../assets/profile.png";
import handIcon from "../assets/hand-icon.png";
import downIcon from "../assets/download-icon.png";
import arrowIcon from "../assets/right-arrow-white.png";
import resumePdf from "../assets/CV_Vimukthi-Kulathilaka.pdf";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const Profile = () => {
  return (
    <motion.div
    id="home"
      className="flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-4 mx-auto text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Profile Image */}
      <motion.img
        src={profileImg}
        alt="Profile"
        className="w-32 rounded-full"
        variants={fadeInUp}
      />

      {/* Greeting */}
      <motion.h3
        className="flex items-end gap-2 mb-3 text-xl md:text-2xl font-Ovo"
        variants={fadeInUp}
      >
        Hi! I&apos;m Vimukthi Kulathilaka
        <img src={handIcon} alt="Hand" className="w-6 mb-1" />
      </motion.h3>

      {/* Main Heading */}
      <motion.h1
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
        variants={fadeInUp}
      >
        Software Developer based in Sri Lanka.
      </motion.h1>

      {/* Description */}
      <motion.p
        className="max-w-3xl mx-auto font-Ovo"
        variants={fadeInUp}
      >
I am a Full Stack Developer with a BSc (Hons) in Software Engineering and solid industry expertise. Passionate about building scalable, user-focused applications.      </motion.p>

      {/* Buttons */}
      <motion.div
        className="flex flex-col items-center gap-4 mt-4 sm:flex-row"
        variants={fadeInUp}
      >
        <motion.a
          href="#contact"
          className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          contact me <img src={arrowIcon} alt="Arrow" className="w-4" />
        </motion.a>

        <motion.a
          href={resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          my resume <img src={downIcon} alt="Download" className="w-4 dark:invert" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
