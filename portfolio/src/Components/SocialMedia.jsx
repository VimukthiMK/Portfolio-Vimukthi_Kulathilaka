import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaMediumM, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/vimukthi-kulathilaka-76bb39229", icon: FaLinkedinIn },
  { name: "GitHub", url: "https://github.com/VimukthiMK", icon: FaGithub },
  { name: "Medium", url: "https://medium.com/@vimukthikulathilaka", icon: FaMediumM },
  { name: "Whatsapp", url: "https://wa.me/94765847354", icon: FaWhatsapp },
];

const containerVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const FloatingSocials = () => {
  return (
    <motion.div
      className="
        fixed z-50
        hidden md:flex
        flex-col gap-3
        bottom-4 right-4
        lg:bottom-6 lg:right-6
      "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noreferrer"
          aria-label={social.name}
          variants={itemVariants}
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="
            flex items-center justify-center
            w-10 h-10 lg:w-11 lg:h-11
            rounded-full
            bg-gray-200 text-gray-700
            dark:bg-gray-800 dark:text-gray-200
            hover:bg-gray-300 dark:hover:bg-gray-700
            shadow-md
            transition-colors duration-300
          "
        >
          <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FloatingSocials;
