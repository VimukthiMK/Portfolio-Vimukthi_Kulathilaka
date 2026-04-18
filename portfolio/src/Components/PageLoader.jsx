import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  initial: { opacity: 1 },
  exit: {
    opacity: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};

// gradient circle
const circleVariants = {
  initial: { scale: 0 },
  animate: {
    scale: 25,
    transition: {
      duration: 2.2,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

//Rotating ring
const ringVariants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const PageLoader = () => {
  //typewriter roles
  const roles = [
    "LOADING PORTFOLIO...",
    "INITIALIZING EXPERIENCE...",
    "PREPARING UI...",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let speed = isDeleting ? 40 : 70;

    const handleTyping = () => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));
      } else {
        setText(current.substring(0, text.length - 1));
      }

      // pause before deleting
      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      // move to next word
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden"
      variants={loaderVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/*Rotating ring */}
      <motion.div
        variants={ringVariants}
        animate="animate"
        className="absolute w-[500px] h-[500px] border border-white/10 rounded-full"
      />

      {/*expanding circle */}
      <motion.div
        variants={circleVariants}
        initial="initial"
        animate="animate"
        className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-black via-[#111] to-[#222]"
      />

      {/*Glow layer */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 18 }}
        transition={{ duration: 2.5 }}
        className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] opacity-20 blur-3xl"
      />

      {/*Glitch background text */}
      <motion.h1
        animate={{ opacity: [1, 0.4, 1, 0.6, 1] }}
        transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 2 }}
        className="absolute text-xl md:text-2xl tracking-widest text-white/20 blur-[1px]"
      >
        {text}
      </motion.h1>

      {/*Main animated text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl tracking-widest z-10 font-semibold"
      >
        {text}
        <span className="ml-1 animate-pulse">|</span>
      </motion.h1>
    </motion.div>
  );
};

export default PageLoader;