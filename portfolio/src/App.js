import React, { useEffect, useState } from "react";
import "./app.css";
import { ToastContainer } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./Components/Header";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import LenisScroll from "./Components/LenisScroll";
import SocialMedia from "./Components/SocialMedia";
import PageLoader from "./Components/PageLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <PageLoader key="loader" />
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="App font-outfit"
        >
          <LenisScroll />
          <Header />
          <Profile />
          <About />
          <Services />
          <Projects />
          <Blogs />
          <Contact />
          <Footer />
          <SocialMedia />

          <ToastContainer
            position="top-center"
            autoClose={4000}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="light"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;