import React, { useState } from "react";
import { motion } from "framer-motion";

import arrowLight from "../assets/ui/right-arrow-bold.png";
import arrowDark from "../assets/ui/right-arrow-bold-dark.png";

// Import Blog images
import blogImg1 from "../assets/blogs/soft-license.webp";
import blogImg2 from "../assets/blogs/os.webp";
import blogImg3 from "../assets/blogs/evaluation.webp";
import blogImg4 from "../assets/blogs/idx.webp";
import blogImg5 from "../assets/blogs/process.webp";
import blogImg6 from "../assets/blogs/foss.webp";

const allBlogs = [
  {
    title: "What is Software Licensing",
    image: blogImg1,
    description:
      "Explain the basics of software licenses, highlighting their different types, terms, and obligations, and emphasizing the importance of understanding license conditions to ensure legal and proper software use.",
    url: "https://medium.com/@vimukthikulathilaka/what-is-software-licensing-8cf32af2006a",
  },
  {
    title: "Develop a Simple OS to Display Hardware info",
    image: blogImg2,
    description:
      "How to develop a simple operating system to retrieve hardware information. Here assembly language has been utilized to develop this OS.",
    url: "https://medium.com/@vimukthikulathilaka/develop-a-simple-os-to-display-hardware-info-4988668d7505",
  },
  {
    title: "Evaluation techniques for interactive systems",
    image: blogImg3,
    description:
      "Interactive systems use evaluation methodologies to assess usability and effectiveness, helping designers create interfaces that are clear, efficient, and user-friendly.",
    url: "https://medium.com/@vimukthikulathilaka/evaluation-techniques-for-interactive-systems-e722d751cbee",
  },
  {
    title:
      "Google’s Project IDX. Exploring the Future of Cloud-Based Development.",
    image: blogImg4,
    description:
      "What Project IDX is all about and how it could change the way we code using cloud-based development.",
    url: "https://medium.com/@vimukthikulathilaka/is-googles-project-idx-the-vs-code-killer-exploring-the-future-of-cloud-based-development-1572ccea797b",
  },
  {
    title: "A Detailed Guide to Software Process Management Tools in Use",
    image: blogImg5,
    description:
      "An overview of software process management tools used to plan, streamline, and oversee the development lifecycle.",
    url: "https://medium.com/@vimukthikulathilaka/a-detailed-guide-to-software-process-management-tools-in-use-80a62548d063",
  },
  {
    title: "The Evolution of Free and Open Source Software (FOSS) Systems",
    image: blogImg6,
    description:
      "This article discusses the history of FOSS, emphasizing the onion model and community-driven development processes.",
    url: "https://medium.com/@vimukthikulathilaka/the-evolution-of-free-and-open-source-software-foss-systems-32df371eb37b",
  },
];

const Blogs = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const showMore = () => setVisibleCount(allBlogs.length);
  const blogs = [...allBlogs].reverse().slice(0, visibleCount);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -3,
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      id="blogs"
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
        My Blogs
      </motion.h4>
      <motion.h2
        className="text-5xl text-center font-Ovo"
        variants={cardVariants}
      >
        Latest Articles
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo"
        variants={cardVariants}
      >
        Read my latest blogs on development, frameworks, and best practices.
      </motion.p>

      <motion.div className="grid gap-6 my-10 sm:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog) => (
          <motion.div
            key={blog.title}
            onClick={() => window.open(blog.url, "_blank")}
            className="flex flex-col justify-between overflow-hidden transition-all duration-300 border border-gray-200 rounded-lg cursor-pointer bg-gray-50 group dark:bg-darkHover dark:border-white/20 hover:-translate-y-1"
            variants={cardVariants}
            whileHover="hover"
          >
            {/* Blog Image */}
            <div
              className="bg-center bg-no-repeat bg-cover aspect-video"
              style={{ backgroundImage: `url(${blog.image})` }}
            />

            {/* Content */}
            <div className="flex flex-col flex-1 p-4">
              <h2 className="font-semibold text-gray-700 dark:text-white">
                {blog.title}
              </h2>
              <p className="flex-1 mt-2 text-sm text-gray-600 dark:text-white/80">
                {blog.description}
              </p>
              <div className="flex justify-end mt-4">
                <div className="border rounded-full border-gray-400 w-8 aspect-square flex items-center justify-center shadow-[1px_1px_0_#000] group-hover:bg-blue-100 transition">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 3h7v7m0 0L10 21l-7-7 11-11z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {allBlogs.length > 4 && visibleCount < allBlogs.length && (
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

export default Blogs;
