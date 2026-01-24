import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validate captcha
    const hCaptcha = event.target.querySelector(
      "textarea[name=h-captcha-response]",
    )?.value;
    if (!hCaptcha) {
      toast.error(
        "Please complete the security verification before submitting",
        {
          position: "top-right",
          autoClose: 4000,
        },
      );
      return;
    }

    // Validate form fields
    const formData = new FormData(event.target);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || name.length < 2) {
      toast.error("Please enter a valid name (at least 2 characters)", {
        position: "top-right",
        autoClose: 4000,
      });
      return;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address", {
        position: "top-right",
        autoClose: 4000,
      });
      return;
    }

    if (!message || message.length < 10) {
      toast.error("Please enter a message (at least 10 characters)", {
        position: "top-right",
        autoClose: 4000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast.success(
          "Thank you! Your message has been sent successfully. I'll get back to you soon!",
          {
            position: "top-right",
            autoClose: 5000,
          },
        );
        event.target.reset();

        // Reset captcha
        if (window.hcaptcha) {
          window.hcaptcha.reset();
        }
      } else {
        toast.error(
          `Oops! Something went wrong.Please try again later`,
          {
            position: "top-right",
            autoClose: 5000,
          },
        );
      }
    } catch (error) {
      toast.error(
        "Failed to send message. Please check your internet connection and try again.",
        {
          position: "top-right",
          autoClose: 5000,
        },
      );
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  function CaptchaLoader() {
    const captchadiv = document.querySelectorAll('[data-captcha="true"]');
    if (captchadiv.length) {
      captchadiv.forEach((item) => {
        if (!item.dataset.sitekey) {
          item.dataset.sitekey = process.env.REACT_APP_HCAPTCHA_SITE_KEY;
        }
      });

      // Check if script already exists
      if (!document.querySelector('script[src*="hcaptcha.com"]')) {
        let scriptSrc = "https://js.hcaptcha.com/1/api.js?recaptchacompat=off";
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;
        script.src = scriptSrc;
        document.body.appendChild(script);
      }
    }
  }

  useEffect(() => {
    CaptchaLoader();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-[length:90%_auto] bg-footer-bg bg-center dark:bg-none"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h4
        className="mb-2 text-lg text-center font-Ovo"
        variants={itemVariants}
      >
        Connect with me
      </motion.h4>
      <motion.h2
        className="text-5xl text-center font-Ovo"
        variants={itemVariants}
      >
        Get in touch
      </motion.h2>
      <motion.p
        className="max-w-2xl mx-auto mt-5 mb-12 text-center font-Ovo"
        variants={itemVariants}
      >
        I&apos;d love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <input
          type="hidden"
          name="subject"
          value="New form Submission"
        />

        <motion.div
          className="grid gap-6 mt-10 mb-8 grid-cols-auto"
          variants={itemVariants}
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md outline-none focus:ring-1 dark:border-white/30 dark:bg-darkHover/30"
            required
            name="name"
            minLength={2}
            disabled={isSubmitting}
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md outline-none focus:ring-1 dark:border-white/30 dark:bg-darkHover/30"
            required
            name="email"
            disabled={isSubmitting}
          />
        </motion.div>

        <motion.textarea
          rows="6"
          placeholder="Enter your message"
          className="w-full px-4 py-2 mb-6 bg-white border border-gray-300 rounded-md outline-none focus:ring-1 dark:border-white/30 dark:bg-darkHover/30"
          required
          name="message"
          minLength={10}
          disabled={isSubmitting}
          variants={itemVariants}
        />

        <div className="max-w-full mb-6 h-captcha" data-captcha="true"></div>

        <motion.button
          type="submit"
          className="flex items-center justify-between gap-2 px-8 py-2 mx-auto text-white duration-500 rounded-full w-max bg-black/80 hover:bg-black dark:bg-transparent dark:border dark:border-white/30 dark:hover:bg-darkHover disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={!isSubmitting ? { scale: 1.05 } : {}}
          variants={itemVariants}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit now"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
