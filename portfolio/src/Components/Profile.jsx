import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import profileImg from "../assets/profile/profile.png";
import handIcon from "../assets/ui/hand-icon.png";
import downIcon from "../assets/ui/download-icon.png";
import arrowIcon from "../assets/ui/right-arrow-white.png";
import resumePdf from "../assets/profile/CV_Vimukthi-Kulathilaka.pdf";

const Profile = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      {/* Background Parallax */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10"
      >
        <div
          className="w-full h-full bg-cover bg-center opacity-20 dark:opacity-10"
          style={{
            backgroundImage:
              "url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2hzdHp2NW4yNnd5Zndqd2xsb3N0MHFvdHVtd25mOXZ5a254OHAweSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/doXBzUFJRxpaUbuaqz/giphy.gif')",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="flex flex-col items-center w-11/12 max-w-3xl gap-4 mx-auto text-center"
      >
        {/* Profile Image (floating) */}
        <motion.img
          src={profileImg}
          className="w-32 h-32 rounded-full object-cover bg-gray-200 dark:bg-slate-700"
          loading="lazy"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />

        {/* Greeting */}
        <h3 className="flex items-end gap-2 mb-2 text-xl md:text-2xl font-Ovo">
          Hi! I&apos;m Vimukthi Kulathilaka
          <img src={handIcon} alt="hand" className="w-6 mb-1" />
        </h3>

        {/* Title */}
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
          Software Developer based in Sri Lanka.
        </h1>

        {/* Description */}
        <p className="max-w-2xl font-Ovo">
          I am a Full Stack Developer with a BSc (Hons) in Software Engineering
          and solid industry expertise. Passionate about building scalable,
          user-focused applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 mt-4 sm:flex-row">
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about").scrollIntoView({
                behavior: "smooth",
              });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-2.5 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2"
          >
            Explore More
            <img src={arrowIcon} alt="" className="w-4" />
          </motion.a>

          <motion.a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 flex items-center gap-2 bg-white dark:bg-transparent dark:text-white"
          >
            My Resume
            <img src={downIcon} alt="" className="w-4 dark:invert" />
          </motion.a>
        </div>
      </motion.div>

      {/*Scroll Indicator */}
      <motion.div
        className="absolute text-sm bottom-6 opacity-70"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ↓ Scroll Down
      </motion.div>
    </section>
  );
};

export default Profile;