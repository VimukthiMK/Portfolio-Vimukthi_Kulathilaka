import React, { useEffect, useState } from "react";
import "./app.css";
import { ToastContainer } from "react-toastify";

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

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load (assets, fonts, etc.)
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    if (loading) {
  return (
    <div className="page-loader">
      <div className="loader">
        <span className="loader-dot" />
      </div>
    </div>
  );
}
  }

  return (
    <div className="App font-outfit">
      <LenisScroll />
      <Header />
      <Profile />
      <About />
      <Services />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />

      {/* Fixed Social Icons */}
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
    </div>
  );
}

export default App;
