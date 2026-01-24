import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaMediumM, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

// Image imports
import logoLight from "../assets/logo/logo.png";
import logoDark from "../assets/logo/logo_dark.png";

 const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vimukthi-kulathilaka-76bb39229",
      icon: FaLinkedinIn,
    },
    {
      name: "GitHub",
      url: "https://github.com/VimukthiMK",
      icon: FaGithub,
    },
    {
      name: "Medium",
      url: "https://medium.com/@vimukthikulathilaka",
      icon: FaMediumM,
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/94765847354",
      icon: FaWhatsapp,
    },
  ];


const Footer = () => {
 
  return (
    <motion.footer
      className="mt-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Top section */}
      <motion.div className="text-center" variants={itemVariants}>
        <a href="#!">
          <img
            src={logoLight}
            alt="Logo"
            className="mx-auto mb-2 w-36 dark:hidden"
          />
          <img
            src={logoDark}
            alt="Logo Dark"
            className="hidden mx-auto mb-2 w-36 dark:block"
          />
        </a>
        <div className="flex items-center gap-2 mx-auto w-max">
          <HiMail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          <a
            href="mailto:vimukthikulathilaka@gmail.com"
            className="transition hover:underline"
          >
            vimukthikulathilaka@gmail.com
          </a>
        </div>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        className="flex items-center justify-center gap-4 mt-8"
        variants={itemVariants}
      >
        {socialLinks.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={social.name}
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>

      {/* Bottom section */}
      <motion.div
        className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3"
        variants={itemVariants}
      >
        <p className="text-sm">
          © {new Date().getFullYear()} Vimukthi Kulathilaka • All rights
          reserved.
        </p>
        <ul className="flex items-center justify-center gap-8 mt-4 sm:mt-0">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a
                target="_blank"
                rel="noreferrer"
                href={social.url}
                className="flex items-center gap-2 hover:underline text-sm group"
              >
                <social.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;